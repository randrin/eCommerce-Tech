import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";

export default class Breadcrumb extends Component {
  render() {
    const { title } = this.props;
    return (
      <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <Translation>
                  {(t) => <span>{t("HOME.BREADCRUMB")}</span>}
                </Translation>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {title}
            </li>
          </ol>
        </div>
      </nav>
    );
  }
}
