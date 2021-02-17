import React from "react";
import Login from "./views/Login/Login";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import PrivateRoute from "./routes/privateRoute"
import GuestRoute from "./routes/guestRoute";
import Main from "./views/Main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './views/Dashboard/Dashboard';
import MenuPrincipal from './layout/Menu/Menu';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <GuestRoute exact path="/login" component={Login} />
            <Route path="/" exact component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/principal" component={MenuPrincipal}/>
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
