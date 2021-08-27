import React from "react";
import useStyles from "./Styles";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import WorkOutlinedIcon from "@material-ui/icons/WorkOutlined";
import useOpen from "../../Hooks/useOpen";
import { Hidden, Drawer, Typography, Toolbar, AppBar } from "@material-ui/core";
import DrawerElements from "./DrawerElements";

const Navigation = () => {
  const { open, handleClose, handleOpen } = useOpen();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={`justifyspacebetween`}>
          <div className={`justifycenter`}>
            <div
              className={` ${classes.navelements}`}
              onClick={() => handleOpen()}
            >
              <div className={classes.topbar}></div>
              <div className={classes.topbar}></div>
              <div className={classes.bottombar}></div>
            </div>
            <SearchOutlinedIcon fontSize="large" className={classes.search} />
          </div>
          <svg id="logo-header" className={classes.logo} viewBox="0 0 80 80">
            <path
              class="kst0"
              d="M0 0v80h80V0H0zm19.9 60.4h-6.8V46.2H20c2.1 0 3.4 2 3.4 3.8 0 1.3-.5 2.4-1.4 3.1 1.4.7 2.2 2 2.2 3.5 0 2.2-1.8 3.8-4.3 3.8zM25 29.3c-.9 2.2-3.6 3.3-5.7 3.3-4 0-6.7-3.8-6.7-7.3s2.5-7.1 6.8-7.1c2.4 0 4.4 1.2 5.3 3.1l.1.3-1.9 1.2-.2-.3c-.9-1.9-2.7-2.1-3.5-2.1-2.8 0-4.3 2.5-4.3 4.9 0 2.8 2 5 4.4 5 1.2 0 2.8-.6 3.6-2.2l.1-.3 2 1.1v.4zm14.1 31.2c-4.1 0-6.7-3.7-6.7-7.2 0-1.8.7-3.7 1.9-5 1.3-1.4 3-2.2 4.8-2.2 1.9 0 3.6.8 4.8 2.3 1.2 1.4 1.8 3.2 1.8 4.9.1 4-2.9 7.2-6.6 7.2zm4.2-27.9l-1.6-4h-5.2l-1.6 4h-2.6l5.8-14.2H40l5.8 14.2h-2.5zM66 60.4h-2l-7.8-9.7v9.7H54V46.2h1.7l8 9.9v-9.9H66v14.2zm-2.4-27.8l-4.5-7.1h2.1c1.1 0 2-1 2-2.4 0-1.3-1-2.4-2.1-2.4h-3.6v12h-2.4V18.4h6.1c2.6 0 4.4 2.4 4.4 4.6 0 1.9-1.1 3.6-2.7 4.2l3.4 5.3h-2.7z"
            ></path>
            <path
              class="kst0"
              d="M39.1 48.3c-2.7 0-4.3 2.5-4.3 5 0 2.4 1.6 5 4.3 5 2.7 0 4.3-2.5 4.3-5 0-2.4-1.6-5-4.3-5zM21 50.3c0-1.1-.7-1.9-1.6-1.9h-3.9v3.8h3.9c1 0 1.6-.8 1.6-1.9zM39.1 21.6l-2 5H41zM19.9 54.3h-4.4v4H20c1 0 1.9-.9 1.9-2-.1-1.1-1-2-2-2z"
            ></path>
          </svg>
          <div className={classes.cartshipping}>
            <div className={`justifycenter ${classes.cart}`}>
              <Typography variant="body2" className={classes.shipping}>
                Free Shipping
              </Typography>
              <span className={classes.navspan}></span>
              <Typography variant="body2">on all orders over 35$ *</Typography>
            </div>
            <div className={`justifycenter ${classes.cart}`}>
              <Typography variant="body1">0</Typography>
              <WorkOutlinedIcon />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.modalelements}>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={open}
            onClose={handleClose}
            classes={{
              paper: classes.drawerpaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerElements />
          </Drawer>
        </Hidden>
      </div>
    </div>
  );
};

export default Navigation;
