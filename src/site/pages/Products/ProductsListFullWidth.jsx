import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductsListFullWidth extends Component {
  render() {
    return (
      <div className="products mb-3">
        <div className="product product-list">
          <div className="row">
            <div className="col-6 col-lg-3">
              <figure className="product-media">
                <span className="product-label label-new">New</span>
                <Link to="/product/1">
                  <img
                    src="assets/images/products/product-4.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </Link>
              </figure>
            </div>

            <div className="col-6 col-lg-3 order-lg-last">
              <div className="product-list-action">
                <div className="product-price">$60.00</div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: "20%" }}></div>
                  </div>
                  <span className="ratings-text">( 2 Reviews )</span>
                </div>

                <div className="product-action">
                  <a
                    href="popup/quickView.html"
                    className="btn-product btn-quickview"
                    title="Quick view"
                  >
                    <span>quick view</span>
                  </a>
                  <a
                    href="#"
                    className="btn-product btn-compare"
                    title="Compare"
                  >
                    <span>compare</span>
                  </a>
                </div>

                <a href="#" className="btn-product btn-cart mb-2">
                  <span>add to cart</span>
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="product-body product-action-inner">
                <a
                  href="#"
                  className="btn-product btn-wishlist"
                  title="Add to wishlist"
                >
                  <span>add to wishlist</span>
                </a>
                <div className="product-cat">
                  <a href="#">Women</a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">Brown paperbag waist pencil skirt</a>
                </h3>

                <div className="product-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque{" "}
                  </p>
                </div>

                <div className="product-nav product-nav-thumbs">
                  <a href="#" className="active">
                    <img
                      src="assets/images/products/product-4-thumb.jpg"
                      alt="product desc"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/products/product-4-2-thumb.jpg"
                      alt="product desc"
                    />
                  </a>

                  <a href="#">
                    <img
                      src="assets/images/products/product-4-3-thumb.jpg"
                      alt="product desc"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product product-list">
          <div className="row">
            <div className="col-6 col-lg-3">
              <figure className="product-media">
                <a href="product.html">
                  <img
                    src="assets/images/products/product-5.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
              </figure>
            </div>

            <div className="col-6 col-lg-3 order-lg-last">
              <div className="product-list-action">
                <div className="product-price">$84.00</div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: "0%" }}></div>
                  </div>
                  <span className="ratings-text">( 0 Reviews )</span>
                </div>

                <div className="product-action">
                  <a
                    href="popup/quickView.html"
                    className="btn-product btn-quickview"
                    title="Quick view"
                  >
                    <span>quick view</span>
                  </a>
                  <a
                    href="#"
                    className="btn-product btn-compare"
                    title="Compare"
                  >
                    <span>compare</span>
                  </a>
                </div>

                <a href="#" className="btn-product btn-cart mb-2">
                  <span>add to cart</span>
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="product-body product-action-inner">
                <a
                  href="#"
                  className="btn-product btn-wishlist"
                  title="Add to wishlist"
                >
                  <span>add to wishlist</span>
                </a>
                <div className="product-cat">
                  <a href="#">Dresses</a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">
                    Dark yellow lace cut out swing dress
                  </a>
                </h3>

                <div className="product-content">
                  <p>
                    Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
                    vel, dapibus id, mattis vel, nisi.{" "}
                  </p>
                </div>

                <div className="product-nav product-nav-thumbs">
                  <a href="#" className="active">
                    <img
                      src="assets/images/products/product-5-thumb.jpg"
                      alt="product desc"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/products/product-5-2-thumb.jpg"
                      alt="product desc"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product product-list">
          <div className="row">
            <div className="col-6 col-lg-3">
              <figure className="product-media">
                <span className="product-label label-out">Out of Stock</span>
                <a href="product.html">
                  <img
                    src="assets/images/products/product-6.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
              </figure>
            </div>

            <div className="col-6 col-lg-3 order-lg-last">
              <div className="product-list-action">
                <div className="product-price">
                  <span className="out-price">$120.00</span>
                </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: "80%" }}></div>
                  </div>
                  <span className="ratings-text">( 6 Reviews )</span>
                </div>

                <div className="product-action">
                  <a
                    href="popup/quickView.html"
                    className="btn-product btn-quickview"
                    title="Quick view"
                  >
                    <span>quick view</span>
                  </a>
                  <a
                    href="#"
                    className="btn-product btn-compare"
                    title="Compare"
                  >
                    <span>compare</span>
                  </a>
                </div>

                <a href="#" className="btn-product btn-cart mb-2 disabled">
                  <span>add to cart</span>
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="product-body product-action-inner">
                <a
                  href="#"
                  className="btn-product btn-wishlist"
                  title="Add to wishlist"
                >
                  <span>add to wishlist</span>
                </a>
                <div className="product-cat">
                  <a href="#">Jackets</a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">Khaki utility boiler jumpsuit</a>
                </h3>

                <div className="product-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product product-list">
          <div className="row">
            <div className="col-6 col-lg-3">
              <figure className="product-media">
                <a href="product.html">
                  <img
                    src="assets/images/products/product-7.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
              </figure>
            </div>

            <div className="col-6 col-lg-3 order-lg-last">
              <div className="product-list-action">
                <div className="product-price">$76.00</div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: "20%" }}></div>
                  </div>
                  <span className="ratings-text">( 2 Reviews )</span>
                </div>

                <div className="product-action">
                  <a
                    href="popup/quickView.html"
                    className="btn-product btn-quickview"
                    title="Quick view"
                  >
                    <span>quick view</span>
                  </a>
                  <a
                    href="#"
                    className="btn-product btn-compare"
                    title="Compare"
                  >
                    <span>compare</span>
                  </a>
                </div>

                <a href="#" className="btn-product btn-cart mb-2">
                  <span>add to cart</span>
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="product-body product-action-inner">
                <a
                  href="#"
                  className="btn-product btn-wishlist"
                  title="Add to wishlist"
                >
                  <span>add to wishlist</span>
                </a>
                <div className="product-cat">
                  <a href="#">Jeans</a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">Blue utility pinafore denim dress</a>
                </h3>

                <div className="product-content">
                  <p>
                    Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
                    vel, dapibus id, mattis vel, nisi.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product product-list">
          <div className="row">
            <div className="col-6 col-lg-3">
              <figure className="product-media">
                <span className="product-label label-new">New</span>
                <a href="product.html">
                  <img
                    src="assets/images/products/product-8.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
              </figure>
            </div>

            <div className="col-6 col-lg-3 order-lg-last">
              <div className="product-list-action">
                <div className="product-price">$84.00</div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: "0%" }}></div>
                  </div>
                  <span className="ratings-text">( 0 Reviews )</span>
                </div>

                <div className="product-action">
                  <a
                    href="popup/quickView.html"
                    className="btn-product btn-quickview"
                    title="Quick view"
                  >
                    <span>quick view</span>
                  </a>
                  <a
                    href="#"
                    className="btn-product btn-compare"
                    title="Compare"
                  >
                    <span>compare</span>
                  </a>
                </div>

                <a href="#" className="btn-product btn-cart mb-2">
                  <span>add to cart</span>
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="product-body product-action-inner">
                <a
                  href="#"
                  className="btn-product btn-wishlist"
                  title="Add to wishlist"
                >
                  <span>add to wishlist</span>
                </a>
                <div className="product-cat">
                  <a href="#">Shoes</a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">Beige knitted elastic runner shoes</a>
                </h3>

                <div className="product-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque{" "}
                  </p>
                </div>

                <div className="product-nav product-nav-thumbs">
                  <a href="#" className="active">
                    <img
                      src="assets/images/products/product-8-thumb.jpg"
                      alt="product desc"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/products/product-8-2-thumb.jpg"
                      alt="product desc"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product product-list">
          <div className="row">
            <div className="col-6 col-lg-3">
              <figure className="product-media">
                <a href="product.html">
                  <img
                    src="assets/images/products/product-9.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                </a>
              </figure>
            </div>

            <div className="col-6 col-lg-3 order-lg-last">
              <div className="product-list-action">
                <div className="product-price">$52.00</div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: "80%" }}></div>
                  </div>
                  <span className="ratings-text">( 1 Reviews )</span>
                </div>

                <div className="product-action">
                  <a
                    href="popup/quickView.html"
                    className="btn-product btn-quickview"
                    title="Quick view"
                  >
                    <span>quick view</span>
                  </a>
                  <a
                    href="#"
                    className="btn-product btn-compare"
                    title="Compare"
                  >
                    <span>compare</span>
                  </a>
                </div>

                <a href="#" className="btn-product btn-cart mb-2">
                  <span>add to cart</span>
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="product-body product-action-inner">
                <a
                  href="#"
                  className="btn-product btn-wishlist"
                  title="Add to wishlist"
                >
                  <span>add to wishlist</span>
                </a>
                <div className="product-cat">
                  <a href="#">Bags</a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">
                    Orange saddle lock front chain cross body bag
                  </a>
                </h3>

                <div className="product-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque{" "}
                  </p>
                </div>

                <div className="product-nav product-nav-thumbs">
                  <a href="#" className="active">
                    <img
                      src="assets/images/products/product-9-thumb.jpg"
                      alt="product desc"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/products/product-9-2-thumb.jpg"
                      alt="product desc"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/products/product-9-3-thumb.jpg"
                      alt="product desc"
                    />
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
