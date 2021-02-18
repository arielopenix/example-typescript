import React from "react";
import Login from "./views/Login/Login";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
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
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/principal" component={MenuPrincipal}/>
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
