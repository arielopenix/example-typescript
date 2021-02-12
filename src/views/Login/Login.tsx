import React from "react";
import Container from "@material-ui/core/Container";
import logo from "../../assets/img/logo.png";
import { Grid, Link } from "@material-ui/core";
import useStyles from "./LoginStyles";
import useInput from "../../hooks/useInput";
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextFieldOutlined from "../../components/common/TextFieldOutlined";
import Auth from "../../passapp-sdk/Auth";
import SubmitButton from "../../components/common/SubmitButton";

const Login = () => {
  const classes = useStyles();
  const auth = new Auth();
  //const [state, dispatch] = useReducer(dataLoginReducer, loginInitialState);
  const { value:email, bind: bindEmail, reset: resetEmail } = useInput('cristian@openix.com.ar');
  const { value:password, bind: bindPassword, reset: resetPassword } = useInput('123456');

  //handleSubmit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    auth.login(email, password);
    console.log(`Email: ${email} Password: ${password}`)
    resetEmail();
    resetPassword();
  };

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
            >
              <TextFieldOutlined
                name="email"
                type="text"
                label="Email"
                {...bindEmail}
              />
              <TextFieldOutlined
                name="password"
                type="password"
                label="Password"
                {...bindPassword}
              />
              <SubmitButton
                value="INGRESAR"
                colorbutton="primary"
                onclick={handleSubmit}
                classname="submit"
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
