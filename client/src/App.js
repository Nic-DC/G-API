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
  const [places, setPlaces] = useState([]);
  console.log(`Fetched PLACES: `, places);

  const [filteredPlaces, setFilteredPlaces] = useState([]);
  console.log(`Fetched FILTERED PLACES: `, filteredPlaces);

  const [coordinates, setCoordinates] = useState({});
  console.log(`COORDINATES: `, coordinates);

  const [bounds, setBounds] = useState({});

  const [wheaterData, setWeatherData] = useState();

  const [childClicked, setChildClicked] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const onPlaceChanged = (place) => {
    console.log("Selected Place:", place);
    // Update the coordinates state with the new place's coordinates
    if (place.geometry) {
      const { lat, lng } = place.geometry.location;
      setCoordinates({ lat: lat(), lng: lng() });
    } else {
      console.log("No geometry data available for the selected place.");
    }
  };

  const onLoad = (autocomplete) => {
    console.log("Autocomplete Loaded:", autocomplete);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    setIsLoading(true);
    if (bounds.sw && bounds.ne) {
      const fetchData = async () => {
        const response = await getPlacesData(type, bounds.sw, bounds.ne);
        setPlaces(response.data.data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setIsLoading(false);
      };

      fetchData();
    }
  }, [type, bounds]);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <List
              places={filteredPlaces.lenght ? filteredPlaces : places}
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
              places={filteredPlaces.lenght ? filteredPlaces : places}
              setChildClicked={setChildClicked}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default App;
