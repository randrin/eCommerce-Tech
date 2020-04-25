import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./components/routes/Routes";
import ScrollToTop from "./ScrollToTop";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter forceRefresh="false">
          <ScrollToTop />
          <Route component={Routes} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
