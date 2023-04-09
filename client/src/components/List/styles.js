import { styled } from "@mui/system";
import { FormControl } from "@mui/material";

export const container = styled("div")({
  padding: "25px",
});

export const formControl = styled(FormControl)({
  margin: 1,
  minWidth: 120,
  marginBottom: "30px",
  marginTop: "10px",
});

export const selectEmpty = styled("div")({
  marginTop: 2,
});

export const loading = styled("div")({
  height: "600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const marginBottom = styled("div")({
  marginBottom: "30px",
});

export const list = styled("div")({
  height: "75vh",
  overflow: "auto",
});
