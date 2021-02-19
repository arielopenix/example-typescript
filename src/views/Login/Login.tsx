import React, { useReducer } from "react";
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
import { useTranslation } from "react-i18next"
import {BundleKey} from '../../translation/bundleKey'


const Login = () => {
  const classes = useStyles();
  //const auth = new Auth();
  const { t, i18n } = useTranslation();
  const [state, dispatch] = useReducer(loginReducer, loginInitialState);
  const { email, password, error } = state;
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  //onSubmit
  const onSubmit = async (e: React.FormEvent) => {
    dispatch({ type: LoginActionType.LOGIN });
    try {
      console.log(`Email: ${email} Password: ${password}`);
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
  //onChangeLanguaje
  const onChangeLanguaje = () => {
    i18n.changeLanguage();
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
  );
};

export default Login;
