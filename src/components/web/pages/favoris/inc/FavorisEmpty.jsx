import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";
export default class FavorisEmpty extends Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <>
            <div className="container">
              <div className="page-content text-center">
                <h2 className="title">Oufff !!!!</h2>
                <p>{t("WISHLIST.TEXT")}</p>
                <div className="row m-5">
                  <div className="col-md-6">
                    <Link to="/login" class="btn btn-outline-primary-2">
                      <span>{t("LOGIN.BREADCRUMB")}</span>
                      <i class="icon-long-arrow-right"></i>
                    </Link>
                  </div>
                  <div className="col-md-6 store-favoris">
                    <Link to="/register" class="btn btn-primary btn-g">
                      <span>{t("LOGOUT.BREADCRUMB")}</span>
                      <i class="icon-long-arrow-right"></i>
                    </Link>
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
