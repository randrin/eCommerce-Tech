import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";

export default class HeaderCartEmpty extends Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <>
            <div className="text-center store-btn-hover">
              <span className="icon-box-icon">
                <i className="icon-shopping-cart"></i>
              </span>
              <div className="icon-box-content mb-2">
                <h3 className="icon-box-title">
                  {t("HEADER-MIDDLE.EMPTY_CART")}
                </h3>
              </div>
              <Link to="/products" className="btn btn-primary btn-g">
                <span className="store-text-cta">
                  {t("HEADER-MIDDLE.PRODUCTS")}
                </span>
                <i className="icon-long-arrow-right"></i>
              </Link>
            </div>
          </>
        )}
      </Translation>
    );
  }
}
