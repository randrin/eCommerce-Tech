import React, { Component } from "react";
import { Translation } from "react-i18next";

export default class HeaderCartEmpty extends Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <>
            <div className="text-center">
              <span className="icon-box-icon">
                <i className="icon-shopping-cart"></i>
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">
                  {t("HEADER-MIDDLE.EMPTY_CART")}
                </h3>
              </div>
            </div>
          </>
        )}
      </Translation>
    );
  }
}
