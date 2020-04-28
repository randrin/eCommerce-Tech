import React, { Component } from "react";
import { Translation } from "react-i18next";

export default class HeaderCartEmpty extends Component {
  render() {
    return (
      <>
        <div className="text-center">
          <span className="icon-box-icon">
            <i className="icon-shopping-cart"></i>
          </span>
          <div className="icon-box-content">
            <Translation>
              {(t) => (
                <h3 className="icon-box-title">
                  {t("HEADER-MIDDLE.EMPTY_CART")}
                </h3>
              )}
            </Translation>
          </div>
        </div>
      </>
    );
  }
}
