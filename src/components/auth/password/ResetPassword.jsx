import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../../components";
import { Translation } from "react-i18next";
import { Breadcrumb } from "../../../site";

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      confirmation: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleReset(e) {
    e.preventDefault();
    this.setState({ confirmation: true });
  }

  render() {
    const { confirmation } = this.state;
    return (
      <>
        <Translation>
          {(t) => (
            <main className="main">
              <Breadcrumb
                title={<span>{t("RESET-PASSWORD.BREADCRUMB")}</span>}
                showMultiLanguages="true"
              />
              <div
                className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
                style={{
                  backgroundImage:
                    "url(" + "assets/images/backgrounds/login-bg.jpg" + ")",
                }}
              >
                <div className="container">
                  <div className="form-box">
                    <div className="form-tab">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-4 mt-2 mb-2 store-logo-page">
                            <Link to="/" className="logo">
                              <img
                                src="/assets/images/demos/demo-4/logo.png"
                                alt="Molla Logo"
                                width="105"
                                height="25"
                              />
                            </Link>
                            <div className="store-logo-container">
                              <span className="store-logo-flag-green"></span>
                              <span className="store-logo-flag-red"></span>
                              <span className="store-logo-flag-yellow"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="signin"
                          role="tabpanel"
                          aria-labelledby="signin-tab"
                        >
                          {confirmation ? (
                            <>
                              <div className="store-reset-confirmation text-center mb-3">
                                <h4 className="mb-3">
                                  {t("RESET-PASSWORD.CONFIRMATION_TITLE")}
                                </h4>
                                <p className="mb-2">
                                  {t("RESET-PASSWORD.CONFIRMATION_SUBTITLE")}
                                </p>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="text-center mb-3">
                                <h4>{t("RESET-PASSWORD.TITLE")}</h4>
                                <p>{t("RESET-PASSWORD.SUBTITLE")}</p>
                              </div>
                              <form onSubmit={this.handleReset}>
                                <div className="form-group">
                                  <label htmlFor="email">
                                    <span>{t("LOGIN.EMAIL_FIELD")}</span>
                                    <span className="store-required">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    required
                                  />
                                </div>
                                <div className="form-footer">
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-sm-12 store-create-account">
                                        <button
                                          type="submit"
                                          className="btn btn-primary btn-g store-btn store-fullwidth-btn"
                                        >
                                          <span>
                                            {t("RESET-PASSWORD.SUBMIT")}
                                          </span>
                                          <i className="icon-long-arrow-right"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </>
                          )}
                          <div className="form-choice mt-3">
                            <div className="container">
                              <div className="row">
                                <Link
                                  to="/"
                                  className="btn btn-outline-primary-2"
                                >
                                  <i className="icon-long-arrow-left"></i>
                                  <span className="store-text-cta">
                                    {t("HOME.RETURN")}
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          )}
        </Translation>
        <Footer />
      </>
    );
  }
}
