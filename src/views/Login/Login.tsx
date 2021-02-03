import React from "react";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import logo from "../../assets/img/logo.png";

const Login = () => {
  //listens to change event on username textField and dispatches the setUsername action.
  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setEmail",
      payload: event.target.value,
    });
  };

  //listens to change event on password textField and dispatches the setPassword action.
  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setPassword",
      payload: event.target.value,
    });
  };

  return (
    <Container className="login" component="main" maxWidth="xs">
      <img alt="Web Logo" className="logo" src={logo} />
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          onChange={handleEmailChange}
          required
          fullWidth
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          onChange={handlePasswordChange}
          fullWidth
          name="password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
      </form>
    </Container>
  );
};

export default Login;
