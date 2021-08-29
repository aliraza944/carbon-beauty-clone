import HomeCardSmall from "../HomeCardSmall";
import { SmallCardSectionData as data } from "../../src/SmallCardSectionData";
import useStyles from "./Styles";
import { Button, Grid, Typography } from "@material-ui/core";
import useScroll from "../../Hooks/useScroll";
const HomeSmallCardSection = () => {
  const scroll = useScroll();

  const scrollStyle = {
    transform: `translateY(-${scroll * 0.2}px)`,
    transition: `transform 1s linear`,
  };
  const classes = useStyles();

  return (
    <div className={classes.root} style={scrollStyle}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4} style={scrollStyle}>
          {data.slice(0, 4).map((item, index) => {
            return (
              <HomeCardSmall
                img={item.img}
                title={item.title}
                productName={item.productName}
                price={item.price}
              />
            );
          })}
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.centercolumncontent}>
            <div className={classes.topcard}>
              <HomeCardSmall
                img={data[4].img}
                title={data[4].title}
                productName={data[4].productName}
                price={data[4].price}
              />
            </div>
            <div className={classes.centercolumntext}>
              <Typography variant="h6">
                A highly curated <br /> selection of products <br /> we believe
                in <br />
              </Typography>
              <Button
                variant="contained"
                className={classes.centercolumnbutton}
              >
                About Us
              </Button>
            </div>
            <HomeCardSmall
              img={data[5].img}
              title={data[5].title}
              productName={data[5].productName}
              price={data[5].price}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4} style={scrollStyle}>
          {data.slice(6, 10).map((item, index) => {
            return (
              <HomeCardSmall
                img={item.img}
                title={item.title}
                productName={item.productName}
                price={item.price}
              />
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeSmallCardSection;
