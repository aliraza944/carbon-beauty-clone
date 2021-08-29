import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minWidth: "100px",
    maxWidth: "300px",
    minHeight: "400px",
    width: "100%",
    margin: "0px 0 50px 0",
  },
  cardimage: {
    width: "100%",
    // height: "100%",
    objectFit: "cover",
  },
  hoverdiv: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    backgroundColor: "#000",
    opacity: "0.7",
  },
  content: {
    margin: "2em 0em 0 1em ",
  },
  catagory: {
    position: "absolute",
    top: "50%",
    left: "0.5em",

    textDecoration: "underLine",
    textTransform: "capitalize",
  },
  nameandprice: {
    position: "absolute",
    bottom: "5%",
    left: "1em",
    width: "85%",
  },
}));
export default useStyles;
