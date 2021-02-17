import React from "react";
import { Grid } from "@material-ui/core";


const Main = () => {
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
          <h1>Soy la pantalla principal</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;