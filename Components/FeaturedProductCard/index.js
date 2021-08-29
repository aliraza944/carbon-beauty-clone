import { Button, Typography } from "@material-ui/core";
import Image from "next/image";
import img1 from "../../public/Images/fproduct1/img1.jpg";

import useStyles from "./Styles";
const FeaturedProductCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.imgcontainer}>
        <Image src={props.img} layout="responsive" width={300} height={200} />
      </div>
      <div
        className={classes.content}
        style={{ right: props.brands ? "63%" : "5%" }}
      >
        {props.brands && (
          <Typography variant="body1" className={classes.brands}>
            Brands
          </Typography>
        )}
        <Typography variant="h4" className={classes.title}>
          {props.title}
        </Typography>
        <Typography variant="body1" className={classes.description}>
          {props.description}
        </Typography>
        <div>
          <Button variant="contained" className={classes.browsebtn}>
            Browse
          </Button>
        </div>
      </div>
      {!props.brands && (
        <div className={classes.ingredientindex}>
          <div className={classes.letter}>
            <Typography variant="h3"> {props.letter}</Typography>
          </div>
          <div className={classes.index}>
            {" "}
            <Typography variant="body1">
              {" "}
              Ingredient <br /> Index
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProductCard;
