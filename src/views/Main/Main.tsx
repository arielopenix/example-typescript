import React from "react";
import { useStyles } from "./MainStyles";
import AwaitingRequest from "../../components/AwaitingRequest/AwaitingRequest";
import ManualInput from "../../components/ManualInput/ManualInput";
import RegisterExit from "../../components/RegisterExit/RegisterExit";
import ScanDocument from "../../components/ScanDocument/ScanDocument";
import ScanQR from "../../components/ScanQR/ScanQR";
import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const Main = () => {
  const classes = useStyles();
  return (
    <>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container className={classes.container}>
          <Grid container spacing={3} item xs={12}>
            <Switch>
              <Route
                path="/dashboard/awaitingRequest"
                exact
                component={AwaitingRequest}
              />
              <Route path="/dashboard/manualInput" component={ManualInput} />
              <Route path="/dashboard/registerExit" component={RegisterExit} />
              <Route path="/dashboard/scanDocument" component={ScanDocument} />
              <Route path="/dashboard/scanQR" component={ScanQR} />
            </Switch>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Main;