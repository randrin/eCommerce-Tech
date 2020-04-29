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
  Services,
  Abonnement,
  HeaderMobile,
  NewLetters,
} from "../../components";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="page-wrapper">
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
            <Services />
            <Abonnement />
            <Footer />
          </main>
        </div>
        <HeaderMobile />
        <NewLetters />
      </>
    );
  }
}
