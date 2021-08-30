import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8em",

    "& .MuiTypography-root": {
      color: "black",
    },
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
    },
  },
  theline: {
    width: "1px",
    height: "50px",
    backgroundColor: "black",
  },
}));
export default useStyles;
