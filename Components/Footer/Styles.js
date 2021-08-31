import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",

    padding: "0 16em",
    "& .MuiTypography-root": {
      color: "black",

      letterSpacing: "2px",
    },
  },
  line: {
    width: "100%",
    height: "1px",
    backgroundColor: "black",
    marginBottom: "4em",
  },
  verticalline: {
    width: "1px",
    height: "50px",
    backgroundColor: "black",
    margin: "2em 0 0 0",
  },
  item1links: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& >*": {
      margin: "2em 0 0 0",
    },
    "& .MuiTypography-root": {
      textTransform: "uppercase",
    },
  },

  logo: {
    fill: "black",

    width: "10rem",
    height: "10rem",
  },
  icons: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    padding: "0 4em",
  },
  centercolumn: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  subscribe: {
    margin: "2rem 0 2em 0",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  subscribebtn: {
    width: "100%",
    borderTop: "1px solid black",
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
