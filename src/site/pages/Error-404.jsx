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
          <Breadcrumb
            title={
              <Translation>
                {(t) => <span>{t("ERROR404.BREADCRUMB")}</span>}
              </Translation>
            }
          />
          <div
            className="error-content text-center"
            style={{
              backgroundImage:
                "url(" + "assets/images/backgrounds/error-bg.jpg" + ")",
            }}
          >
            <div className="container">
              <Translation>
                {(t) => (
                  <h1 className="error-title">{t("ERROR404.BREADCRUMB")}</h1>
                )}
              </Translation>
              <Translation>{(t) => <p>{t("ERROR404.TITLE")}</p>}</Translation>
              <Link
                to="/"
                className="btn btn-outline-primary-2 btn-minwidth-lg"
              >
                <Translation>
                  {(t) => <span>{t("ERROR404.BUTTON")}</span>}
                </Translation>
                <i className="icon-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
