import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiAppBar-root": {
      boxShadow: "none",
      backgroundColor: "transparent",
      color: "black",
      marginTop: "2em",
    },
    "& .MuiToolBar-root": {
      width: "100%",
    },
  },
  logo: {
    cursor: "pointer",

    width: "3.75rem",
    height: "3.75rem",
  },
  cartshipping: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cart: {
    "& > *": {
      margin: "0 8px 0 8px",
    },
  },
  navicons: {
    "& > *": {
      margin: "0 0 0 40px",
      cursor: "pointer",
    },
  },
  menuButton: {
    flexShrink: 0,
    lineHeight: "10px",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  drawerpaper: {
    width: "70%",
  },
  title: {
    flexGrow: 0,
    cursor: "pointer",
    textTransform: "uppercase",
    margin: "0 0 0 20px",
    fontWeight: "500",
  },
  shipping: {
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  navspan: {
    "&::before": {
      content: '""',
      display: "block",
      height: "1px",
      width: "25px",
      marginTop: "0px",
      backgroundColor: "black",
    },
  },
  search: {
    marginLeft: "1em",
  },
  navelements: {
    "& > div": {
      height: "3px",
      backgroundColor: "black",
      margin: "0 0 4px 0",
      cursor: "pointer",
    },
  },
  topbar: {
    width: "20px",
  },
  bottombar: {
    width: "10px",
  },
}));
export default useStyles;
