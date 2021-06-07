import "./App.css";
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Homepage from "./components/pages/Homepage";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            {/* <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} /> */}
            <Route exact path="/home" component={Homepage} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;