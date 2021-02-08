import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import logo from "../../assets/img/logo.png";
import { Grid, Link } from "@material-ui/core";
import useStyles from "./LoginStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import SubmitButton from "../../components/common/SubmitButton";

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //handleSubmit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(email)
    let account = { email, password };
    if (account) {
      console.log("account", account);
    }
  };
  // handleChange
  const handleChange = (event: any) => {
    if(event.target.name == 'email'){
      setEmail(event.target.value)
    }else{setPassword(event.target.value)}
    console.log(email,password)
  };
  // login
  /**async function loginUser(email: string,password:string){
    return fetch('http:localhost:8080/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email,password})
    }).then(data =>data.json())
  }**/

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Card variant="outlined">
        <CardContent>
          <div className={classes.paper}>
            <img alt="Web Logo" className="logo" src={logo} />
            <form className={classes.form} noValidate>
              <TextField
                id="outlined-search"
                label="Email"
                name='email'
                onChange={handleChange}
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
                onChange={handleChange}
                type="password"
                autoComplete="current-password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
              />
              <SubmitButton
                value="Ingresar"
                onclick={handleSubmit}
                classname={classes.submit}
              />
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
