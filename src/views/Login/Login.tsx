import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import logo from "../../assets/img/logo.png";
import { Grid, Link } from "@material-ui/core";
import useStyles from "./LoginStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
//import TextFieldOutlined from "../../components/common/TextFieldOutlined";
//import Auth from "../../passapp-sdk/Auth";
import { login } from '../../utils/auth'

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const auth = new Auth();
  

  //handleSubmit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    anotherFunction(email,password)
    setEmail('')
    setPassword('')
  };

  //login user
  function loginUser(email: string, password: string) {
    if (email && password) {
      //console.log(auth.login(email, password));
    }
  }

  const anotherFunction = async (email:string, password:string) => {
    console.log(await login( email, password ))
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Card variant="outlined">
        <CardContent>
          <div className={classes.paper}>
            <img alt="Web Logo" className="logo" src={logo} />
            <form
              className={classes.form}
              noValidate
              onSubmit={(e) => handleSubmit(e)}
            >
              <TextField
                id="outlined-search"
                label="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                type="search"
                variant="outlined"
                margin="normal"
                required
                fullWidth
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="current-password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                
                onClick={() => onclick}
              >
                Ingresar
              </Button>
              <Grid container justify="center" alignItems="center">
                <Grid item>
                  <p>¿Te olvidaste la contraseña?</p>
                  <Link href="#" variant="body2">
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
