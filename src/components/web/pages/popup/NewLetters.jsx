import React, { Component } from "react";
import { Translation } from "react-i18next";

export default class NewLetters extends Component {
  render() {
    return (
      <>
        <div
          className="container newsletter-popup-container mfp-hide"
          id="newsletter-popup-form"
        >
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="row no-gutters bg-white newsletter-popup-content">
                <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
                  <div className="banner-content text-center">
                    <img
                      src="assets/images/popup/newsletter/logo.png"
                      className="logo"
                      alt="logo"
                      width="60"
                      height="15"
                    />
                    <Translation>
                      {(t) => (
                        <h2 className="banner-title">
                          {t("NEWSLETTERS.TITLE_1")}
                          <span>
                            25<b>%</b>
                          </span>
                          {t("NEWSLETTERS.TITLE_2")}
                        </h2>
                      )}
                    </Translation>
                    <Translation>
                      {(t) => <p>{t("NEWSLETTERS.SUBTITLE")}</p>}
                    </Translation>
                    <form action="#">
                      <div className="input-group input-group-round">
                        <input
                          type="email"
                          className="form-control form-control-white"
                          placeholder="Your Email Address"
                          aria-label="Email Adress"
                          required
                        />
                        <div className="input-group-append">
                          <button className="btn" type="submit">
                            <Translation>
                              {(t) => <span>{t("NEWSLETTERS.BUTTON")}</span>}
                            </Translation>
                            <i className="icon-long-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="register-policy-2"
                        required
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="register-policy-2"
                      >
                        <Translation>
                          {(t) => <>{t("NEWSLETTERS.BUTTON_TEXT")}</>}
                        </Translation>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2-5col col-lg-5 ">
                  <img
                    src="assets/images/popup/newsletter/img-1.jpg"
                    className="newsletter-img"
                    alt="newsletter"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
