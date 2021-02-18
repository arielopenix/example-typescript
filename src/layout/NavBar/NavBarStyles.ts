import { makeStyles, Theme } from '@material-ui/core/styles';
const drawerWidth = 253;
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
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
    flexGrow: 1
  },
  user: {
    flexGrow: 1
  }
}));

export default useStyles;
