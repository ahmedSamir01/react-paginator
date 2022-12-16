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
          <Route path="/list/item/:id">
            <ListItem />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/">
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
