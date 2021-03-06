import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    text: {
      color: "white",
      fontSize: 1,
      marginLeft: "0px"
    },
    icon: {
      height: "17px",
      weight: "17px",
      color: "#FFFFFF"
    },
    item: {
      marginRight: "0px",
      width: "1px"
    },
    logo: {
      width: "200px",
      marginLeft: "20px",
      marginTop: "20px",
      marginBottom: "25px"
    }
  })
);