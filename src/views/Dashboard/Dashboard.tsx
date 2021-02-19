import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "./DashboardStyles";
import NavBar from "../../layout/NavBar/NavBar";
import NavigationDrawer from "../../layout/NavigationDrawer/NavigationDrawer";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "../Main/Main";

interface Props {
  window?: () => Window;
}

const Dashboard = (props: Props) => {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar onclick={handleDrawerToggle} />
      <Router>
        <NavigationDrawer
          container={container}
          onclose={handleDrawerToggle}
          open={mobileOpen}
        />
        <Main />
      </Router>
    </div>
  );
};

export default Dashboard;
