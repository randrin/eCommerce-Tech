import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Footer,
  Nouveautes,
  Recommandations,
} from "../../../components";
import { Breadcrumb } from "../../../site";
import { Translation } from "react-i18next";

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  restoreInformationsUser() {
    localStorage.removeItem("user");
    //window.location.reload();
  }

  componentDidMount() {
    this.restoreInformationsUser();
  }
  render() {
    return (
      <>
        <Translation>
          {(t) => (
            <>
              <Navbar />
              <main className="main">
                <Breadcrumb title={<span>{t("LOGOUT.BREADCRUMB")}</span>} />
                <div className="container">
                  <div className="row py-5 text-center">
                    <div className="col-12">
                      <h4 className="display-4 store-text-blue-bunting">
                        {t("LOGOUT.TEXT_LOGOUT_1")}
                      </h4>
                    </div>
                    <div className="col-12 my-5">
                      <h4 className="display-5 font-weight-bold store-text-tomato">
                        {t("LOGOUT.TEXT_LOGOUT_2")}
                      </h4>
                    </div>
                    <div className="col-12 my-5">
                      <Nouveautes />
                      <Recommandations />
                    </div>
                    <div className="col-12 store-btn-hover my-5">
                      <Link class="btn btn-primary btn-g" to="/products">
                        <span>{t("LOGOUT.BUTTON_SHOP")}</span>
                        <i class="icon-long-arrow-right"></i>
                      </Link>
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
