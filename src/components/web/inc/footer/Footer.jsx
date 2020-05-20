import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";
import { LoginModal } from "../../../../components";

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
                    src="/assets/images/logo-footer.png"
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
                        <Translation>
                          {(t) => (
                            <Link to="#">{t("FOOTER.TERMS_CONDITIONS")}</Link>
                          )}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => (
                            <Link to="#">{t("FOOTER.PRIVACY_POLICY")}</Link>
                          )}
                        </Translation>
                      </li>
                      {/* <li>
                        <Translation>
                          {(t) => (
                            <Link to="#">{t("FOOTER.LEGAL_NOTICE")}</Link>
                          )}
                        </Translation>
                      </li> */}
                      <li>
                        <Translation>
                          {(t) => <Link to="#">{t("FOOTER.COOKIES")}</Link>}
                        </Translation>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="store-footer-apps">
                      <Link to="/coming-soon">
                        <img
                          src="/assets/images/appstores/Google_Play.png"
                          alt="Google Play Store"
                        />
                      </Link>
                      <Link to="/coming-soon">
                        <img
                          src="/assets/images/appstores/App_Store.png"
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
                    <Translation>
                      {(t) => (
                        <h4 className="widget-title">
                          {t("FOOTER.OUR_STORY")}
                        </h4>
                      )}
                    </Translation>
                    <ul className="widget-list">
                      <li>
                        <Translation>
                          {(t) => <Link to="/about">{t("FOOTER.ABOUT")}</Link>}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => <Link to="#">{t("FOOTER.CAREERS_AT")}</Link>}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => (
                            <Link to="#">{t("FOOTER.OURS_SERVICES")}</Link>
                          )}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => (
                            <Link to="#">{t("FOOTER.OURS_PARTNERS")}</Link>
                          )}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => <Link to="#">{t("FOOTER.OURS_NEWS")}</Link>}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => (
                            <Link to="/blogs">{t("FOOTER.OUR_BLOG")}</Link>
                          )}
                        </Translation>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="widget">
                    <Translation>
                      {(t) => (
                        <h4 className="widget-title">
                          {t("FOOTER.MY_ACCOUNT")}
                        </h4>
                      )}
                    </Translation>
                    <ul className="widget-list">
                      <li>
                        <Translation>
                          {(t) => (
                            <a href="#signin-modal" data-toggle="modal">
                              {t("HEADER-TOP.SIGN_IN_UP")}
                            </a>
                          )}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => (
                            <Link to="#">{t("FOOTER.CREATE_ACCOUNT")}</Link>
                          )}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => (
                            <Link to="/cart">{t("HEADER-MIDDLE.CART")}</Link>
                          )}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => (
                            <Link to="/favoris">
                              {t("HEADER-MIDDLE.MY_WISHLIST")}
                            </Link>
                          )}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => <Link to="#">{t("FOOTER.TRACK_ORDER")}</Link>}
                        </Translation>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="widget">
                    <Translation>
                      {(t) => (
                        <h4 className="widget-title">
                          {t("FOOTER.SERVICES_CLIENT")}
                        </h4>
                      )}
                    </Translation>
                    <ul className="widget-list">
                      <li>
                        <Translation>
                          {(t) => <Link to="#">{t("FOOTER.HOW_TO_BUY")}</Link>}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => (
                            <Link to="#">{t("FOOTER.OURS_PAIMENTS")}</Link>
                          )}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => (
                            <Link to="#">{t("FOOTER.INFOS_DELIVERY")}</Link>
                          )}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => (
                            <Link to="/faqs">{t("FOOTER.OURS_FAQS")}</Link>
                          )}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => (
                            <Link to="/contact">{t("CONTACT.BREADCRUMB")}</Link>
                          )}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => <Link to="#">{t("FOOTER.ANY_HELP")}</Link>}
                        </Translation>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="widget">
                    <Translation>
                      {(t) => (
                        <h4 className="widget-title">{t("FOOTER.OUR_SHOP")}</h4>
                      )}
                    </Translation>
                    <ul className="widget-list">
                      <li>
                        <Translation>
                          {(t) => <Link to="#">{t("FOOTER.OURS_OFFERS")}</Link>}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => (
                            <Link to="#">
                              {t("FOOTER.OURS_NEWS_PROMOTIONS")}
                            </Link>
                          )}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => (
                            <Link to="#">
                              {t("FOOTER.OURS_TREND_PRODUCTS")}
                            </Link>
                          )}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => (
                            <Link to="#">
                              {t("FOOTER.OURS_RECOMMANDATIONS")}
                            </Link>
                          )}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => <Link to="#">{t("FOOTER.FLASH_SALE")}</Link>}
                        </Translation>
                      </li>
                      <li>
                        <Translation>
                          {(t) => (
                            <Link to="#">{t("FOOTER.BECOME_SELLER")}</Link>
                          )}
                        </Translation>
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
          <LoginModal />
        </footer>
      </>
    );
  }
}
