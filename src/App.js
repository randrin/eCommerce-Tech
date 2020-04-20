import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./components/routes/Routes";
import { Footer, Navbar, Sidebar, Sidecart } from "./components";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Sidebar />
          <Sidecart />
          <Route component={Routes} />
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
