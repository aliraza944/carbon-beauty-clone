import { Typography } from "@material-ui/core";
import useStyles from "./Styles";
const BlogSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inspiration}>
        <Typography variant="body2">Weekly inspiration</Typography>
        <div className={classes.theline}></div>
      </div>
    </div>
  );
};

export default BlogSection;
