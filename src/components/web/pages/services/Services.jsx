import React, { Component } from "react";
import { Translation } from "react-i18next";

export default class Services extends Component {
  render() {
    return (
      <>
        <div className="container">
          <hr className="mb-0" />
        </div>
        <div className="icon-boxes-container bg-transparent">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon text-dark">
                    <i className="icon-rocket"></i>
                  </span>
                  <div className="icon-box-content">
                    <Translation>
                      {(t) => (
                        <h3 className="icon-box-title">
                          {t("SERVICES.SHIPPING_TITLE")}
                        </h3>
                      )}
                    </Translation>
                    <Translation>
                      {(t) => <p>{t("SERVICES.SHIPPING_SUBTITLE")}</p>}
                    </Translation>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon text-dark">
                    <i className="icon-rotate-left"></i>
                  </span>
                  <div className="icon-box-content">
                    <Translation>
                      {(t) => (
                        <h3 className="icon-box-title">
                          {t("SERVICES.RETURNS_TITLE")}
                        </h3>
                      )}
                    </Translation>
                    <Translation>
                      {(t) => <p>{t("SERVICES.RETURNS_SUBTITLE")}</p>}
                    </Translation>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon text-dark">
                    <i className="icon-info-circle"></i>
                  </span>
                  <div className="icon-box-content">
                    <Translation>
                      {(t) => (
                        <h3 className="icon-box-title">
                          {t("SERVICES.OFFER_TITLE")}
                        </h3>
                      )}
                    </Translation>
                    <Translation>
                      {(t) => <p>{t("SERVICES.OFFER_SUBTITLE")}</p>}
                    </Translation>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon text-dark">
                    <i className="icon-life-ring"></i>
                  </span>
                  <div className="icon-box-content">
                    <Translation>
                      {(t) => (
                        <h3 className="icon-box-title">
                          {t("SERVICES.SUPPORT_TITLE")}
                        </h3>
                      )}
                    </Translation>
                    <Translation>
                      {(t) => <p>{t("SERVICES.SUPPORT_SUBTITLE")}</p>}
                    </Translation>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
