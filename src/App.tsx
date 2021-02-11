import React from "react";
import Login from "./views/Login/Login";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import PrivateRoute from "./routes/privateRoute"
import GuestRoute from "./routes/guestRoute";
import Menu from "./views/Menu/Menu";
import Main from "./views/Main/Main";
import User from "./views/User/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Menu} />
            <GuestRoute exact path="/login" component={Login} />
            <Route path="/" exact component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/menu" component={Menu} />
            <Route path="/users" component={User} />
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
