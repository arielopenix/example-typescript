import React, { useReducer, useState } from "react";
import Container from "@material-ui/core/Container";
import logo from "../../assets/img/logo.png";
import { Grid, Link } from "@material-ui/core";
import useStyles from "./LoginStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextFieldOutlined from "../../components/common/TextFieldOutlined";
//import Auth from "../../passapp-sdk/Auth";
import SubmitButton from "../../components/common/SubmitButton";
import { LoginActionType } from "../../redux/actions/types/loginTypes";
import {
  loginReducer,
  loginInitialState,
} from "../../redux/reducers/loginReducer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/validations/LoginValidationSquema";
import { useTranslation } from "react-i18next";
import { BundleKey } from "../../translation/bundleKey";
import { useHistory } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { MenuItem } from '@material-ui/core';
import { connect } from "react-redux";
import { translateTypes } from "../../redux/actions/types/translateTypes";

type LoginProps = {
  state:any,
  changeLanguage: any
}

const Login = (props:LoginProps) => {
  const classes = useStyles();
  const history = useHistory();
  //const auth = new Auth();
  const { t, i18n } = useTranslation();
  const [state, dispatch] = useReducer(loginReducer, loginInitialState);
  const [languaje,setLanguaje] = useState('');
  const { email, password, error } = state;
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  //onSubmit
  const onSubmit = async (e: React.FormEvent) => {
    dispatch({ type: LoginActionType.LOGIN });
    try {
      console.log(`Email: ${email} Password: ${password}`);
      history.replace("/dashboard");
      //await auth.login(email, password);
      dispatch({ type: LoginActionType.LOGIN_SUCCESS });
      //redirecciono al menu
    } catch (error: any) {
      dispatch({ type: LoginActionType.LOGIN_ERROR });
    }
  };
  //onChange
  const handleChange = (e: any, field: any) => {
    dispatch({
      type: LoginActionType.LOGIN_FIELD,
      fieldName: field,
      payload: e.currentTarget.value,
    });
  };
 
  // const onChangeLanguaje = (event: any) => {
  //   console.log(event.target.value);
  //   console.log(event);
  //   i18n.changeLanguage(event.target.value);
  //   console.log(event.target.value);
  // }

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Idioma</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={props.state.translate.lang}
          onChange={e => props.changeLanguage(e.target.value)}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="es_ES">Español</MenuItem>
          <MenuItem value="en_US">English</MenuItem>
          <MenuItem value="pt_BR">Portugues</MenuItem>
        </Select>
      </FormControl>
      <Container
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <Card variant="outlined" style={{ width: "100%" }}>
          <CardContent>
            <div className={classes.paper}>
              <img alt="Web Logo" className="logo" src={logo} />
              <form
                className={classes.form}
                noValidate
                onSubmit={handleSubmit((e: any) => onSubmit(e))}
              >
                <TextFieldOutlined
                  name="email"
                  type="text"
                  label={t(BundleKey.LOGIN_INPUT_EMAIL_PLACEHOLDER)}
                  value={email}
                  inputref={register}
                  onchange={(e: React.FormEvent) => handleChange(e, "email")}
                />
                <p className={classes.error}>{errors.email?.message}</p>
                <TextFieldOutlined
                  name="password"
                  type="password"
                  label={t(BundleKey.LOGIN_INPUT_PASSWORD_PLACEHOLDER)}
                  value={password}
                  inputref={register}
                  onchange={(e: any) =>
                    dispatch({
                      type: LoginActionType.LOGIN_FIELD,
                      fieldName: "password",
                      payload: e.currentTarget.value,
                    })
                  }
                />
                <p className={classes.error}>{errors.password?.message}</p>
                <p className={classes.error}>{error}</p>
                <SubmitButton
                  value={t(BundleKey.LOGIN_BUTTON_LOGIN)}
                  colorbutton="primary"
                  classname="submit"
                  disabled={false}
                />
                <Grid container justify="center" alignItems="center">
                  <Grid item>
                    <p>{t(BundleKey.LOGIN_LABEL_FORGOTPASS)}</p>
                    <Link href="#" variant="body2">
                      {t(BundleKey.LOGIN_BUTTON_CONTACT)}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

const mapStateToProps = (state:any)=>({
  state:state
})

const mapDispatchToProps = (dispatch:any)=>({
    changeLanguage(lang:String){
      dispatch({
        type: translateTypes.TRANSLATE_CHANGE_LANGUAGE,
        lang
      })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);
