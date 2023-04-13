import React, { useEffect, useRef } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { Autocomplete } from "@react-google-maps/api";

import SearchIcon from "@mui/icons-material/Search";
import { SearchBox, SearchIconWrapper, Input, ToolbarStyled } from "./styles";

const Header = ({ onPlaceChanged, onLoad }) => {
  return (
    <AppBar position="static">
      <ToolbarStyled>
        <Typography variant="h5" display={{ xs: "none", sm: "block" }}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" display={{ xs: "none", sm: "block" }}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <SearchBox>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <Input placeholder="Search…" />
            </SearchBox>
          </Autocomplete>
        </Box>
      </ToolbarStyled>
    </AppBar>
  );
};

export default Header;
