import React from "react";
import Login from "./views/Login/Login";
import Menu from "./views/Menu/Menu";
import Main from "./views/Main/Main";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/menu" component={Menu} />
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;