import { pink } from '@material-ui/core/colors';
import { makeStyles, Theme } from '@material-ui/core/styles';
const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: "#FFFFFF"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
}));

export default useStyles;
