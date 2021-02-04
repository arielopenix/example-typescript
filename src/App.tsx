import React, { useEffect } from "react";
import Login from "./views/Login/Login";

function App() {
  useEffect(() => {
    console.log("hola");
  });

  return (
    <>
      <Login />
    </>
  );
}

export default App;
