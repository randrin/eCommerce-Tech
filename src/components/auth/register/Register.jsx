import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../../components";
import { Breadcrumb } from "../../../site";
import { Translation } from "react-i18next";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Nouveau Client",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmation_password: "",
      passwordType: "password",
      confirmation_passwordType: "password",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleHideShowPassword = this.handleHideShowPassword.bind(this);
    this.handleHideShowPasswordConfirmation = this.handleHideShowPasswordConfirmation.bind(
      this
    );
  }

  handleHideShowPassword() {
    this.setState({
      passwordType:
        this.state.passwordType === "password" ? "text" : "password",
    });
  }
  handleHideShowPasswordConfirmation() {
    this.setState({
      confirmation_passwordType:
        this.state.confirmation_passwordType === "password"
          ? "text"
          : "password",
    });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRegister(e) {
    e.preventDefault();
  }
  render() {
    const { passwordType, confirmation_passwordType } = this.state;
    return (
      <>
        <Translation>
          {(t) => (
            <>
              <main className="main">
                <Breadcrumb
                  title={<span>{t("REGISTER.BREADCRUMB")}</span>}
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
                            className="store-registration-wrapper tab-pane fade show active"
                            id="signin"
                            role="tabpanel"
                            aria-labelledby="signin-tab"
                          >
                            <form onSubmit={this.handleRegister}>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="firstname">
                                      <span>{t("LOGIN.FIRSTNAME_FIELD")}</span>
                                      <span className="store-required">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="firstname"
                                      name="firstname"
                                      onChange={this.handleChange}
                                      value={this.state.firstname}
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="lastname">
                                      <span>{t("LOGIN.LASTNAME_FIELD")}</span>
                                      <span className="store-required">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="lastname"
                                      name="lastname"
                                      onChange={this.handleChange}
                                      value={this.state.lastname}
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
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
                              <div className="form-group">
                                <label htmlFor="password">
                                  <span>{t("LOGIN.PASSWORD_FIELD")}</span>
                                  <span className="store-required">*</span>
                                </label>
                                <input
                                  type={passwordType}
                                  className="form-control"
                                  id="password"
                                  name="password"
                                  onChange={this.handleChange}
                                  value={this.state.password}
                                  required
                                />
                                <div
                                  className="store-hide-show-password"
                                  onClick={this.handleHideShowPassword}
                                >
                                  <i
                                    className={`fa fa-${
                                      passwordType === "password"
                                        ? "lock"
                                        : "unlock"
                                    } store-icon-medium`}
                                  ></i>
                                </div>
                              </div>
                              <div className="form-group">
                                <label htmlFor="confirmation_password">
                                  <span>
                                    {t("LOGIN.PASSWORD_CONFIRMATION_FIELD")}
                                  </span>
                                  <span className="store-required">*</span>
                                </label>
                                <input
                                  type={confirmation_passwordType}
                                  className="form-control"
                                  id="confirmation_password"
                                  name="confirmation_password"
                                  onChange={this.handleChange}
                                  value={this.state.confirmation_password}
                                  required
                                />
                                <div
                                  className="store-hide-show-password"
                                  onClick={
                                    this.handleHideShowPasswordConfirmation
                                  }
                                >
                                  <i
                                    className={`fa fa-${
                                      confirmation_passwordType === "password"
                                        ? "lock"
                                        : "unlock"
                                    } store-icon-medium`}
                                  ></i>
                                </div>
                              </div>
                              <div className="custom-control custom-checkbox mt-2 mb-3">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="register-policy"
                                  required
                                />
                                <label
                                  className="custom-control-label store-register-policy"
                                  htmlFor="register-policy"
                                >
                                  <span>{t("LOGIN.POLICY_AGREE_1")}</span>{" "}
                                  <Link to="/terms-conditions" target="_blank">
                                    <span>{t("FOOTER.TERMS_CONDITIONS")}</span>
                                  </Link>
                                  <span>{t("LOGIN.POLICY_AGREE_2")}</span>{" "}
                                  <Link to="/policy" target="_blank">
                                    <span>{t("FOOTER.PRIVACY_POLICY")}</span>
                                  </Link>
                                  <span>{t("LOGIN.POLICY_AGREE_3")}</span>{" "}
                                </label>
                              </div>
                              <div className="form-footer">
                                <button
                                  type="submit"
                                  className="btn btn-outline-primary-2 store-fullwidth-btn"
                                >
                                  <span>{t("LOGIN.REGISTER")}</span>
                                  <i className="icon-long-arrow-right"></i>
                                </button>
                              </div>
                            </form>
                            <div className="form-choice mt-3">
                              <h6 className="text-center">
                                {t("REGISTER.ALREADY_CUSTOMER")}
                              </h6>
                              <div className="row">
                                <div className="col-sm-12 store-create-account">
                                  <Link
                                    to="/login"
                                    className="btn btn-primary btn-g"
                                  >
                                    <span>{t("LOGIN.SIGN")}</span>
                                    <i className="icon-long-arrow-right"></i>
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
            </>
          )}
        </Translation>
        <Footer />
      </>
    );
  }
}
