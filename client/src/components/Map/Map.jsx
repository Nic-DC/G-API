import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";
// import mapStyles from "../../mapStyles";

import { MapContainer, markerContainer, paper, pointer } from "./styles";

const Map = ({ coordinates, setCoordinates, setBounds, places, setChildClicked }) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      {" "}
      {coordinates && (
        <MapContainer>
          <GoogleMapReact
            // bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
            bootstrapURLKeys={{ key: "AIzaSyCtvoQjuT-dfr5-0yYGZyg_YSaW5OC6t-0" }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            // options={""}
            onChange={(e) => {
              console.log(`EVENT: `, e);
              setCoordinates({ lat: e.center.lat, lng: e.center.lng });
              setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
            }}
            onChildClick={(child) => setChildClicked(child)}
          >
            {places?.map((place, i) => (
              <div
                className={markerContainer}
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                $hover="false"
                key={i}
              >
                {!matches ? (
                  <LocationOnOutlinedIcon color="primary" fontSize="large" />
                ) : (
                  <Paper elevation={3} className={paper.root}>
                    <Typography className={paper.typography} variant="subtitle2" gutterBottom>
                      {" "}
                      {place.name}
                    </Typography>
                    <img
                      className={pointer}
                      src={
                        place.photo
                          ? place.photo.images.large.url
                          : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                      }
                      alt={place.name}
                    />
                    <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                  </Paper>
                )}
              </div>
            ))}
          </GoogleMapReact>
        </MapContainer>
      )}
    </>
  );
};

export default Map;

// import React from "react";
// import GoogleMapReact from "google-map-react";
// import { Paper, Typography, useMediaQuery } from "@mui/material";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import Rating from "@mui/material/Rating";
// // import mapStyles from "../../mapStyles";
// import { mapContainer, markerContainer, paper, pointer } from "./styles";

// const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
//   const matches = useMediaQuery("(min-width:600px)");

//   return (
//     <div className={mapContainer}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
//         defaultCenter={coords}
//         center={coords}
//         defaultZoom={14}
//         margin={[50, 50, 50, 50]}
//         // options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
//         // options={{ disableDefaultUI: true, zoomControl: true }}
//         options={""}
//         onChange={(e) => {
//           setCoords({ lat: e.center.lat, lng: e.center.lng });
//           setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
//         }}
//         onChildClick={(child) => setChildClicked(child)}
//       >
//         {places?.length &&
//           places.length &&
//           places.map((place, i) => (
//             <div className={markerContainer} lat={Number(place.latitude)} lng={Number(place.longitude)} key={i}>
//               {!matches ? (
//                 <LocationOnOutlinedIcon color="primary" fontSize="large" />
//               ) : (
//                 <Paper elevation={3} className={paper}>
//                   <Typography className={paper.typography} variant="subtitle2" gutterBottom>
//                     {" "}
//                     {place.name}
//                   </Typography>
//                   <img
//                     className={pointer}
//                     src={
//                       place.photo
//                         ? place.photo.images.large.url
//                         : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
//                     }
//                   />
//                   <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
//                 </Paper>
//               )}
//             </div>
//           ))}
//         {weatherData?.list?.length &&
//           weatherData.list.map((data, i) => (
//             <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
//               <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
//             </div>
//           ))}
//       </GoogleMapReact>
//     </div>
//   );
// };

// export default Map;
