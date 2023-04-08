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

// import { styled, alpha } from "@mui/system";
// import InputBase from "@mui/material/InputBase";
// import Toolbar from "@mui/material/Toolbar";

// export const SearchBox = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// export const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// export const Input = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   padding: theme.spacing(1, 1, 1, 0),
//   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//   marginLeft: `calc(${theme.spacing(4)}px)`,
//   transition: theme.transitions.create("width"),
//   width: "100%",
//   [theme.breakpoints.up("md")]: {
//     width: "20ch",
//   },
// }));

// export const ToolbarStyled = styled(Toolbar)({
//   display: "flex",
//   justifyContent: "space-between",
// });
