import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import User from "./user/pages/User";
import NewTask from "./tasks/pages/NewTask";

const App = () => {
  return (
    /*
      Using the alias 'Router' for BrowserRouter.
      Switch is used to prevent the Redirect tag to link to the starting page by default thus ignoring any other Routes.
      The Route tag uses the 'path: string | string[]' attribute where a specific go to route is defined and the 'exact: bool' attribute
      which is true by default to ensure a match if the path matches the location.pathname exactly. 
    */

    <Router>
      <Switch>
        <Route path="/" exact>
          <User />
        </Route>
        <Route path="/tasks/new" exact>
          <NewTask />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
