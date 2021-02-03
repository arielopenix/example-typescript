import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./views/Login/Login";

function App() {
  useEffect(() => {
    console.log("hola");
  });

  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login}/>
      </Switch>
      <Login />
    </>
  );
}

export default App;
