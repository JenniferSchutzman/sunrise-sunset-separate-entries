import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Results from "./pages/Results";

import Location1 from './pages/Location1'
import Location2 from './pages/Location2'
import Location3 from './pages/Location3'
import Location4 from './pages/Location4'
import Location5 from './pages/Location5'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Location1} />
        <Route exact path="/location2" component={Location2} />
        <Route exact path="/location3" component={Location3} />
        <Route exact path="/location4" component={Location4} />
        <Route exact path="/location5" component={Location5} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

