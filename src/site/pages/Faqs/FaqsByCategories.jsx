import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, HeroBanner } from "../../../components";
import { Breadcrumb } from "../../index";
import { Translation } from "react-i18next";

export default class FaqsByCategories extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="main">
          <Translation>
            {(t) => (
              <>
                <HeroBanner
                  title={t("FAQS.HEROBANNER_TITLE")}
                  subtitle={t("FAQS.HEROBANNER_SUBTITLE")}
                />
                <Breadcrumb title={<span>{t("FAQS.BREADCRUMB")}</span>} />
                <div className="page-content">
                  <div className="categories-page">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="banner banner-cat banner-badge">
                            <Link to="/faqs/shipping">
                              <img
                                src="assets/images/category/boxed/banner-1.jpg"
                                alt="Banner"
                              />
                              <span className="banner-link">
                                <h3 className="banner-title">
                                  Shipping Information
                                </h3>
                                <h4 className="banner-subtitle">3 Faqs</h4>
                                <span className="banner-link-text">
                                  <span>{t("FAQS.VISIT_BUTTON")}</span>
                                  <i className="icon-long-arrow-right"></i>
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="banner banner-cat banner-badge">
                            <Link to="/faqs/orders">
                              <img
                                src="assets/images/category/boxed/banner-2.jpg"
                                alt="Banner"
                              />
                              <span className="banner-link">
                                <h3 className="banner-title">Orders</h3>
                                <h4 className="banner-subtitle">2 Faqs</h4>
                                <span className="banner-link-text">
                                  <span>{t("FAQS.VISIT_BUTTON")}</span>
                                  <i className="icon-long-arrow-right"></i>
                                </span>
                              </span>
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="banner banner-cat banner-badge">
                                <Link to="/faqs/payments">
                                  <img
                                    src="assets/images/category/boxed/banner-3.jpg"
                                    alt="Banner"
                                  />
                                  <span className="banner-link">
                                    <h3 className="banner-title">Payments</h3>
                                    <h4 className="banner-subtitle">0 Faq</h4>
                                    <span className="banner-link-text">
                                      <span>{t("FAQS.VISIT_BUTTON")}</span>
                                      <i className="icon-long-arrow-right"></i>
                                    </span>
                                  </span>
                                </Link>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="banner banner-cat banner-badge">
                                <Link to="/faqs/account">
                                  <img
                                    src="assets/images/category/boxed/banner-4.jpg"
                                    alt="Banner"
                                  />
                                  <span className="banner-link">
                                    <h3 className="banner-title">My Account</h3>
                                    <h4 className="banner-subtitle">1 Faq</h4>
                                    <span className="banner-link-text">
                                      <span>{t("FAQS.VISIT_BUTTON")}</span>
                                      <i className="icon-long-arrow-right"></i>
                                    </span>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="banner banner-cat banner-badge">
                            <Link to="/faqs/returns">
                              <img
                                src="assets/images/category/boxed/banner-5.jpg"
                                alt="Banner"
                              />
                              <span className="banner-link">
                                <h3 className="banner-title">Return Policy</h3>
                                <h4 className="banner-subtitle">4 Faqs</h4>
                                <span className="banner-link-text">
                                  <span>{t("FAQS.VISIT_BUTTON")}</span>
                                  <i className="icon-long-arrow-right"></i>
                                </span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-filter-overlay"></div>
                  <div className="text-center store-btn-hover my-5">
                    <h2 className="title mb-3">{t("FAQS.ANY_HELP")}</h2>
                    <Link to="/contact" className="btn btn-primary btn-g">
                      <span>{t("CONTACT.BREADCRUMB")}</span>
                      <i className="icon-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </Translation>
        </main>
        <Footer />
      </>
    );
  }
}
