import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavLeftDashboard,
  Footer,
  HeroBanner,
  HomePage,
  Orders,
  Downloads,
  Adresses,
  Account,
} from "../../../components";
import { Translation } from "react-i18next";
import { Breadcrumb } from "../../../site";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Translation>
          {(t) => (
            <>
              <Navbar />
              <main className="main">
                <>
                  <HeroBanner
                    title={t("DASHBOARD.HEROBANNER_TITLE")}
                    subtitle={t("DASHBOARD.HEROBANNER_SUBTITLE")}
                  />
                  <Breadcrumb
                    title={<span>{t("DASHBOARD.BREADCRUMB")}</span>}
                  />
                </>
                <div className="page-content mt-5">
                  <div className="dashboard store-dashboard-wrapper">
                    <div className="container">
                      <div className="row">
                        <NavLeftDashboard />
                        <div className="col-md-8 col-lg-9">
                          <div className="tab-content">
                            <HomePage />
                            <Orders />
                            <Downloads />
                            <Adresses />
                            <Account />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </>
          )}
        </Translation>
        <Footer />
      </>
    );
  }
}
