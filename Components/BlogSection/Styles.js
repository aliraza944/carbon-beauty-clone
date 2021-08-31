import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",

    padding: "8em",
  },
  inspiration: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& >*": {
      margin: "0 0 2em 0 ",
    },
    "& .MuiTypography-root": {
      textTransform: "uppercase",
      letterSpacing: "2px",
      fontWeight: "500",
      color: "black",
    },
  },
  theline: {
    width: "1px",
    height: "50px",
    backgroundColor: "black",
  },
  imgcontainer: {
    width: "30%",
    overflow: "hidden",
    alignSelf: "center",
    position: "relative",
    backgroundColor: "blue",
    display: "block",
  },
  blogimg: {
    width: "100%",
    objectFit: "cover",
  },
  toptext: {
    position: "absolute",
    fontWeight: "800",
    zIndex: "1",
  },
  darktop: {
    top: "50%",
    left: "8%",

    color: "black",
    zIndex: -1,
  },
  lighttop: {
    color: "white",
    top: "37.7%",

    left: "-117%",
  },
  darkbottom: {
    top: "63.3%",
    left: "85%",

    color: "black",
    zIndex: -1,
  },
  lightbottom: {
    color: "white",
    top: "60%",

    left: "190%",
  },
  blogbtn: {
    position: "absolute",
    top: "50%",
    right: "16%",
    border: "1px solid black",
    borderRadius: "0px",
    backgroundImage:
      "linear-gradient(90deg,  #fff 0%, #fff 50%, #000 50%, #000 100%)",
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
}));
export default useStyles;
