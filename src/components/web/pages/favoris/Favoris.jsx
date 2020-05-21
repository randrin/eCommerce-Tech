import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Footer,
  FavorisProducts,
  FavorisEmpty,
  HeroBanner,
} from "../../../../components";
import { Translation } from "react-i18next";
import { Breadcrumb } from "../../../../site";

export default class Favoris extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      isLogged: false,
    };
  }

  retrieveInformationsUser() {
    var user = JSON.parse(localStorage.getItem("user"));
    var now = new Date().getTime().toString();
    if (user) {
      var tokenTime = user.tokenTime;
      if (now < tokenTime) {
        this.setState({
          username: user.value.username,
          email: user.value.email,
          isLogged: true,
        });
      }
    }
  }
  componentDidMount() {
    this.retrieveInformationsUser();
  }
  render() {
    const { isLogged } = this.state;
    return (
      <>
        <Navbar />
        <Translation>
          {(t) => (
            <>
              <main class="main">
                <HeroBanner
                  title={t("WISHLIST.HEROBANNER_TITLE")}
                  subtitle={t("WISHLIST.HEROBANNER_SUBTITLE")}
                />
                <Breadcrumb title={<span>{t("WISHLIST.BREADCRUMB")}</span>} />
                {isLogged ? <FavorisProducts /> : <FavorisEmpty />}
              </main>
            </>
          )}
        </Translation>
        <Footer />
      </>
    );
  }
}
