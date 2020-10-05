import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "./../../site";
import { Navbar, Footer } from "../../components";
import { Translation } from "react-i18next";
export default class Error404 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Navbar />
        <main className="main">
          <Translation>
            {(t) => (
              <>
                <Breadcrumb title={<span>{t("ERROR404.BREADCRUMB")}</span>} />
                <div
                  className="error-content text-center"
                  style={{
                    backgroundImage:
                      "url(" + "assets/images/backgrounds/error-bg.jpg" + ")",
                  }}
                >
                  <div className="container">
                    <h1 className="error-title">{t("ERROR404.BREADCRUMB")}</h1>
                    <p>{t("ERROR404.TITLE")}</p>
                    <Link
                      to="/"
                      className="btn btn-outline-primary-2 btn-minwidth-lg"
                    >
                      <span>{t("ERROR404.BUTTON")}</span>
                      <i className="icon-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </Translation>
        </main>
        <Footer />
      </>
    );
  }
}
