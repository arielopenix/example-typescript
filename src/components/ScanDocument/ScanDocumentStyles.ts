import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      backgroundColor: "#C4C4C4",
    },
    cover: {},
    one: {
      display: "block",
      position: "absolute",
      width: "3rem",
      height: "3rem",
      left: "2rem",
      top: "2rem",
      boxSizing: "inherit",

      borderLeftColor: "black",
      borderLeftStyle: "solid",
      borderLeftWidth: "4px",

      borderTopWidth: "4px",
      borderTopColor: "black",
      borderTopStyle: "solid",
    },
    two: {
      display: "block",
      position: "absolute",
      width: "3rem",
      height: "3rem",
      right: "2rem",
      top: "2rem",
      boxSizing: "inherit",

      borderRightColor: "black",
      borderRightStyle: "solid",
      borderRightWidth: "4px",

      borderTopWidth: "4px",
      borderTopColor: "black",
      borderTopStyle: "solid",
    },
    three: {
      display: "block",
      position: "absolute",
      width: "3rem",
      height: "3rem",
      left: "2rem",
      botton: "0rem",
      boxSizing: "inherit",

      borderBottomColor: "black",
      borderBottomStyle: "solid",
      borderBottomWidth: "4px",

      borderLeftWidth: "4px",
      borderLeftStyle: "solid",
      borderLeftColor: "black",
    },
    four: {
      display: "block",
      position: "absolute",
      width: "3rem",
      height: "3rem",
      right: "2rem",
      botton: "0rem",
      boxSizing: "inherit",

      borderBottomColor: "black",
      borderBottomStyle: "solid",
      borderBottomWidth: "4px",

      borderRightColor: "black",
      borderRightStyle: "solid",
      borderRightWidth: "4px",
    },
    buttonTakePicture: {},
    buttonDocument: {},
  })
);
