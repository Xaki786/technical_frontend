import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Subscription } from "../../utils/types";
const SubscriptionsListItem = ({ item }: { item: Subscription }) => {
  return (
    <Grid item sx={{ mt: 3 }}>
      <Card sx={{ width: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.firstname} {item.lastname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Gender: </strong> {item.gender}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Hair Color: </strong> {item.hairColor}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Hair Length: </strong> {item.hairLength}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default SubscriptionsListItem;
