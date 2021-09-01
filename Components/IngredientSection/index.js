import { Typography } from "@material-ui/core";
import FeaturedProductCard from "../FeaturedProductCard";
import useScroll from "../../Hooks/useScroll";
import useStyles from "./Styles";
import useSlider from "../../Hooks/useSlider";

const IngredientSection = (props) => {
  const scroll = useScroll();
  const scrollStyle = {
    transform: `translateY(-${scroll * 0.1}px)`,
    transition: `transform 1s linear`,
  };
  const { data } = props;
  const { slider, prevSlide, nextSlide } = useSlider(data);

  const classes = useStyles();
  return (
    <div className={classes.root} style={scrollStyle}>
      {props.brand ? (
        <FeaturedProductCard
          title={data[slider].title}
          img={data[slider].img}
          letter={data[slider].letter}
          description={data[slider].description}
          brands
        />
      ) : (
        <FeaturedProductCard
          title={data[slider].title}
          img={data[slider].img}
          letter={data[slider].letter}
          description={data[slider].description}
        />
      )}
      <Typography
        variant="body2"
        className={classes.arrowleft}
        onClick={prevSlide}
      >
        &#x2190;
      </Typography>
      <Typography
        variant="body2"
        className={classes.arrowright}
        onClick={nextSlide}
      >
        &#x2192;
      </Typography>
    </div>
  );
};

export default IngredientSection;
