import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./MenuStyles";
import Button from "@material-ui/core/Button";
import { MemoryRouter as Router } from "react-router";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import SettingsOverscanIcon from "@material-ui/icons/SettingsOverscan";

const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, "to">>(
  (props, ref) => (
    <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
  )
);

const Menu = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        justify="center"
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Router>
            <div>
              <Button color="primary" component={RouterLink} to="/">
                <SettingsOverscanIcon />
                Ingresar Documento
              </Button>
              <br />
              <Button color="primary" component={RouterLink} to="/">
                <SettingsOverscanIcon />
                Escanear Documento
              </Button>
              <br />
              <Button color="primary" component={RouterLink} to="/">
                <SettingsOverscanIcon />
                Verificar Pase
              </Button>
              <br />
              <Button color="primary" component={LinkBehavior}>
                <SettingsOverscanIcon />
                Registrar Salida
              </Button>
            </div>
          </Router>
        </Grid>
      </Grid>
    </>
  );
};

export default Menu;
