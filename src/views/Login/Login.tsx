import React, {useState, MouseEvent} from "react";
import Container from "@material-ui/core/Container";
import { useDispatch, connect } from "react-redux";
import logo from "../../assets/img/logo.png";
import { Grid, Link } from "@material-ui/core";
import useStyles from "./LoginStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { loginRequest } from "../../redux/actions/authActions";
import TextFieldOutlined from "../../components/common/TextFieldOutlined";
import PasswordFieldOutlined from "../../components/common/PasswordFieldOutlined";
import SubmitButton from '../../components/common/SubmitButton';

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Capturo los cambios en el campo email
  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    
  };

  //Capturo los cambios en el campo password
  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    
  };
  
  //onSubmit
  const onSubmit = (event: MouseEvent) => {
    event.preventDefault();
    // llamo al servicio login
    setEmail('');
    setPassword('');
    
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
            <form className={classes.form} noValidate>
              <TextFieldOutlined name='email' value='Email' label={email} onchange={handleEmailChange}/>
              <PasswordFieldOutlined name='password' value='Password' label={password} onchange={handlePasswordChange}/>
              <SubmitButton value='Ingresar' onclick={onSubmit} classname={classes.submit}/>
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

const mapStateToProps = (state: any) => ({
  loggingIn: state.authReducer.loggingIn
});

const actionCreators = {
  login: loginRequest,
};

export default connect(mapStateToProps, actionCreators)(Login);