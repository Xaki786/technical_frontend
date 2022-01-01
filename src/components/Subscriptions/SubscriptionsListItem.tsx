import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Subscription } from "../../utils/types";
const SubscriptionsListItem = ({ item }: { item: Subscription }) => {
  const { firstname, lastname, profession, gender, hairColor, hairLength } =
    item;
  return (
    <Grid item sx={{ mt: 3 }}>
      <Card sx={{ minWidth: 280, maxWidth: 420, width: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.picture as string}
            alt={`${item.firstname}-picture`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {firstname} {lastname}
            </Typography>
            {profession && (
              <Typography variant="body2" color="text.secondary">
                <strong>Profession: </strong> {profession}
              </Typography>
            )}
            {gender && (
              <Typography variant="body2" color="text.secondary">
                <strong>Gender: </strong> {gender}
              </Typography>
            )}
            {hairColor && (
              <Typography variant="body2" color="text.secondary">
                <strong>Hair Color: </strong> {hairColor}
              </Typography>
            )}
            {hairLength && (
              <Typography variant="body2" color="text.secondary">
                <strong>Hair Length: </strong> {hairLength}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default SubscriptionsListItem;
