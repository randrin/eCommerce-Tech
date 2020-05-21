import React, { Component } from "react";
import { Translation } from "react-i18next";

export default class Deals extends Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <>
            <div className="container">
              <div className="heading text-center mb-3">
                <h2 className="title">{t("DEALS.DEAL_OUTLET")}</h2>
                <p className="title-desc">{t("DEALS.TITLE")}</p>
              </div>
              <div className="row">
                <div className="col-lg-6 deal-col">
                  <div
                    className="deal"
                    style={{
                      backgroundImage:
                        "url(" +
                        "assets/images/demos/demo-4/deal/bg-1.jpg" +
                        ")",
                    }}
                  >
                    <div className="deal-top">
                      <h2>{t("DEALS.DAY")}</h2>
                      <h4>{t("DEALS.QUANTITY")}</h4>
                    </div>
                    <div className="deal-content">
                      <h3 className="product-title">
                        <a href="product.html">
                          Home Smart Speaker with Google Assistant
                        </a>
                      </h3>
                      <div className="product-price">
                        <span className="new-price">$129.00</span>
                        <span className="old-price">Was $150.99</span>
                      </div>
                      <a href="product.html" className="btn btn-link">
                        <span>{t("BUTTONS.SHOW_NOW")}</span>
                        <i className="icon-long-arrow-right"></i>
                      </a>
                    </div>
                    <div className="deal-bottom">
                      <div
                        className="deal-countdown daily-deal-countdown"
                        data-until="+10h"
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 deal-col">
                  <div
                    className="deal"
                    style={{
                      backgroundImage:
                        "url(" +
                        "assets/images/demos/demo-4/deal/bg-2.jpg" +
                        ")",
                    }}
                  >
                    <div className="deal-top">
                      <h2>{t("DEALS.OFFERS")}</h2>
                      <h4>{t("DEALS.SIGN_IN")}</h4>
                    </div>

                    <div className="deal-content">
                      <h3 className="product-title">
                        <a href="product.html">
                          Certified Wireless Charging Pad for iPhone / Android
                        </a>
                      </h3>
                      <div className="product-price">
                        <span className="new-price">$29.99</span>
                      </div>

                      <a href="login.html" className="btn btn-link">
                        <span>{t("BUTTONS.SIGN_IN")}</span>
                        <i className="icon-long-arrow-right"></i>
                      </a>
                    </div>

                    <div className="deal-bottom">
                      <div
                        className="deal-countdown offer-countdown"
                        data-until="+11d"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="more-container store-btn-hover text-center mt-3 mb-5">
                <a
                  href="#"
                  className="btn btn-primary btn-g btn-round btn-more"
                >
                  <span>{t("BUTTONS.SHOW_DEALS")}</span>
                  <i className="icon-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </>
        )}
      </Translation>
    );
  }
}
