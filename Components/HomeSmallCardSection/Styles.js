import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "95vw",
    overflow: "hidden",
    padding: "12em 12em 2em 12em",
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
    border: "1px solid black",
    backgroundColor: "transparent",
    boxShadow: "none",
    margin: "1em 0 0 0",
    padding: "0.5em 1em",
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
