import { Button, Typography } from "@material-ui/core";
import Image from "next/image";
import img1 from "../../public/Images/fproduct1/img1.jpg";

import useStyles from "./Styles";
const FeaturedProductCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.imgcontainer}>
        <Image src={img1} layout="responsive" width={300} height={200} />
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
          Reishe
        </Typography>
        <Typography variant="body1" className={classes.description}>
          A "supermushroom" that has been used for thousands of years in herbal
          medicine, Reishi mushrooms are increasingly being studied for their
          potential health benefits.
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
            <Typography variant="h3"> R</Typography>
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
