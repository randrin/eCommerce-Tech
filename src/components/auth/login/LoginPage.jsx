import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../../components";
import { Breadcrumb } from "../../../site";
import { Translation } from "react-i18next";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      remender: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.rememberMe = this.rememberMe.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLogin(e) {
    e.preventDefault();
    var login = {
      username: "admin",
      password: this.state.password,
      email: this.state.email,
    };
    if (
      (login.username === "admin" && login.password === "1234") ||
      (login.email === "test@gmail.com" && login.password === "1234")
    ) {
      var expires = 24 * 60 * 60 * 1000;
      var user = {
        value: login,
        tokenTime: new Date().getTime() + expires,
      };
      localStorage.setItem("user", JSON.stringify(user));
      window.location.replace(`/`);
    }
  }
  rememberMe() {
    let user = {
      email: this.state.email,
      password: this.state.password,
    };
    localStorage.setItem("remember", JSON.stringify(user));
  }
  retrieveInformarionsUser() {
    if (localStorage.getItem("remember")) {
      let remember = JSON.parse(localStorage.getItem("remember"));
      this.setState({
        email: remember.email,
        password: remember.password,
        remember: true
      });
    }
  }
  componentDidMount() {
    this.retrieveInformarionsUser();
  }
  render() {
    return (
      <>
        <main className="main">
          <Breadcrumb
            title={
              <Translation>
                {(t) => <span>{t("LOGIN.BREADCRUMB")}</span>}
              </Translation>
            }
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
                      <form onSubmit={this.handleLogin}>
                        <div className="form-group">
                          <label htmlFor="email">
                            Username or email address *
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
                          <label htmlFor="password">Password *</label>
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            required
                          />
                        </div>
                        <div className="form-footer">
                          <button
                            type="submit"
                            className="btn btn-outline-primary-2"
                          >
                            <span>LOG IN</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>

                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="signin-remember"
                              value={this.state.remender}
                              onChange={this.handleChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="signin-remember"
                              onClick={this.rememberMe}
                            >
                              Remember Me
                            </label>
                          </div>
                          <Link
                            to="/reset-password"
                            className="btn btn-link forgot-link"
                          >
                            Forgot Your Password ?
                          </Link>
                        </div>
                      </form>
                      <div className="form-choice mt-3">
                        <h6 className="text-center">
                          Vous êtes nouveau sur le site ?
                        </h6>
                        <div className="row">
                          <div className="col-sm-12 store-create-account">
                            <Link
                              to="/register"
                              className="btn btn-primary btn-g"
                            >
                              <span>Créer mon compte</span>
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
        <Footer />
      </>
    );
  }
}
