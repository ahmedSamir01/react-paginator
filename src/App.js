import React from "react";
import List from "./components/List";
import ListItem from "./components/ListItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/react-paginator/list/item/:id">
            <ListItem />
          </Route>
          <Route path="/react-paginator/list">
            <List />
          </Route>
          <Route path="/react-paginator">
            <div className="text-center">
              <h1>WELCOME</h1>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
