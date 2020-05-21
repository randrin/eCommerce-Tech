import React, { Component } from "react";
import { Translation } from "react-i18next";
export default class Abonnement extends Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <>
            <div
              className="cta bg-image bg-dark pt-4 pb-5 mb-0"
              style={{
                backgroundImage:
                  "url(" + "assets/images/demos/demo-4/bg-5.jpg" + ")",
              }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-sm-10 col-md-8 col-lg-6">
                    <div className="cta-heading text-center">
                      <h3 className="cta-title text-white">
                        {t("NEWSLETTERS.BANNER_TITLE")}
                      </h3>
                      <p className="cta-desc text-white">
                        {t("NEWSLETTERS.BANNER_SUBTITLE")}
                      </p>
                    </div>
                    <form action="#">
                      <div className="input-group input-group-round">
                        <input
                          type="email"
                          className="form-control form-control-white"
                          placeholder="Enter your Email Address"
                          aria-label="Email Adress"
                          required
                        />
                        <div className="input-group-append store-btn-hover">
                          <button
                            className="btn btn-primary btn-g"
                            type="submit"
                          >
                            <span>Subscribe</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </form>
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
