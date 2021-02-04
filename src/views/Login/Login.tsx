import React, {useState, MouseEvent} from "react";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import logo from "../../assets/img/logo.png";
import Button from "@material-ui/core/Button";
import { Grid, Link } from "@material-ui/core";
import useStyles from "./LoginStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Capturo los cambios en el campo email
  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch({
      type: "setEmail",
      payload: event.target.value,
    });
  };

  //Capturo los cambios en el campo password
  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch({
      type: "setPassword",
      payload: event.target.value,
    });
  };
  //onSubmit
  const onSubmit = (event: MouseEvent) => {
    event.preventDefault();
    // llamo al servicio login
    
  };
  //onRecoverpassword
  const onRecoverPassword = (event: MouseEvent) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Card variant="outlined">
        <CardContent>
          <div className={classes.paper}>
            <img alt="Web Logo" className="logo" src={logo} />
            <Grid container justify="center" alignItems="center">
              <Grid item>
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
                value={email}
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onSubmit}
              >
                Ingresar
              </Button>
              <Grid container justify="center" alignItems="center">
                <Grid item>
                  <p>¿Te olvidaste la contraseña?</p>
                  <Link href="#" variant="body2" onClick={onRecoverPassword}>
                    Contactar con el Administrador
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;