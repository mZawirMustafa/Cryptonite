import React from "react";
import bottomLogo from "../media/Cryptonite Title 2.png";
import {
  BottomNavigation,
  Container,
  Typography,
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    // backgroundColor: "green",
    display: "flex",
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "center",
    flexWrap: "wrap",
    position: "static",
    left: 0,
    bottom: 0,
    right: 0,
    paddingTop: 30,
  },
  // The footer itself
  footer: {
    // backgroundColor: "yellow",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    width: "95%",
    height: "10%",
    position: "static",
    // left: 0,
    // bottom: 0,
    // right: 0,
    color: "#000",
    bottom: 0,
    paddingTop: 25,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    boxShadow: "0px -2px 2px 1px #aaa",
    lineHeight: 18,
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      // paddingBottom: 300,
    },
  },
  footerTop: {
    // backgroundColor: "green",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flexWrap: "wrap",
    },
  },
  footerTopLeft: {
    // backgroundColor: "cyan",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    // marginLeft: 50,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
  footerTopRight: {
    // backgroundColor: "violet",
    // paddingTop: 20,
    width: "50%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      // marginTop: 20,
      paddingLeft: 40,
      marginLeft: 0,
    },
  },
  footerBottom: {
    // backgroundColor: "yellow",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    width: "100%",
    // height: 80,
    // marginBottom: 30,
    // paddingTop: 25,
    // paddingBottom: 30,
    // marginLeft: 75,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 15,
      marginRight: 25,
    },
  },
  footerBottomLeft: {
    // backgroundColor: "pink",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,

    width: "100%",
    [theme.breakpoints.down("sm")]: {
      // marginLeft: 15,
      // marginRight: 25,
    },
  },

  bottomLogo: {
    // backgroundColor: "blue",
    width: "75%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: 260,
      height: 60,
    },
  },
  subtitle: {
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    textAlign: "justify",
    fontSize: 12,
    fontFamily: "Antonio",
    padding: 10,
    width: "90%",
  },
  bottomTitle: {
    // backgroundColor: "gray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    textAlign: "justify",
    fontSize: 10,
    fontFamily: "Antonio",
    fontWeight: 700,
    letterSpacing: 1,
    width: "95%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "100%",
    },
  },
  miniTitle: {
    // backgroundColor: "Red",
    fontSize: 14,
    fontFamily: "Antonio",
    lineHeight: 1.5,
    letterSpacing: 1,
    cursor: "pointer",
    "&:hover": {
      fontWeight: "bold",
      color: "#a9aaa9",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: 12,
      lineHeight: 1.6,
    },
  },
  column1: { width: "50%", flex: 2 },
  column2: { width: "50%", flex: 4 },
}));

const Footer = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container className={classes.footerContainer}>
        <Container className={classes.footer}>
          <Container className={classes.footerTop}>
            <Container className={classes.footerTopLeft}>
              <img
                onClick={() => navigate("/")}
                src={bottomLogo}
                alt="Logo"
                className={classes.bottomLogo}
              />

              {/* <Typography className={classes.subtitle}>
                Cryptonite came with a mission to provide actual real-time
                crypto data for users to make their best, rewarding investment
                decisions in the cryptocurrency world.
              </Typography> */}
            </Container>
            <Container className={classes.footerTopRight}>
              <Container className={classes.column1}>
                <Typography
                  onClick={() => navigate("/about")}
                  className={classes.miniTitle}
                  onChange={window.scroll({ top: 0 })}
                >
                  About Us
                </Typography>
                <Typography
                  onClick={() => navigate("/help")}
                  className={classes.miniTitle}
                  onChange={window.scroll({ top: 0 })}
                >
                  Contact Us
                </Typography>
                <Typography
                  onClick={() => navigate("/help")}
                  className={classes.miniTitle}
                  onChange={window.scroll({ top: 0, behavior: "smooth" })}
                >
                  Help
                </Typography>
              </Container>
              <Container className={classes.column2}>
                <Typography
                  onClick={() => navigate("/crypto")}
                  className={classes.miniTitle}
                  onChange={window.scroll({ top: 0 })}
                >
                  Search Cryptocurrency
                </Typography>
                <Typography
                  onClick={() => navigate("/")}
                  className={classes.miniTitle}
                  onChange={window.scroll({ top: 0 })}
                >
                  Trending Markets
                </Typography>

                <Typography
                  onClick={() => navigate("/crypto")}
                  className={classes.miniTitle}
                  onChange={window.scroll({ top: 0 })}
                >
                  Crypto News
                </Typography>
              </Container>
            </Container>
          </Container>
          <Container className={classes.footerBottom}>
            <Container className={classes.footerBottomLeft}>
              {/* <Typography className={classes.bottomTitle}>
                Help Center | Contact | Bug Bounty | Disclaimer | Terms of
                Service | Privacy Policy | Ad Policy
              </Typography> */}
              <Typography className={classes.bottomTitle}>
                <FaRegCopyright /> Cryptonite. All Rights Reserved.
              </Typography>
            </Container>
          </Container>
        </Container>
      </Container>
    </ThemeProvider>
  );
};
export default Footer;
