import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8em",
    backgroundColor: "white",
    "& .MuiTypography-root": {
      color: "black",
    },
  },
  imgcontainer: {
    width: "70%",
  },
  content: {
    position: "absolute",
    width: "20%",
    right: "5%",
    "& .MuiTypography-root": {
      color: "black",
    },
  },
  browsebtn: {
    border: "1px solid black",
    borderRadius: "0px",
    boxShadow: "none",
    padding: "0.5em 1em",
    backgroundColor: "transparent",
  },
  title: {
    margin: "0 0 1em 0",
    fontWeight: "600",
  },
  brands: {
    fontWeight: "500",
  },
  description: {
    textAlign: "center",
  },
  ingredientindex: {
    position: "absolute",
    top: "6%",
    left: "25%",
    border: "2px solid black",
    textAlign: "center",
  },
  letter: {
    borderBottom: "2px solid black",
    padding: "0.5em",
  },
  index: {
    padding: "0.5em",
  },
}));
export default useStyles;
