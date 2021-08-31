import { createTheme, responsiveFontSizes } from "@material-ui/core";
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1024,
      xl: 1920,
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "span",
        body2: "span",
      },
    },
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          padding: "0",
          margin: "0",
          boxSizing: "border-box",
        },
        body: {
          margin: "0",
          color: "white",
          backgroundColor: "white",
        },
        ".link": {
          textDecoration: "none",
          color: "white",
        },
        ".justifycenter": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".justifyspacebetween": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        ".justifyspacearound": {
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        },
        ".styledbtn": {
          width: "100%",
          borderTop: "1px solid black",
          borderRadius: "0px",
          backgroundImage:
            "linear-gradient(90deg,  #fff 0%, #fff 50%, #000 50%, #000 100%)",
          backgroundSize: "200%",
          boxShadow: "none",
          padding: "6px 16px",
          transition:
            "background-position .3s cubic-bezier(.47, .1, 1, .63),color .2s linear",
          "&:hover": {
            color: "white",
            boxShadow: "none",
            backgroundPosition: "-100% 100%",
          },
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
