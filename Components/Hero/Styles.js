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
  carbonbeauty: {
    width: "100%",

    position: "fixed",
    left: "40%",
    top: "22%",

    zIndex: -1,
  },
  springpicks: {
    width: "100%",
    position: "fixed",

    left: "80%",
    top: "50%",
    zIndex: 3,
  },
}));
export default useStyles;
