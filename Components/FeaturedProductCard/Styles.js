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
    backgroundImage:
      "linear-gradient(90deg,  #fff 0%, #fff 49.6%, #000 50%, #000 100%)",
    backgroundSize: "200%",
    boxShadow: "none",
    padding: "6px 16px",
    transition:
      "background-position .3s cubic-bezier(.47, .1, 1, .63),color .2s linear",
    "&:hover": {
      color: "white",
      boxShadow: "none",
      backgroundPosition: "-100% 100%",
    },
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
