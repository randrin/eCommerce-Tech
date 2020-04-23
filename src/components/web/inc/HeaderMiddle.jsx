import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class HeaderMiddle extends Component {
    render() {
        return (
          <div className="header-middle">
            <div className="container">
              <div className="header-left">
                <button className="mobile-menu-toggler">
                  <span className="sr-only">Toggle mobile menu</span>
                  <i className="icon-bars"></i>
                </button>
                <Link to="/" className="logo">
                  <img
                    src="/assets/images/demos/demo-4/logo.png"
                    alt="Molla Logo"
                    width="105"
                    height="25"
                  />
                </Link>
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
                        placeholder="Search product ..."
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
                        <a
                          href="#"
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <i className="icon-close"></i>
                        </a>
                        <h4 className="compare-product-title">
                          <a href="product.html">Blue Night Dress</a>
                        </h4>
                      </li>
                      <li className="compare-product">
                        <a
                          href="#"
                          className="btn-remove"
                          title="Remove Product"
                        >
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
                      <span className="wishlist-count badge">3</span>
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
                      <span className="cart-count">2</span>
                    </div>
                    <p>Cart</p>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-cart-products">
                      <div className="product">
                        <div className="product-cart-details">
                          <h4 className="product-title">
                            <a href="product.html">
                              Beige knitted elastic runner shoes
                            </a>
                          </h4>
                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span>x $84.00
                          </span>
                        </div>
                        <figure className="product-image-container">
                          <a href="product.html" className="product-image">
                            <img
                              src="assets/images/products/cart/product-1.jpg"
                              alt="product"
                            />
                          </a>
                        </figure>
                        <a
                          href="#"
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <i className="icon-close"></i>
                        </a>
                      </div>
                      <div className="product">
                        <div className="product-cart-details">
                          <h4 className="product-title">
                            <a href="product.html">
                              Blue utility pinafore denim dress
                            </a>
                          </h4>
                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span>x $76.00
                          </span>
                        </div>
                        <figure className="product-image-container">
                          <a href="product.html" className="product-image">
                            <img
                              src="assets/images/products/cart/product-2.jpg"
                              alt="product"
                            />
                          </a>
                        </figure>
                        <a
                          href="#"
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <i className="icon-close"></i>
                        </a>
                      </div>
                    </div>
                    <div className="dropdown-cart-total">
                      <span>Total</span>
                      <span className="cart-total-price">$160.00</span>
                    </div>
                    <div className="dropdown-cart-action">
                      <a href="cart.html" className="btn btn-primary">
                        View Cart
                      </a>
                      <a
                        href="checkout.html"
                        className="btn btn-outline-primary-2"
                      >
                        <span>Checkout</span>
                        <i className="icon-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
