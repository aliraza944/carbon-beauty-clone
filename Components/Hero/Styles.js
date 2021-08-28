import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    // position: "absolute",
    margin: "25em 0 0 0",
    width: "80%",
    zIndex: 10,
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
  heroimage: {
    width: "100%",
  },
  fixedtext: {
    position: "fixed",
    width: "100%",
  },
}));
export default useStyles;
