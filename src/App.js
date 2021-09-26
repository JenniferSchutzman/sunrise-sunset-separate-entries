import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LatLongForm from "./pages/LatLongForm";
import Results from "./pages/Results";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LatLongForm} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

