import React, { Component } from "react";
import { Translation } from "react-i18next";
export default class Recommandations extends Component {
  render() {
    return (
      <>
        <div className="container for-you">
          <div className="heading heading-flex mb-3">
            <div className="heading-left">
              <Translation>
                {(t) => <h2 className="title">{t("RECOMMENDATIONS.TITLE")}</h2>}
              </Translation>
            </div>
            <div className="heading-right">
              <Translation>
                {(t) => (
                  <a href="#" className="title-link">
                    {t("RECOMMENDATIONS.LINK")}
                    <i className="icon-long-arrow-right"></i>
                  </a>
                )}
              </Translation>
            </div>
          </div>

          <div className="products">
            <div className="row justify-content-center">
              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-2">
                  <figure className="product-media">
                    <Translation>
                      {(t) => (
                        <span className="product-label label-circle label-sale">
                          {t("PRODUCTS.LABEL_SALE")}
                        </span>
                      )}
                    </Translation>
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-4/products/product-10.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                    </a>
                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist"
                        title="Add to wishlist"
                      ></a>
                    </div>
                    <div className="product-action">
                      <a
                        href="#"
                        className="btn-product btn-cart"
                        title="Add to cart"
                      >
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.ADD_CART")}</span>}
                        </Translation>
                      </a>
                      <a
                        href="popup/quickView.html"
                        className="btn-product btn-quickview"
                        title="Quick view"
                      >
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.QUICK_VIEW")}</span>}
                        </Translation>
                      </a>
                    </div>
                  </figure>
                  <div className="product-body">
                    <div className="product-cat">
                      <a href="#">Headphones</a>
                    </div>
                    <h3 className="product-title">
                      <a href="product.html">
                        Beats by Dr. Dre Wireless Headphones
                      </a>
                    </h3>
                    <div className="product-price">
                      <span className="new-price">$279.99</span>
                      <span className="old-price">Was $349.99</span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">
                        ( 4{" "}
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.REVIEWS")}</span>}
                        </Translation>
                        )
                      </span>
                    </div>
                    <div className="product-nav product-nav-dots">
                      <a
                        href="#"
                        className="active"
                        style={{ background: "#666666" }}
                      >
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#ff887f" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#6699cc" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#f3dbc1" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#eaeaec" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-2">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-4/products/product-11.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                    </a>
                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist"
                        title="Add to wishlist"
                      ></a>
                    </div>
                    <div className="product-action">
                      <a
                        href="#"
                        className="btn-product btn-cart"
                        title="Add to cart"
                      >
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.ADD_CART")}</span>}
                        </Translation>
                      </a>
                      <a
                        href="popup/quickView.html"
                        className="btn-product btn-quickview"
                        title="Quick view"
                      >
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.QUICK_VIEW")}</span>}
                        </Translation>
                      </a>
                    </div>
                  </figure>

                  <div className="product-body">
                    <div className="product-cat">
                      <a href="#">Cameras & Camcorders</a>
                    </div>
                    <h3 className="product-title">
                      <a href="product.html">
                        GoPro - HERO7 Black HD Waterproof Action
                      </a>
                    </h3>
                    <div className="product-price">$349.99</div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">
                        ( 2{" "}
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.REVIEWS")}</span>}
                        </Translation>{" "}
                        )
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-2">
                  <figure className="product-media">
                    <Translation>
                      {(t) => (
                        <span className="product-label label-circle label-new">
                          {t("PRODUCTS.LABEL_NEW")}
                        </span>
                      )}
                    </Translation>
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-4/products/product-12.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                      <img
                        src="assets/images/demos/demo-4/products/product-12-2.jpg"
                        alt="Product image"
                        className="product-image-hover"
                      />
                    </a>
                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist"
                        title="Add to wishlist"
                      ></a>
                    </div>
                    <div className="product-action">
                      <a
                        href="#"
                        className="btn-product btn-cart"
                        title="Add to cart"
                      >
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.ADD_CART")}</span>}
                        </Translation>
                      </a>
                      <a
                        href="popup/quickView.html"
                        className="btn-product btn-quickview"
                        title="Quick view"
                      >
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.QUICK_VIEW")}</span>}
                        </Translation>
                      </a>
                    </div>
                  </figure>
                  <div className="product-body">
                    <div className="product-cat">
                      <a href="#">Smartwatches</a>
                    </div>
                    <h3 className="product-title">
                      <a href="product.html">
                        Apple - Apple Watch Series 3 with White Sport Band
                      </a>
                    </h3>
                    <div className="product-price">$214.49</div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">
                        ( 0{" "}
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.REVIEWS")}</span>}
                        </Translation>{" "}
                        )
                      </span>
                    </div>
                    <div className="product-nav product-nav-dots">
                      <a
                        href="#"
                        className="active"
                        style={{ background: "#e2e2e2" }}
                      >
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#333333" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#f2bc9e" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-2">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-4/products/product-13.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                    </a>
                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist"
                        title="Add to wishlist"
                      ></a>
                    </div>
                    <div className="product-action">
                      <a
                        href="#"
                        className="btn-product btn-cart"
                        title="Add to cart"
                      >
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.ADD_CART")}</span>}
                        </Translation>
                      </a>
                      <a
                        href="popup/quickView.html"
                        className="btn-product btn-quickview"
                        title="Quick view"
                      >
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.QUICK_VIEW")}</span>}
                        </Translation>
                      </a>
                    </div>
                  </figure>
                  <div className="product-body">
                    <div className="product-cat">
                      <a href="#">Laptops</a>
                    </div>
                    <h3 className="product-title">
                      <a href="product.html">Lenovo - 330-15IKBR 15.6"</a>
                    </h3>
                    <div className="product-price">
                      <span className="out-price">$339.99</span>
                      <span className="out-text">Out Of Stock</span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">
                        ( 11{" "}
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.REVIEWS")}</span>}
                        </Translation>{" "}
                        )
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-2">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-4/products/product-14.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                    </a>
                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist"
                        title="Add to wishlist"
                      ></a>
                    </div>
                    <div className="product-action">
                      <a
                        href="#"
                        className="btn-product btn-cart"
                        title="Add to cart"
                      >
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.ADD_CART")}</span>}
                        </Translation>
                      </a>
                      <a
                        href="popup/quickView.html"
                        className="btn-product btn-quickview"
                        title="Quick view"
                      >
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.QUICK_VIEW")}</span>}
                        </Translation>
                      </a>
                    </div>
                  </figure>
                  <div className="product-body">
                    <div className="product-cat">
                      <a href="#">Digital Cameras</a>
                    </div>
                    <h3 className="product-title">
                      <a href="product.html">
                        Sony - Alpha a5100 Mirrorless Camera
                      </a>
                    </h3>
                    <div className="product-price">$499.99</div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">
                        ( 11{" "}
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.REVIEWS")}</span>}
                        </Translation>{" "}
                        )
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-2">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-4/products/product-15.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                    </a>
                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist"
                        title="Add to wishlist"
                      ></a>
                    </div>
                    <div className="product-action">
                      <a
                        href="#"
                        className="btn-product btn-cart"
                        title="Add to cart"
                      >
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.ADD_CART")}</span>}
                        </Translation>
                      </a>
                      <a
                        href="popup/quickView.html"
                        className="btn-product btn-quickview"
                        title="Quick view"
                      >
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.QUICK_VIEW")}</span>}
                        </Translation>
                      </a>
                    </div>
                  </figure>
                  <div className="product-body">
                    <div className="product-cat">
                      <a href="#">Laptops</a>
                    </div>
                    <h3 className="product-title">
                      <a href="product.html">
                        Home Mini - Smart Speaker with Google Assistant
                      </a>
                    </h3>
                    <div className="product-price">$49.00</div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">
                        ( 24{" "}
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.REVIEWS")}</span>}
                        </Translation>{" "}
                        )
                      </span>
                    </div>
                    <div className="product-nav product-nav-dots">
                      <a
                        href="#"
                        className="active"
                        style={{ background: "#ef837b" }}
                      >
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#333333" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#e2e2e2" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-2">
                  <figure className="product-media">
                    <Translation>
                      {(t) => (
                        <span className="product-label label-circle label-sale">
                          {t("PRODUCTS.LABEL_SALE")}
                        </span>
                      )}
                    </Translation>
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-4/products/product-16.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                    </a>
                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist"
                        title="Add to wishlist"
                      ></a>
                    </div>
                    <div className="product-action">
                      <a
                        href="#"
                        className="btn-product btn-cart"
                        title="Add to cart"
                      >
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.ADD_CART")}</span>}
                        </Translation>
                      </a>
                      <a
                        href="popup/quickView.html"
                        className="btn-product btn-quickview"
                        title="Quick view"
                      >
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.QUICK_VIEW")}</span>}
                        </Translation>
                      </a>
                    </div>
                  </figure>
                  <div className="product-body">
                    <div className="product-cat">
                      <a href="#">Audio</a>
                    </div>
                    <h3 className="product-title">
                      <a href="product.html">
                        WONDERBOOM Portable Bluetooth Speaker
                      </a>
                    </h3>
                    <div className="product-price">
                      <span className="new-price">$99.99</span>
                      <span className="old-price">Was $129.99</span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">
                        ( 4{" "}
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.REVIEWS")}</span>}
                        </Translation>{" "}
                        )
                      </span>
                    </div>
                    <div className="product-nav product-nav-dots">
                      <a
                        href="#"
                        className="active"
                        style={{ background: "#666666" }}
                      >
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#ff887f" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#6699cc" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#f3dbc1" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                      <a href="#" style={{ background: "#eaeaec" }}>
                        <span className="sr-only">Color name</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-2">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-4/products/product-17.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                    </a>
                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist"
                        title="Add to wishlist"
                      ></a>
                    </div>
                    <div className="product-action">
                      <a
                        href="#"
                        className="btn-product btn-cart"
                        title="Add to cart"
                      >
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.ADD_CART")}</span>}
                        </Translation>
                      </a>
                      <a
                        href="popup/quickView.html"
                        className="btn-product btn-quickview"
                        title="Quick view"
                      >
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.QUICK_VIEW")}</span>}
                        </Translation>
                      </a>
                    </div>
                  </figure>
                  <div className="product-body">
                    <div className="product-cat">
                      <a href="#">Smart Home</a>
                    </div>
                    <h3 className="product-title">
                      <a href="product.html">
                        Google - Home Hub with Google Assistant
                      </a>
                    </h3>
                    <div className="product-price">$149.00</div>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <span className="ratings-text">
                        ( 2{" "}
                        <Translation>
                          {(t) => <span>{t("PRODUCTS.REVIEWS")}</span>}
                        </Translation>{" "}
                        )
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4"></div>
      </>
    );
  }
}
