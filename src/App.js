import React from "react";
import List from "./components/List";
import ListItem from "./components/ListItem";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
