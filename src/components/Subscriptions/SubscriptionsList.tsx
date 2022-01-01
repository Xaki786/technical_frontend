import { Grid } from "@mui/material";
import { Subscription } from "../../utils/types";
import SubscriptionsListItem from "./SubscriptionsListItem";

const SubscriptionsList = ({ items }: { items: Subscription[] }) => {
  return items?.length ? (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      flexWrap="wrap"
      spacing={3}
      sx={{ mt: 1, p: 1 }}
    >
      {items.map((item) => (
        <SubscriptionsListItem key={item._id} item={item} />
      ))}
    </Grid>
  ) : null;
};

export default SubscriptionsList;
