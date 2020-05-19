import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./components/routes/Routes";
import { ScrollToTop, ButtonGoToTop } from "./site";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter forceRefresh={true}>
          <ScrollToTop />
          <Route component={Routes} />
          <ButtonGoToTop />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
