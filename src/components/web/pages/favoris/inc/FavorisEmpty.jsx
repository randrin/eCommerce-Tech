import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";
export default class FavorisEmpty extends Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <>
            <div className="store-favories-wrapper container">
              <div className="page-content text-center">
                <div className="store-favories-sleep">
                  <img
                    src="/assets/images/Favories-sleep.png"
                    alt="Faories Sleep"
                  />
                </div>
                <div className="row">
                  <div className="col-md-8 mr-auto ml-auto">
                    <p>{t("WISHLIST.STEP_1")}</p>
                    <hr />
                    <p>{t("WISHLIST.STEP_2")}</p>
                    <div className="store-favories-steps mt-4">
                      <span className="btn-product-icon btn-wishlist"></span>
                      <span className="mr-5 ml-5">
                        <i className="icon-long-arrow-right"></i>
                      </span>
                      <span className="btn-product-icon btn-wishlist-selected"></span>
                    </div>
                    <p className="mt-3">{t("WISHLIST.STEP_3")}</p>
                  </div>
                </div>

                {/* <p>{t("WISHLIST.TEXT")}</p> */}

                <div className="row justify-content-center mt-5">
                  <div className="col-lg-6 col-sm-6">
                    <div className="icon-box icon-box-circle text-center">
                      <span className="icon-box-icon">
                        <i className="fa fa-smile-o"></i>
                      </span>
                      <div className="icon-box-content">
                        <h3 className="icon-box-title mb-2">
                          {t("WISHLIST.TEXT_ALREADY_USER")}
                        </h3>
                      </div>
                      <Link to="/login" className="btn btn-outline-primary-2">
                        <span>{t("LOGIN.BREADCRUMB")}</span>
                        <i className="icon-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="icon-box icon-box-circle text-center store-favoris">
                      <span className="icon-box-icon">
                        <i className="fa fa-frown-o"></i>
                      </span>
                      <div className="icon-box-content">
                        <h3 className="icon-box-title mb-2">
                          {t("WISHLIST.TEXT_NEW_USER")}
                        </h3>
                      </div>
                      <Link to="/register" className="btn btn-primary btn-g">
                        <span>{t("LOGIN.CREATE_ACCOUNT")}</span>
                        <i className="icon-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Translation>
    );
  }
}
