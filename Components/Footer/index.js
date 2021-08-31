import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import useStyles from "./Styles";
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className={classes.line}></div>
          <div className={classes.item1links}>
            <Typography variant="body2">Privacy policy</Typography>
            <Typography variant="body2">Terms and Conditions</Typography>
            <Typography variant="body2">About us</Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4} className={classes.centercolumn}>
          <div>
            <svg
              id="logo-footer"
              viewBox="0 0 200 200"
              className={classes.logo}
            >
              <path d="M82.3 13.7H79l7.5 11.7h4.2L85 16.3c2.8-1 4.7-3.8 4.7-7.1 0-1.9-.8-3.9-2.1-5.3-1.4-1.6-3.3-2.5-5.3-2.5H71.9v24h3.7V4.8h6.5c1 0 1.9.5 2.7 1.3.8.9 1.2 2 1.2 3.1 0 1.2-.4 2.3-1 3.1-.6.6-1.4 1.4-2.7 1.4zM52.7 25.4h4l-9.8-24H44l-9.9 24h4l2.7-6.8H50l2.7 6.8zM49 15.5h-7.4l3.8-9.3 3.6 9.3zM196.3 1.4v17.4L182.4 1.4h-2.8v24h3.7V8.3l13.6 17.1h3.1v-24zM151.8 1.2c-3.1 0-6 1.3-8.1 3.7-2.1 2.3-3.2 5.4-3.2 8.5 0 3.1 1.1 6.1 3.1 8.4 2.1 2.4 5 3.8 8.2 3.8 3.1 0 6-1.3 8.1-3.7 2.1-2.3 3.2-5.4 3.2-8.5 0-3-1.1-6-3.1-8.3-2.1-2.5-5-3.9-8.2-3.9zm7.6 12.2c0 2.2-.7 4.4-2 6-1 1.3-2.8 2.7-5.5 2.7-2.1 0-4.1-.9-5.5-2.7-1.3-1.6-2.1-3.8-2.1-6.1 0-5.5 3.9-8.7 7.6-8.7 2.1 0 4 .9 5.5 2.6 1.2 1.7 2 3.9 2 6.2zM17.7 18.3c-.6 1.3-1.5 2.3-2.8 3-1.1.6-2.3.9-3.5.9-2.1 0-4-.9-5.5-2.7-1.4-1.7-2.2-3.9-2.2-6.2 0-4.2 2.7-8.7 7.6-8.7 1.3 0 4.5.4 6.1 3.7l.2.4 3-1.9-.1-.3c-1.6-3.3-5-5.3-9-5.3C4.3 1.2 0 7.3 0 13.2c0 3 1.1 6.1 3.1 8.5 2.2 2.5 5 3.9 8.1 3.9 1.9 0 3.9-.5 5.6-1.4 1.9-1 3.3-2.5 4-4.2l.1-.3-3.1-1.7-.1.3zM125.6 19c0-2.7-1.6-4.9-4-6 1.6-1.1 2.6-3 2.6-5.3 0-1.6-.6-3.1-1.5-4.3-1.1-1.3-2.5-2-4.2-2h-11.7v24h11.7c1.9 0 3.7-.6 5.1-1.7 1.3-1.2 2-2.9 2-4.7zm-15.1-7.3v-7h7c1.7 0 3 1.5 3 3.5 0 2.1-1.2 3.5-3 3.5h-7zm11.4 6.8c0 .9-.4 1.8-1 2.5-.7.7-1.5 1.1-2.5 1.1h-8v-7.2h7.9c2-.1 3.6 1.6 3.6 3.6zM121.6 46.1h4.1v10.6h2.3V46.1h4.1V44h-10.5zM57.5 50.1c.7-.6 1-1.5 1-2.7 0-.8-.3-1.7-.8-2.3-.6-.7-1.4-1.1-2.3-1.1h-6.1v12.7h6.3c2.2 0 3.9-1.5 3.9-3.5 0-1.3-.8-2.4-2-3.1zm-1.9 4.5h-4v-3.3h3.9c.9 0 1.7.8 1.7 1.7 0 .9-.7 1.6-1.6 1.6zm-.6-5.3h-3.4v-3.2h3.3c.8 0 1.4.7 1.4 1.6-.1.8-.4 1.6-1.3 1.6zM111.5 50.4c0 1.2-.2 2.3-.7 3-.5.8-1.4 1.3-2.5 1.3s-2-.4-2.5-1.3c-.5-.7-.7-1.8-.7-3V44h-2.3v6.4c0 1.8.4 3.3 1.2 4.4 1 1.3 2.4 2 4.3 2 1.8 0 3.3-.7 4.2-1.9.8-1.1 1.2-2.6 1.2-4.4V44h-2.3v6.4zM145 49.9l-3.4-5.9h-2.5l4.8 8v4.7h2.3v-4.6L151 44h-2.6zM88.8 44l-5.2 12.7H86l1.4-3.5h4.5l1.4 3.5h2.4L90.5 44h-1.7zm2.5 7.3H88l1.7-4.1 1.6 4.1zM69.9 51.2h5.6v-2h-5.6v-3.1h6.5V44h-8.7v12.7h8.8v-2.1h-6.6z"></path>
            </svg>
          </div>
          <div className={classes.icons}>
            <TwitterIcon />
            <PinterestIcon />
            <InstagramIcon />
          </div>
          <div className={classes.verticalline}></div>
          <div className={classes.item1links}>
            <Typography variant="body1">weekly newspaper</Typography>
          </div>

          <div className={classes.subscribe}>
            <TextField
              id="outlined-basic"
              label="Name@email.com"
              variant="outlined"
            />
            <Button variant="contained" className={classes.subscribebtn}>
              Subscribe
            </Button>
          </div>
          <Typography variant="body2">&#169; 2021</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.line}></div>
          <div className={classes.item1links}>
            <Typography variant="body2">Shipping info</Typography>
            <Typography variant="body2">Returns /Exchanges</Typography>
            <Typography variant="body2">Contact</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
