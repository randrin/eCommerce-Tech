import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./components/routes/Routes";
import {
  Footer,
  Navbar,
  Sidebar,
  Sidecart,
  Categories,
  Nouveautes,
  Deals,
} from "./components";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <main class="main">
            <div class="intro-slider-container mb-5">
              <Sidebar />
            </div>
            <Categories />
            <Nouveautes />
            <Deals />
          </main>
          <Sidecart />
          <Route component={Routes} />
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
