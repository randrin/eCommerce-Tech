import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../../components";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmation_password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRegister(e) {
    e.preventDefault();
  }
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
                  Nouveau Client
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
                      <form onSubmit={this.handleRegister}>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="firstname">First Name *</label>
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
                              <label htmlFor="lastname">Last Name *</label>
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
                          <label htmlFor="email">Email address *</label>
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
                        <div className="form-group">
                          <label htmlFor="confirmation_password">
                            Confirmation Password *
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="confirmation_password"
                            name="confirmation_password"
                            onChange={this.handleChange}
                            value={this.state.confirmation_password}
                            required
                          />
                        </div>
                        <div className="custom-control custom-checkbox mt-2 mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="register-policy"
                            required
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="register-policy"
                          >
                            I agree to the <a href="#">privacy policy</a> *
                          </label>
                        </div>
                        <div className="form-footer">
                          <button
                            type="submit"
                            className="btn btn-outline-primary-2"
                          >
                            <span>REGISTER</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>
                        </div>
                      </form>
                      <div className="form-choice mt-3">
                        <h6 className="text-center">
                          Déjà client chez XXXXX ?
                        </h6>
                        <div className="row">
                          <div className="col-sm-12 store-create-account">
                            <Link to="/login" className="btn btn-primary btn-g">
                              <span>Se connecter</span>
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
