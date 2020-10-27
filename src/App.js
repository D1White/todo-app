import React from "react";

import { Route, Switch } from "react-router-dom";

import { Main, Login, Register } from "./pages";
import { PrivateRoute } from "./auth/PrivateRoute";

function App() {
  return (
    <Switch>
      <PrivateRoute path="/" component={Main} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
    </Switch>
  );
}

/* TODO
+click listener problem
+auth warnings
-login enter check
-icons
-animations
*/

export default App;
