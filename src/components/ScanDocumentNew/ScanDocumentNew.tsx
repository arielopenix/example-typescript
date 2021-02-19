import React from 'react'
import { useStyles } from "./ScanDocumentNewStyle";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const ScanDocumentNew = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container} component="main" >
  
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <h1>Escanear Documento</h1>
          <div className={classes.two}></div>
          <div className={classes.one}></div>
          <div className={classes.three}></div>
          <div className={classes.four}></div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Button variant="contained" color="primary">
          Sacar Foto
        </Button>
        <Button variant="contained" color="primary">
          Documento
        </Button>
      </Grid>
    </Container>
    )
}

export default ScanDocumentNew
