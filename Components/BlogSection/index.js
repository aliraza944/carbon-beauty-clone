import Image from "next/image";
import img1 from "../../public/Images/homeblog.jpg";
import { Button, Typography } from "@material-ui/core";
import useScroll from "../../Hooks/useScroll";
import clsx from "clsx";
import useStyles from "./Styles";
const BlogSection = () => {
  const scroll = useScroll();
  const textStyle = {
    transform: `translateX(${(scroll / 2200) * 75}%)`,
    transition: `transform 0.5s linear`,
  };
  const textStyle2 = {
    transform: `translateX(-${(scroll / 1900) * 75}%)`,
    transition: `transform 0.5s linear`,
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inspiration}>
        <Typography variant="body2">Weekly inspiration</Typography>
        <div className={classes.theline}></div>
      </div>

      <div className={classes.imgcontainer}>
        <Image src={img1} layout="responsive" className={classes.blogimg} />
        <Typography
          variant="h2"
          style={textStyle}
          className={clsx(classes.toptext, classes.lighttop)}
        >
          Carbon
        </Typography>
        <Typography
          variant="h2"
          style={textStyle2}
          className={clsx(classes.toptext, classes.lightbottom)}
        >
          Journey
        </Typography>
      </div>

      <Typography
        variant="h2"
        style={textStyle}
        className={clsx(classes.toptext, classes.darktop)}
      >
        Carbon
      </Typography>
      <Typography
        variant="h2"
        style={textStyle2}
        className={clsx(classes.toptext, classes.darkbottom)}
      >
        Journey
      </Typography>
      <Button variant="contained" className={classes.blogbtn}>
        Read the Blog
      </Button>
    </div>
  );
};

export default BlogSection;
