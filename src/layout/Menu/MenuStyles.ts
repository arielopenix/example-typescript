import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    text: {
      textSizeAdjust: "18px",
      color: "white",
      fontSize: "18px"
    },
    icon: {
      height: "10px",
      weight: "10px",
      color: "#FFFFFF"
    },
    item: {
      
    }
  })
);