import { styled, alpha } from "@mui/system";
import { InputBase } from "@mui/material";

export const SearchBox = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  left: theme.spacing(1),
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Input = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  paddingLeft: theme.spacing(6),
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "20ch",
  },
}));

export const ToolbarStyled = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 1rem",
});
