import { Grid } from "@mui/material";
import { Subscription } from "../../utils/types";
import SubscriptionsListItem from "./SubscriptionsListItem";

const SubscriptionsList = ({ items }: { items: Subscription[] }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      alignContent="center"
      flexWrap="wrap"
      spacing={3}
      sx={{ mt: 1, p: 1 }}
    >
      {items.map((item) => (
        <SubscriptionsListItem key={item.firstname} item={item} />
      ))}
    </Grid>
  );
};

export default SubscriptionsList;
