import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer store-footer-wrapper">
          <div className="footer-middle">
            <div className="container">
              <div className="row widget">
                <div className="col-sm-12 col-lg-3">
                  <img
                    src="assets/images/logo-footer.png"
                    className="footer-logo"
                    alt="Footer Logo"
                    width="105"
                    height="25"
                  />
                  <p>
                    Praesent dapibus, neque id cursus ucibus, tortor neque
                    egestas augue, eu vulputate magna eros eu erat.{" "}
                  </p>
                  <div className="social-icons mt-2">
                    <Link
                      to="#"
                      className="social-icon store-btn-facebook"
                      target="_blank"
                      title="Facebook"
                    >
                      <i className="icon-facebook-f"></i>
                    </Link>
                    <Link
                      to="#"
                      className="social-icon store-btn-twitter"
                      target="_blank"
                      title="Twitter"
                    >
                      <i className="icon-twitter"></i>
                    </Link>
                    <Link
                      to="#"
                      className="social-icon store-btn-instagram"
                      target="_blank"
                      title="Instagram"
                    >
                      <i className="icon-instagram"></i>
                    </Link>
                    <Link
                      to="#"
                      className="social-icon store-btn-youtube"
                      target="_blank"
                      title="Youtube"
                    >
                      <i className="icon-youtube"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6 store-footer-container">
                  <div className="row">
                    <ul className="widget-list store-footer-link">
                      <li>
                        <Link to="/link">Link name title 1</Link>
                      </li>
                      <li>
                        <Link to="/link">Link name title 2</Link>
                      </li>
                      <li>
                        <Link to="/link">Link name title 3</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="store-footer-apps">
                      <Link to="/coming-soon">
                        <img
                          src="./assets/images/appstores/Google_Play.png"
                          alt="Google Play Store"
                        />
                      </Link>
                      <Link to="/coming-soon">
                        <img
                          src="./assets/images/appstores/App_Store.png"
                          alt="Apple Play Store"
                        />
                      </Link>
                      {/* <Link to="/coming-soon">
                      <img
                        src="./assets/images/appstores/Windows_Store.png"
                        alt="Windows Play Store"
                      />
                    </Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-3">
                  <div className="widget-call">
                    <i className="icon-phone"></i>
                    <Translation>
                      {(t) => <span>{t("FOOTER.CALL_HELP")}</span>}
                    </Translation>
                    <a href="tel:#">+0123 456 789</a>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row store-footer">
                <div className="col-sm-6 col-lg-3">
                  <div className="widget">
                    <h4 className="widget-title">Mon Compte</h4>
                    <ul className="widget-list">
                      <li>
                        <a href="#">Sign In</a>
                      </li>
                      <li>
                        <Link to="/cart">View Cart</Link>
                      </li>
                      <li>
                        <Link to="/favoris">My Wishlist</Link>
                      </li>
                      <li>
                        <a href="#">Track My Order</a>
                      </li>
                      <li>
                        <a href="#">Help</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="widget">
                    <h4 className="widget-title">Qui sommes-nous?</h4>
                    <ul className="widget-list">
                      <li>
                        <Link to="/about">About Molla</Link>
                      </li>
                      <li>
                        <a href="#">Our Services</a>
                      </li>
                      <li>
                        <a href="#">How to shop on Molla</a>
                      </li>
                      <li>
                        <Link to="/faqs">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                      <li>
                        <Link to="/coming-soon">Coming Soon</Link>
                      </li>
                      <li>
                        <Link to="/temoignages">Temoignages</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="widget">
                    <h4 className="widget-title">Services Client</h4>
                    <ul className="widget-list">
                      <li>
                        <Link to="/about">About Molla</Link>
                      </li>
                      <li>
                        <a href="#">Our Services</a>
                      </li>
                      <li>
                        <a href="#">How to shop on Molla</a>
                      </li>
                      <li>
                        <Link to="/faqs">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                      <li>
                        <Link to="/coming-soon">Coming Soon</Link>
                      </li>
                      <li>
                        <Link to="/temoignages">Temoignages</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="widget">
                    <h4 className="widget-title">Notre Boutique</h4>
                    <ul className="widget-list">
                      <li>
                        <a href="#">Payment Methods</a>
                      </li>
                      <li>
                        <a href="#">Money-back guarantee!</a>
                      </li>
                      <li>
                        <a href="#">Returns</a>
                      </li>
                      <li>
                        <a href="#">Shipping</a>
                      </li>
                      <li>
                        <a href="#">Terms and conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <Link to="/blogs">Our Blogs</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <p className="footer-copyright">
                Copyright © 2019 Molla Store.{" "}
                <Translation>{(t) => <>{t("FOOTER.COPYRIGHT")}</>}</Translation>
              </p>
              <figure className="footer-payments">
                <Translation>
                  {(t) => (
                    <p className="text-right mb-1">
                      {t("FOOTER.PAIMENT_METHOD")}
                    </p>
                  )}
                </Translation>
                <img
                  src="/assets/images/payments.png"
                  alt="Payment methods"
                  width="272"
                  height="20"
                />
              </figure>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
