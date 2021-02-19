import React from 'react'
import { useStyles } from "./AwaitingRequestStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const AwaitingRequest = () => {
    const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid container>
          <Grid item xs={12} sm={12}>
              <h1>Solicitudes Pendientes</h1>
          </Grid>
        </Grid>

        <Grid container justify="flex-end">
          <Grid item></Grid>
        </Grid>
      </div>
      <Box mt={5}>

      </Box>
    </Container>
  );
}

export default AwaitingRequest
