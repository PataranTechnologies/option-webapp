import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import AdminPanel from "./pages/AdminPanel/AdminPanel";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Navigation from "./components/Navigation/Navigation";
import Treivia from './pages/Treivia/Treivia';
import Calculator from './pages/Calculator/Calculator';
import APIs from './pages/APIs/APIs';

function App() {

  return (
    <>
    <Navigation/>
    <Switch>
      <Route path="/" exact>
        <Homepage/>
      </Route>
      <Route path="/admin">
        <AdminPanel/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/treivia">
        <Treivia/>
      </Route>
      <Route path="/calculator">
        <Calculator/>
      </Route>
      <Route path="/apis">
        <APIs/>
      </Route>
      <Redirect to="/"/>
    </Switch>
    </>
  );
}

export default App;
