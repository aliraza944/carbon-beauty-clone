import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "95vw",
    overflow: "hidden",
    padding: "12em 12em",
    position: "relative",
    zIndex: "4",
  },
  centercolumncontent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  topcard: {
    width: "100%",
    transform: "translateY(10px)",
  },
  centercolumntext: {
    width: "100%",
    textAlign: "center",
    "& .MuiTypography-root": {
      color: "black",
    },
  },
  centercolumnbutton: {
    border: "2px solid black",
    backgroundColor: "transparent",
    boxShadow: "none",
    margin: "1em 0 0 0",
    padding: "0.5em 1em",
  },
}));
export default useStyles;
