import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./components/routes/Routes";
import { ScrollToTop, ButtonGoToTop } from "./site";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <ScrollToTop />
          <Route component={Routes} />
          <ButtonGoToTop />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
