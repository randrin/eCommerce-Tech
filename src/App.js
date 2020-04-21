import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./components/routes/Routes";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Route component={Routes} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
