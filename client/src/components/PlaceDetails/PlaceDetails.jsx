import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Rating from "@mui/material/Rating";
// import { chip, subtitle, spacing } from "./styles.js";

import { chip as ChipStyled, subtitle as SubtitleStyled, spacing as SpacingStyled } from "./styles.js";

const PlaceDetails = ({ restaurant }) => {
  //if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Card elevation={6} sx={{ height: 350 }}>
      <CardMedia
        image={
          restaurant.photo
            ? restaurant.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={restaurant.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {restaurant.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(restaurant.rating)} readOnly />
          <Typography component="legend">
            {restaurant.num_reviews} review{restaurant.num_reviews > 1 && "s"}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {restaurant.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {restaurant.ranking}
          </Typography>
        </Box>
        {restaurant?.awards?.map((award) => (
          <SpacingStyled>
            <img src={award.images.small} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </SpacingStyled>
        ))}
        {restaurant?.cuisine?.map(({ name }) => (
          <ChipStyled key={name} size="small" label={name} />
        ))}
        {restaurant.address && (
          <SubtitleStyled>
            <LocationOnIcon />
            {restaurant.address}
          </SubtitleStyled>
        )}
        {restaurant.phone && (
          <SpacingStyled>
            <PhoneIcon /> {restaurant.phone}
          </SpacingStyled>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(restaurant.web_url, "_blank")}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(restaurant.website, "_blank")}>
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
// <Card elevation={6}>
//   <CardMedia
//     style={{ height: 350 }}
//     image={
//       place.photo
//         ? place.photo.images.large.url
//         : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
//     }
//     title={place.name}
//   />
//   <CardContent>
//     <Typography gutterBottom variant="h5">
//       {place.name}
//     </Typography>
//     <Box display="flex" justifyContent="space-between" my={2}>
//       <Rating name="read-only" value={Number(place.rating)} readOnly />
//       <Typography component="legend">
//         {place.num_reviews} review{place.num_reviews > 1 && "s"}
//       </Typography>
//     </Box>
//     <Box display="flex" justifyContent="space-between">
//       <Typography component="legend">Price</Typography>
//       <Typography gutterBottom variant="subtitle1">
//         {place.price_level}
//       </Typography>
//     </Box>
//     <Box display="flex" justifyContent="space-between">
//       <Typography component="legend">Ranking</Typography>
//       <Typography gutterBottom variant="subtitle1">
//         {place.ranking}
//       </Typography>
//     </Box>
//     {place?.awards?.map((award) => (
//       <SpacingStyled>
//         <img src={award.images.small} />
//         <Typography variant="subtitle2" color="textSecondary">
//           {award.display_name}
//         </Typography>
//       </SpacingStyled>
//     ))}
//     {place?.cuisine?.map(({ name }) => (
//       <ChipStyled key={name} size="small" label={name} />
//     ))}
//     {place.address && (
//       <SubtitleStyled>
//         <LocationOnIcon />
//         {place.address}
//       </SubtitleStyled>
//     )}
//     {place.phone && (
//       <SpacingStyled>
//         <PhoneIcon /> {place.phone}
//       </SpacingStyled>
//     )}
//   </CardContent>
//   <CardActions>
//     <Button size="small" color="primary" onClick={() => window.open(place.web_url, "_blank")}>
//       Trip Advisor
//     </Button>
//     <Button size="small" color="primary" onClick={() => window.open(place.website, "_blank")}>
//       Website
//     </Button>
//   </CardActions>
// </Card>
