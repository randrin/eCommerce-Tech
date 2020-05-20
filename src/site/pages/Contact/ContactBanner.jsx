import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";

export default class ContactBanner extends Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <>
            <div
              className="cta cta-display bg-image pt-4 pb-4"
              style={{
                backgroundImage:
                  "url(" + "/assets/images/backgrounds/cta/bg-7.jpg" + ")",
              }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-9 col-xl-7">
                    <div className="row no-gutters flex-column flex-sm-row align-items-sm-center">
                      <div className="col">
                        <h3 className="cta-title text-white">
                          {t("CONTACT.BANNER_TITLE")}
                        </h3>
                        <p className="cta-desc text-white">
                          {t("CONTACT.BANNER_SUBTITLE")}
                        </p>
                      </div>
                      <div className="col-auto store-btn-hover">
                        <Link to="/contact" className="btn btn-primary btn-g">
                          <span>{t("CONTACT.BREADCRUMB")}</span>
                          <i className="icon-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Translation>
    );
  }
}
