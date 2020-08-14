import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import AdminPanel from "./pages/AdminPanel/AdminPanel";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Homepage/>
      </Route>
      <Route path="/admin">
        <AdminPanel/>
      </Route>
      <Redirect to="/"/>
    </Switch>
  );
}

export default App;
