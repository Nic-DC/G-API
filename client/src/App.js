import React, { useEffect, useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid } from "@mui/material";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

import { getPlacesData } from "./api";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const [places, setData] = useState([]);
  console.log(`Fetched PLACES: `, places);

  const [coordinates, setCoordinates] = useState({});
  console.log(`COORDINATES: `, coordinates);

  const [bounds, setBounds] = useState({});

  const [childClicked, setChildClicked] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const response = await getPlacesData(type, bounds.sw, bounds.ne);
      setData(response.data.data);
      setIsLoading(false);
    };

    fetchData();
  }, [type, coordinates, bounds]);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Header />
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <List
              places={places}
              childClicked={childClicked}
              isLoading={isLoading}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
            {/* <PlaceDetails /> */}
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              places={places}
              setChildClicked={setChildClicked}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default App;
