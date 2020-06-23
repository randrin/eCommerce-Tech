import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";
import {
  HeaderProductsCart,
  HeaderCartEmpty,
  LogoutModal,
  HeaderMyAccount,
} from "../../../../components";
import { CategoriesHeaderList } from "../../../index";
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
              <div className="row">
                <div className="col-2 store-display-none">
                  <div className="dropdown category-dropdown store-display-none">
                    <a
                      href="#"
                      className="dropdown-toggle store-dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-display="static"
                      title="Browse Categories"
                    >
                      <span></span>
                    </a>
                    <CategoriesHeaderList />
                  </div>
                </div>
                <div className="col-8 store-logo">
                  <Link to="/" className="logo">
                    <img
                      src="/assets/images/logo-footer.png"
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
              {/* Comparateur de prix */}
              {/* <div className="dropdown compare-dropdown">
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
              </div> */}
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
              <HeaderMyAccount isLogged={isLogged} username={username} />
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
              <HeaderMyAccount isLogged={isLogged} username={username} />
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
