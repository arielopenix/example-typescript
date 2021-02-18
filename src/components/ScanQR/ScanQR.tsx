import React from "react";
import { useStyles } from "./ScanQRStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const ScanQR = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid container>
          <Grid item xs={12} sm={12}>
              <h1>Scan QR</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquid quibusdam, ullam odio fugiat rem optio doloribus labore, ipsum quis consequatur vitae repellat illo. Ipsum, perferendis. Facere tempore rem expedita.</p>
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
};

export default ScanQR;
