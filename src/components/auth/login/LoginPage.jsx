import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "../../../components";

export default class LoginPage extends Component {
  render() {
    return (
      <>
        <main className="main">
          <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
            <div className="container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Login
                </li>
              </ol>
            </div>
          </nav>
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
                  <div className="header-left">
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
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="signin-2"
                      role="tabpanel"
                      aria-labelledby="signin-tab-2"
                    >
                      <form action="#">
                        <div className="form-group">
                          <label for="singin-email-2">
                            Username or email address *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="singin-email-2"
                            name="singin-email"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label for="singin-password-2">Password *</label>
                          <input
                            type="password"
                            className="form-control"
                            id="singin-password-2"
                            name="singin-password"
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
                              id="signin-remember-2"
                            />
                            <label
                              className="custom-control-label"
                              for="signin-remember-2"
                            >
                              Remember Me
                            </label>
                          </div>
                          <a href="#" className="btn btn-link forgot-link">
                            Forgot Your Password ?
                          </a>
                        </div>
                      </form>
                      <div className="form-choice mt-5">
                        <h6 className="text-center">
                          Vous êtes nouveau sur le site ?
                        </h6>
                        <div className="row">
                          <div className="col-sm-12 store-create-account">
                            <Link to="/" className="btn btn-primary btn-g">
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
