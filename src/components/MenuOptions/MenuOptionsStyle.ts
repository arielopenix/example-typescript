import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      color: "white",
      fontSize: "0px",
      marginLeft: "0px",
    },
    icon: {
      height: "17px",
      weight: "17px",
      color: "#FFFFFF",
    },
    item: {
      marginRight: "0px",
      width: "1px",
    },
  })
);
