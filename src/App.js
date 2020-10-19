import React from "react";

import { Route } from "react-router-dom";

import { Main, Login } from "./pages";

function App() {
  return (
    <div>
      <Route path="/" component={Main} exact />
      <Route path="/login" component={Login} exact />
    </div>
  );
}

export default App;
