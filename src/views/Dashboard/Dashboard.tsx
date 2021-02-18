import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "./DashboardStyles";
import NavBar from "../../layout/NavBar/NavBar";
import NavigationDrawer from "../../layout/NavigationDrawer/NavigationDrawer";
import { BrowserRouter as Router } from "react-router-dom";

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
      (/**Barra de Navegacion**/)
      <NavBar onclick={handleDrawerToggle} />
      (/**Menu Lateral**/)
      <Router>
        <NavigationDrawer
          container={container}
          onclose={handleDrawerToggle}
          open={mobileOpen}
        />
        (/**Seccion principal**/)
        <main className={classes.content}>
          <div className={classes.toolbar} />
        </main>
      </Router>
    </div>
  );
};

export default Dashboard;
