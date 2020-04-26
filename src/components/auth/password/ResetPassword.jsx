import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../../components";

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleReset(e) {
    e.preventDefault();
    console.log(e);
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
                  Initialisation Mot de Passe
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
                      <div className="text-center mb-3">
                        <h4>Vous avez oublié votre mot de passe ?</h4>
                        <p>
                          Saisissez l'adresse mail que vous nous avez indiquée
                          lors de votre inscription, afin de recevoir un lien de
                          réinitialisation de votre mot de passe.{" "}
                        </p>
                      </div>
                      <form onSubmit={this.handleReset}>
                        <div className="form-group">
                          <label htmlFor="email">Email Address *</label>
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
                                  className="btn btn-primary btn-g
                                  store-btn"
                                >
                                  <span>VALIDER</span>
                                  <i className="icon-long-arrow-right"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="form-choice mt-3">
                        <div className="container">
                          <div className="row">
                            <Link to="/" className="btn btn-outline-primary-2">
                              <i className="icon-long-arrow-left"></i>
                              <span className="store-text-cta">
                                Retour à l'accueil
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
        <Footer />
      </>
    );
  }
}
