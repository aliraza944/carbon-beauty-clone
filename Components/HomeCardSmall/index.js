import Image from "next/image";
import useStyles from "./Styles";
import { Typography } from "@material-ui/core";
import { useState } from "react";
const HomeCardSmall = ({ img, title, productName, price }) => {
  const [showhover, setShowhover] = useState(false);
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      onMouseOver={() => setShowhover(true)}
      onMouseLeave={() => setShowhover(false)}
    >
      <Image
        src={img}
        layout="responsive"
        width={400}
        height={550}
        className={classes.cardimage}
      />
      {showhover && (
        <div className={classes.hoverdiv}>
          <div className={classes.content}>
            <Typography variant="body1" className={classes.year}>
              2019 Fall Picks
            </Typography>
            <Typography variant="h6" className={classes.catagory}>
              {title}
            </Typography>
            <div className={`justifyspacebetween ${classes.nameandprice}`}>
              <Typography variant="body1" className={classes.name}>
                {productName}
              </Typography>
              <Typography variant="body1" className={classes.price}>
                ${price}
              </Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeCardSmall;
