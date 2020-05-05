import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";

export default class HeaderMyAccount extends Component {
  render() {
    const { username, email, isLogged } = this.props;
    return (
      <div className="dropdown compare-dropdown">
        <a
          href="#"
          className="dropdown-toggle"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-display="static"
          aria-label="My Profile"
        >
          <div className="icon">
            <i className="icon-user"></i>
          </div>
          <p>
            {isLogged ? (
              <Translation>
                {(t) => (
                  <span>
                    {t("HEADER-TOP.MORNING")} {username}
                  </span>
                )}
              </Translation>
            ) : (
              <Translation>
                {(t) => <span>{t("HEADER-MIDDLE.MY_ACCOUNT")}</span>}
              </Translation>
            )}
          </p>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          {!isLogged && (
            <>
              <div className="text-center store-btn">
                <Link
                  to="/login"
                  className="btn btn-primary store-full-width btn-g btn-rounded mb-2"
                >
                  <Translation>
                    {(t) => <span>{t("HEADER-MIDDLE.USER_IDENTIFY")}</span>}
                  </Translation>
                  <i className="icon-long-arrow-right"></i>
                </Link>
              </div>
              <div className="text-center">
                <Translation>
                  {(t) => <span>{t("HEADER-MIDDLE.NEW_USER")}</span>}
                </Translation>
                <Link to="/register" className="btn btn-link">
                  <Translation>
                    {(t) => <span>{t("HEADER-MIDDLE.CREATE_ACCOUNT")}</span>}
                  </Translation>
                  <i className="icon-long-arrow-right"></i>
                </Link>
              </div>
              <hr className="store-separator" />
            </>
          )}
          <ul className="compare-products">
            {isLogged && (
              <>
                <li className="compare-product">
                  <h4 className="compare-product-title">
                    <i className="icon-user store-icon-padding-right"></i>
                    <Translation>
                      {(t) => (
                        <Link to="/profil">
                          {t("HEADER-MIDDLE.MY_ACCOUNT")}
                        </Link>
                      )}
                    </Translation>
                  </h4>
                </li>
              </>
            )}
            <li className="compare-product">
              <h4 className="compare-product-title">
                <i className="icon-gift store-icon-padding-right"></i>
                <Translation>
                  {(t) => (
                    <Link to="/">{t("HEADER-MIDDLE.SHIPPING_ORDERS")}</Link>
                  )}
                </Translation>
              </h4>
            </li>
            <li className="compare-product">
              <h4 className="compare-product-title">
                <i className="icon-heart-o store-icon-padding-right"></i>
                <Translation>
                  {(t) => <Link to="/">{t("HEADER-MIDDLE.MY_WISHLIST")}</Link>}
                </Translation>
              </h4>
            </li>
            <li className="compare-product">
              <h4 className="compare-product-title">
                <i className="icon-tags store-icon-padding-right"></i>
                <Translation>
                  {(t) => (
                    <Link to="/">{t("HEADER-MIDDLE.MY_ADVANTAGES")}</Link>
                  )}
                </Translation>
              </h4>
            </li>
            {/* <li className="compare-product">
                      <h4 className="compare-product-title">
                        <i className="icon-envelope store-icon-padding-right"></i>
                        <Link to="/">Mes Préférences</Link>
                      </h4>
                    </li> */}
          </ul>
          {isLogged && (
            <>
              {" "}
              <hr />
              <div className="store-logout">
                <a
                  href="#logout-modal"
                  data-toggle="modal"
                  className="btn btn-primary btn-g"
                >
                  <Translation>
                    {(t) => <span>{t("HEADER-MIDDLE.LOGOUT")}</span>}
                  </Translation>
                  <i className="icon-long-arrow-right"></i>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}
