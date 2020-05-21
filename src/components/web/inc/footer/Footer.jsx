import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";
import { LoginModal } from "../../../../components";

export default class Footer extends Component {
  render() {
    return (
      <Translation>
        {(t) => (
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
                            <Link to="#">{t("FOOTER.TERMS_CONDITIONS")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("FOOTER.PRIVACY_POLICY")}</Link>
                          </li>
                          {/* <li>
                            <Link to="#">{t("FOOTER.LEGAL_NOTICE")}</Link>
                            </li> */}
                          <li>
                            <Link to="#">{t("FOOTER.COOKIES")}</Link>
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
                        <span>{t("FOOTER.CALL_HELP")}</span>
                        <a href="tel:#">+0123 456 789</a>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row store-footer">
                    <div className="col-sm-6 col-lg-3">
                      <div className="widget">
                        <h4 className="widget-title">
                          {t("FOOTER.OUR_STORY")}
                        </h4>
                        <ul className="widget-list">
                          <li>
                            <Link to="/about">{t("FOOTER.ABOUT")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("FOOTER.CAREERS_AT")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("FOOTER.OURS_SERVICES")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("FOOTER.OURS_PARTNERS")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("FOOTER.OURS_NEWS")}</Link>
                          </li>
                          <li>
                            <Link to="/blogs">{t("FOOTER.OUR_BLOG")}</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="widget">
                        <h4 className="widget-title">
                          {t("FOOTER.MY_ACCOUNT")}
                        </h4>
                        <ul className="widget-list">
                          <li>
                            <a href="#signin-modal" data-toggle="modal">
                              {t("HEADER-TOP.SIGN_IN_UP")}
                            </a>
                          </li>
                          <li>
                            <Link to="#">{t("FOOTER.CREATE_ACCOUNT")}</Link>
                          </li>
                          <li>
                            <Link to="/cart">{t("HEADER-MIDDLE.CART")}</Link>
                          </li>
                          <li>
                            <Link to="/favoris">
                              {t("HEADER-MIDDLE.MY_WISHLIST")}
                            </Link>
                          </li>
                          <li>
                            <Link to="#">{t("FOOTER.TRACK_ORDER")}</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="widget">
                        <h4 className="widget-title">
                          {t("FOOTER.SERVICES_CLIENT")}
                        </h4>
                        <ul className="widget-list">
                          <li>
                            <Link to="#">{t("FOOTER.HOW_TO_BUY")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("FOOTER.OURS_PAIMENTS")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("FOOTER.INFOS_DELIVERY")}</Link>
                          </li>
                          <li>
                            <Link to="/faqs">{t("FOOTER.OURS_FAQS")}</Link>
                          </li>
                          <li>
                            <Link to="/contact">{t("CONTACT.BREADCRUMB")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("FOOTER.ANY_HELP")}</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="widget">
                        <h4 className="widget-title">{t("FOOTER.OUR_SHOP")}</h4>

                        <ul className="widget-list">
                          <li>
                            <Link to="#">{t("FOOTER.OURS_OFFERS")}</Link>
                          </li>
                          <li>
                            <Link to="#">
                              {t("FOOTER.OURS_NEWS_PROMOTIONS")}
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {t("FOOTER.OURS_TREND_PRODUCTS")}
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              {t("FOOTER.OURS_RECOMMANDATIONS")}
                            </Link>
                          </li>
                          <li>
                            <Link to="#">{t("FOOTER.FLASH_SALE")}</Link>
                          </li>
                          <li>
                            <Link to="#">{t("FOOTER.BECOME_SELLER")}</Link>
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
                    Copyright © 2019 Molla Store.
                    <span>{t("FOOTER.COPYRIGHT")}</span>
                  </p>
                  <figure className="footer-payments">
                    <p className="text-right mb-1">
                      {t("FOOTER.PAIMENT_METHOD")}
                    </p>

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
        )}
      </Translation>
    );
  }
}
