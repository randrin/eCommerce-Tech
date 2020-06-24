import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";
import { MultiLanguages } from "../../index";

export default class Breadcrumb extends Component {
  render() {
    const { title, showMultiLanguages } = this.props;
    return (
      <nav
        aria-label="breadcrumb"
        className={`store-breadcrumb-wrapper breadcrumb-nav border-0 ${showMultiLanguages ? 'mb-0' : 'mb-2'} pt-3`}
      >
        <div className="container p-0">
          <div className="row justify-content-between">
            <div className="col-md-6 col-sm-6 ml-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">
                    <Translation>
                      {(t) => (
                        <span>
                          <i className="fa fa-home store-breadcrumb-icon"></i>
                          {t("HOME.BREADCRUMB")}
                        </span>
                      )}
                    </Translation>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {title}
                </li>
              </ol>
            </div>
            {showMultiLanguages && (
              <>
                <div className="store-multi-languages">
                  <div className="text-right">
                    <MultiLanguages />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    );
  }
}
