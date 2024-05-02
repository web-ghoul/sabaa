import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#00A4E4",
      dark: "#5271FF",
    },
    secondary: {
      main: "#36405E",
      light: "#4F5875",
    },
    common: {
      black: "#333333",
    },
  },
  breakpoints: {
    values: {
      xs: 540,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1440,
    },
    unit: "px",
  },
  typography: {
    fontFamily: "Cairo",
    h1: {
      fontSize: "26px",
      "@media (max-width: 1200px)": {
        fontSize: "25px",
      },
      "@media (max-width: 992px)": {
        fontSize: "24px",
      },
      "@media (max-width: 768px)": {
        fontSize: "23px",
      },
      "@media (max-width: 540px)": {
        fontSize: "22px",
      },
    },
    h2: {
      fontSize: "24px",
      "@media (max-width: 1200px)": {
        fontSize: "23px",
      },
      "@media (max-width: 992px)": {
        fontSize: "22px",
      },
      "@media (max-width: 768px)": {
        fontSize: "21px",
      },
      "@media (max-width: 540px)": {
        fontSize: "20px",
      },
    },
    h3: {
      fontSize: "22px",
      "@media (max-width: 1200px)": {
        fontSize: "21px",
      },
      "@media (max-width: 992px)": {
        fontSize: "20px",
      },
      "@media (max-width: 768px)": {
        fontSize: "19px",
      },
      "@media (max-width: 540px)": {
        fontSize: "18px",
      },
    },
    h4: {
      fontSize: "20px",
      "@media (max-width: 1200px)": {
        fontSize: "19px",
      },
      "@media (max-width: 992px)": {
        fontSize: "18px",
      },
      "@media (max-width: 768px)": {
        fontSize: "17px",
      },
      "@media (max-width: 540px)": {
        fontSize: "16px",
      },
    },
    h5: {
      fontSize: "18px",
      "@media (max-width: 1200px)": {
        fontSize: "17px",
      },
      "@media (max-width: 992px)": {
        fontSize: "16px",
      },
      "@media (max-width: 768px)": {
        fontSize: "15px",
      },
      "@media (max-width: 540px)": {
        fontSize: "14px",
      },
    },
    h6: {
      fontSize: "16px",
      lineHeight: "1",
      "@media (max-width: 1200px)": {
        fontSize: "15px",
      },
      "@media (max-width: 992px)": {
        fontSize: "14px",
      },
      "@media (max-width: 768px)": {
        fontSize: "13px",
      },
      "@media (max-width: 540px)": {
        fontSize: "12px",
      },
    },
    button: {
      fontSize: "14px",
      lineHeight: "1",
      textTransform: "capitalize",
      "@media (max-width: 1200px)": {
        fontSize: "13px",
      },
      "@media (max-width: 992px)": {
        fontSize: "12px",
      },
      "@media (max-width: 768px)": {
        fontSize: "11px",
      },
      "@media (max-width: 540px)": {
        fontSize: "10px",
      },
    },
    subtitle1: {
      fontSize: "14px",
      lineHeight: "1",
      "@media (max-width: 1200px)": {
        fontSize: "13px",
      },
      "@media (max-width: 992px)": {
        fontSize: "12px",
      },
      "@media (max-width: 768px)": {
        fontSize: "11px",
      },
      "@media (max-width: 540px)": {
        fontSize: "10px",
      },
    },
    subtitle2: {
      fontSize: "12px",
      "@media (max-width: 1200px)": {
        fontSize: "11px",
      },
      "@media (max-width: 992px)": {
        fontSize: "10px",
      },
      "@media (max-width: 768px)": {
        fontSize: "9px",
      },
      "@media (max-width: 540px)": {
        fontSize: "8px",
      },
    },
    body1: {
      fontSize: "11px",
    },
    body2: {
      fontSize: "10px",
    },
  },
  shadows: [
    "none",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
    "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "0 0 5px rgba(0, 0, 0, 0.1)",
    "0 0 5px rgba(0, 0, 0, 0.1)",
  ],
});
