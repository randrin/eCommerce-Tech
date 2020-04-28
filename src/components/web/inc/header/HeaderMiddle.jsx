import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";
import {
  HeaderProductsCart,
  HeaderCartEmpty,
  LogoutModal,
} from "../../../../components";
export default class HeaderMiddle extends Component {
  render() {
    const { username, email, isLogged } = this.props;
    return (
      <>
        <div className="header-middle">
          <div className="container">
            <div className="header-left">
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars"></i>
              </button>
              <Link to="/" className="logo">
                <img
                  src="/assets/images/shopping.png"
                  alt="Molla Logo"
                  width="105"
                  height="25"
                />
              </Link>
              <div className="store-logo-container">
                <span className="store-logo-flag-green"></span>
                <span className="store-logo-flag-red"></span>
                <span className="store-logo-flag-yellow"></span>
              </div>
            </div>
            <div className="header-center">
              <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                <a href="#" className="search-toggle" role="button">
                  <i className="icon-search"></i>
                </a>
                <form action="#" method="get">
                  <div className="header-search-wrapper search-wrapper-wide">
                    <label htmlFor="q" className="sr-only">
                      Search
                    </label>
                    <input
                      type="search"
                      className="form-control store-form-control"
                      name="q"
                      id="q"
                      placeholder="« Que souhaitez-vous? »"
                      required
                    />
                    <button
                      className="btn btn-primary store-search"
                      type="submit"
                    >
                      <i className="icon-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="header-right">
              <div className="dropdown compare-dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                  title="Compare Products"
                  aria-label="Compare Products"
                >
                  <div className="icon">
                    <i className="icon-random"></i>
                  </div>
                  <Translation>
                    {(t) => <p>{t("HEADER-MIDDLE.COMPARATOR")}</p>}
                  </Translation>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="compare-products">
                    <li className="compare-product">
                      <a href="#" className="btn-remove" title="Remove Product">
                        <i className="icon-close"></i>
                      </a>
                      <h4 className="compare-product-title">
                        <a href="product.html">Blue Night Dress</a>
                      </h4>
                    </li>
                    <li className="compare-product">
                      <a href="#" className="btn-remove" title="Remove Product">
                        <i className="icon-close"></i>
                      </a>
                      <h4 className="compare-product-title">
                        <a href="product.html">White Long Skirt</a>
                      </h4>
                    </li>
                  </ul>
                  <div className="compare-actions">
                    <Translation>
                      {(t) => (
                        <a href="#" className="action-link">
                          {t("HEADER-MIDDLE.CLEAR_ALL")}
                        </a>
                      )}
                    </Translation>
                    <a href="#" className="btn btn-outline-primary-2">
                      <Translation>
                        {(t) => <span>{t("HEADER-MIDDLE.COMPARE")}</span>}
                      </Translation>
                      <i className="icon-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="wishlist">
                <Link to="/favoris" title="Wishlist">
                  <div className="icon">
                    <i className="icon-heart-o"></i>
                    <span className="wishlist-count badge">
                      {isLogged ? 3 : 0}
                    </span>
                  </div>
                  <Translation>
                    {(t) => <p>{t("HEADER-MIDDLE.WISHLIST")}</p>}
                  </Translation>
                </Link>
              </div>
              <div className="dropdown cart-dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                >
                  <div className="icon">
                    <i className="icon-shopping-cart"></i>
                    <span className="cart-count">{isLogged ? 2 : 0}</span>
                  </div>
                  <Translation>
                    {(t) => <p>{t("HEADER-MIDDLE.CART")}</p>}
                  </Translation>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  {isLogged ? <HeaderProductsCart /> : <HeaderCartEmpty />}
                </div>
              </div>
            </div>
            <div className="header-right header-right-scroll">
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
                            {(t) => (
                              <span>{t("HEADER-MIDDLE.USER_IDENTIFY")}</span>
                            )}
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
                            {(t) => (
                              <span>{t("HEADER-MIDDLE.CREATE_ACCOUNT")}</span>
                            )}
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
                            <Link to="/">
                              {t("HEADER-MIDDLE.SHIPPING_ORDERS")}
                            </Link>
                          )}
                        </Translation>
                      </h4>
                    </li>
                    <li className="compare-product">
                      <h4 className="compare-product-title">
                        <i className="icon-heart-o store-icon-padding-right"></i>
                        <Translation>
                          {(t) => (
                            <Link to="/">{t("HEADER-MIDDLE.MY_WISHLIST")}</Link>
                          )}
                        </Translation>
                      </h4>
                    </li>
                    <li className="compare-product">
                      <h4 className="compare-product-title">
                        <i className="icon-tags store-icon-padding-right"></i>
                        <Translation>
                          {(t) => (
                            <Link to="/">
                              {t("HEADER-MIDDLE.MY_ADVANTAGES")}
                            </Link>
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
              <div className="dropdown cart-dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                  aria-label="My Cart"
                >
                  <div className="icon">
                    <i className="icon-shopping-cart"></i>
                    <span className="cart-count">{isLogged ? 2 : 0}</span>
                  </div>
                  <Translation>
                    {(t) => <p>{t("HEADER-MIDDLE.CART")}</p>}
                  </Translation>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  {isLogged ? <HeaderProductsCart /> : <HeaderCartEmpty />}
                </div>
              </div>
            </div>
          </div>
        </div>
        <LogoutModal />
      </>
    );
  }
}
