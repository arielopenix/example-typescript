import React from "react";
import useStyles from "./MainStyles";
import { Grid } from "@material-ui/core";
import NavBar from '../../components/NavBar/NavBar';


const Main = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar/>
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
