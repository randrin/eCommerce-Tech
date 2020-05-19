import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";
export default class FavorisEmpty extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-content text-center">
          <h2 className="title">Oufff !!!!</h2>
          <Translation>{(t) => <p>{t("WISHLIST.TEXT")}</p>}</Translation>
          <div className="row m-5">
            <div className="col-md-6">
              <Link to="/login" class="btn btn-outline-primary-2">
                <Translation>
                  {(t) => <span>{t("LOGIN.BREADCRUMB")}</span>}
                </Translation>
                <i class="icon-long-arrow-right"></i>
              </Link>
            </div>
            <div className="col-md-6 store-favoris">
              <Link to="/register" class="btn btn-primary btn-g">
                <Translation>
                  {(t) => <span>{t("LOGOUT.BREADCRUMB")}</span>}
                </Translation>
                <i class="icon-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
