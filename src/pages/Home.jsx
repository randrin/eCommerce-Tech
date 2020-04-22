import React, { Component } from "react";
import {
  Footer,
  Navbar,
  Sidebar,
  Categories,
  Nouveautes,
  Deals,
  Partenaires,
  Produits,
  Recommandations,
} from "../components";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="main">
          <div className="intro-slider-container mb-5">
            <Sidebar />
          </div>
          <Categories />
          <Nouveautes />
          <Deals />
          <Partenaires />
          <Produits />
          <Recommandations />
        </main>
        <Footer />
      </>
    );
  }
}
