import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
  },
  arrowleft: {
    position: "absolute",
    fontSize: "50px",
    color: "black",
    top: "75%",
    left: "18%",
    cursor: "pointer",
  },
  arrowright: {
    position: "absolute",
    fontSize: "50px",
    color: "black",
    top: "75%",
    right: "18%",
    cursor: "pointer",
  },
}));
export default useStyles;
