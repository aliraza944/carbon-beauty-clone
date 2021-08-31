import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "25em 0 0 0",
    width: "80%",
    zIndex: 10,
    overflowX: "hidden",

    "& .MuiTypography-root": {
      color: "black",
      fontWeight: "800",
      fontSize: "12rem",
      letterSpacing: "2px",
    },
  },
}));
export default useStyles;
