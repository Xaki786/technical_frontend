import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import useSearchForm from "./useSearchForm";
import SubscriptionsList from "../Subscriptions/SubscriptionsList";

export default function SearchForm() {
  const [search, setsearch] = useState<string>("");
  const [enabled, setenabled] = useState(false);
  const [query, setquery] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setenabled(true);
    setsearch("");
    setquery(search);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setenabled(false);
    setsearch(e.target.value);
  };
  const { data, isSuccess } = useSearchForm({ enabled, params: query });
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 10 }}
      >
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <Paper sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google Maps"
                inputProps={{ "aria-label": "search google maps" }}
                value={search}
                onChange={handleSearch}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>
          </form>
        </Grid>
      </Grid>
      {isSuccess && <SubscriptionsList items={data?.data} />}
    </>
  );
}
