import React, { Component } from "react";
import { Navbar, Footer } from "../../../components";
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
    //window.location.replace(`/`);
  }

  componentDidMount() {
    this.restoreInformationsUser();
  }
  render() {
    return (
      <>
        <Navbar />
        <main className="main">
          <Breadcrumb
            title={
              <Translation>
                {(t) => <span>{t("LOGOUT.BREADCRUMB")}</span>}
              </Translation>
            }
          />
          <div className="container">
            <p>Merci de votre visite sur le site.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
