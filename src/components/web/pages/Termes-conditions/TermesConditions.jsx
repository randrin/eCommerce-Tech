import React, { Component } from "react";
import { Translation } from "react-i18next";
import { Footer, Navbar, HeroBanner } from "../../../../components";
import { Breadcrumb } from "../../../../site";

export default class TermesConditions extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="main">
          <Translation>
            {(t) => (
              <>
                <HeroBanner title={t("CART.HEROBANNER_TITLE")} />
                <Breadcrumb title={<span>{t("CART.BREADCRUMB")}</span>} />
              </>
            )}
          </Translation>
        </main>
        <Footer />
      </>
    );
  }
}
