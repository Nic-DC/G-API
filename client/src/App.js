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
  const [restaurants, setData] = useState([]);
  console.log(`Fetched RESTAURANTS: `, restaurants);

  const [coordinates, setCoordinates] = useState({});
  console.log(`COORDINATES: `, coordinates);

  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPlacesData(bounds.sw, bounds.ne);
      setData(response.data.data);
    };

    fetchData();
  }, [coordinates, bounds]);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Header />
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <List restaurants={restaurants} />
            {/* <PlaceDetails /> */}
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              restaurants={restaurants}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default App;
