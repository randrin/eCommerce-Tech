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
              <h1 className="error-title">Error 404</h1>
              <p>We are sorry, the page you've requested is not available.</p>
              <Link
                to="/"
                className="btn btn-outline-primary-2 btn-minwidth-lg"
              >
                <span>BACK TO HOMEPAGE</span>
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
