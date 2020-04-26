import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                    <button className="btn btn-primary" type="submit">
                      <i className="icon-search"></i>
                    </button>
                    <input
                      type="search"
                      className="form-control"
                      name="q"
                      id="q"
                      placeholder="« Que souhaitez-vous? »"
                      required
                    />
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
                  <p>Compare</p>
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
                    <a href="#" className="action-link">
                      Clear All
                    </a>
                    <a href="#" className="btn btn-outline-primary-2">
                      <span>Compare</span>
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
                  <p>Wishlist</p>
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
                  <p>Cart</p>
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
                  <p>{isLogged ? `Bonjour ${username}` : "Mon Compte"}</p>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  {!isLogged && (
                    <>
                      <div className="text-center">
                        <Link
                          to="/login"
                          className="btn btn-outline-primary btn-rounded mb-2"
                        >
                          <span>Identifiez-vous</span>
                          <i className="icon-long-arrow-right"></i>
                        </Link>
                      </div>
                      <span>Nouveau client ? </span>
                      <Link to="/register" className="btn btn-link">
                        <span>Créez votre compte</span>
                        <i className="icon-long-arrow-right"></i>
                      </Link>
                      <hr className="store-separator" />
                    </>
                  )}
                  <ul className="compare-products">
                    {isLogged && (
                      <>
                        <li className="compare-product">
                          <h4 className="compare-product-title">
                            <i className="icon-user"></i>
                            <Link to="/profil">My Account</Link>
                          </h4>
                        </li>
                      </>
                    )}
                    <li className="compare-product">
                      <h4 className="compare-product-title">
                        <i className="icon-close"></i>
                        <a href="product.html">
                          Suivre, Annuller ou retourner une commande
                        </a>
                      </h4>
                    </li>
                    <li className="compare-product">
                      <h4 className="compare-product-title">
                        <i className="icon-close"></i>
                        <a href="product.html">Mes Listes d'envies</a>
                      </h4>
                    </li>
                    <li className="compare-product">
                      <h4 className="compare-product-title">
                        <i className="icon-close"></i>
                        <a href="product.html">Mes Avantages</a>
                      </h4>
                    </li>
                    <li className="compare-product">
                      <h4 className="compare-product-title">
                        <i className="icon-close"></i>
                        <a href="product.html">Mes Préférences</a>
                      </h4>
                    </li>
                  </ul>
                  {isLogged && (
                    <>
                      {" "}
                      <hr />
                      <div className="store-logout">
                        <a
                          href="#logout-modal"
                          data-toggle="modal"
                          className="btn btn-outline-primary-2"
                        >
                          <span>Logout</span>
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
                  <p>Cart</p>
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
