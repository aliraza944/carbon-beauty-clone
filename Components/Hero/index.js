import { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./Styles";
import heroimage from "../../public/Images/hero.jpg";
import Image from "next/image";
const Hero = () => {
  const [scroll, setScroll] = useState(0);
  const classes = useStyles();
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  });
  const heroStyle = {
    transform: `translateX(-${scroll * 1.5}px )`,
    transition: `transform 0.5s linear`,
  };
  const springStyle = {
    transform: `translateX(-${scroll * 2.5}px )`,
    transition: `transform 0.5s linear`,
  };
  return (
    <div className={classes.root}>
      <Image
        src={heroimage}
        layout="responsive"
        className={classes.heroimage}
      />
      <div className={classes.carbonbeauty} style={heroStyle}>
        <Typography variant="h1">Carbon Beauty</Typography>
      </div>
      <div className={classes.springpicks} style={springStyle}>
        <Typography variant="h1">Spring Picks</Typography>
      </div>
    </div>
  );
};

export default Hero;
