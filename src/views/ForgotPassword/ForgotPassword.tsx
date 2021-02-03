import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import logo from "../../assets/img/logo.png";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import useStyles from "./ForgotPasswordStyles";
import CssBaseline from "@material-ui/core/CssBaseline";


const ForgotPassword = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {

  });

  //Capturo los cambios en el campo email
  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setEmail",
      payload: event.target.value,
    });
  };

  //onRecoveringpassword
  const onRecoveringPassword = () => {};

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img alt="Web Logo" className="logo" src={logo} />
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <h3>Recuperar contraseña</h3>
            <hr />
          </Grid>
        </Grid>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleEmailChange}
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onRecoveringPassword}
          >
            Recuperar contraseña
          </Button>
          <Grid container justify="center" alignItems="center">
            <Grid item></Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default ForgotPassword;
