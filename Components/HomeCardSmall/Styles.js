import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minWidth: "100px",
    maxWidth: "300px",
    minHeight: "400px",
    backgroundColor: "#f4f2f4",
    margin: "400px 0 100px 0",
  },
  cardimage: {
    width: "100%",
    height: "100%",
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
    margin: "2em 0em 0 2em ",
  },
  catagory: {
    position: "absolute",
    top: "50%",
    // right: "0",
    left: "0.5em",
    // transform: "translate(-50%, 0)",
    // margin: "auto",
    textDecoration: "underLine",
  },
  nameandprice: {
    position: "absolute",
    bottom: "5%",
    left: "2em",
    width: "85%",
  },
}));
export default useStyles;
