import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";

export default class OrdersEmpty extends Component {
  render() {
    return (
      <>
        <Translation>
          {(t) => (
            <>
              <div className="text-center">
                <div class="row justify-content-center">
                  <div class="icon-box text-center">
                    <span class="icon-box-icon">
                      <i className="icon-shopping-cart store-icon-large store-text-tomato"></i>
                    </span>
                    <div class="icon-box-content">
                      <span>{t("DASHBOARD.ORDERS.EMPTY_ORDERS")}</span>
                    </div>
                  </div>
                </div>
                <Link to="/products" className="btn btn-outline-primary-2">
                  <span>{t("DASHBOARD.ORDERS.BUTTON_SHOP")}</span>
                  <i className="icon-long-arrow-right"></i>
                </Link>
              </div>
            </>
          )}
        </Translation>
      </>
    );
  }
}
