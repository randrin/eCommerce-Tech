import React, { Component } from "react";

export default class ProductsByCategoriesList extends Component {
  render() {
    return (
      <div>
        <div className="page-content">
          <div className="categories-page">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="banner banner-cat banner-badge">
                    <a href="#">
                      <img
                        src="assets/images/category/boxed/banner-1.jpg"
                        alt="Banner"
                      />
                    </a>

                    <a className="banner-link" href="#">
                      <h3 className="banner-title">Dresses</h3>
                      <h4 className="banner-subtitle">3 Products</h4>
                      <span className="banner-link-text">Shop Now</span>
                    </a>
                  </div>

                  <div className="banner banner-cat banner-badge">
                    <a href="#">
                      <img
                        src="assets/images/category/boxed/banner-2.jpg"
                        alt="Banner"
                      />
                    </a>

                    <a className="banner-link" href="#">
                      <h3 className="banner-title">Jackets</h3>
                      <h4 className="banner-subtitle">2 Products</h4>
                      <span className="banner-link-text">Shop Now</span>
                    </a>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="banner banner-cat banner-badge">
                        <a href="#">
                          <img
                            src="assets/images/category/boxed/banner-3.jpg"
                            alt="Banner"
                          />
                        </a>

                        <a className="banner-link" href="#">
                          <h3 className="banner-title">T-shirts</h3>
                          <h4 className="banner-subtitle">0 Products</h4>
                          <span className="banner-link-text">Shop Now</span>
                        </a>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="banner banner-cat banner-badge">
                        <a href="#">
                          <img
                            src="assets/images/category/boxed/banner-4.jpg"
                            alt="Banner"
                          />
                        </a>

                        <a className="banner-link" href="#">
                          <h3 className="banner-title">Jeans</h3>
                          <h4 className="banner-subtitle">1 Products</h4>
                          <span className="banner-link-text">Shop Now</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="banner banner-cat banner-badge">
                    <a href="#">
                      <img
                        src="assets/images/category/boxed/banner-5.jpg"
                        alt="Banner"
                      />
                    </a>

                    <a className="banner-link" href="#">
                      <h3 className="banner-title">Bags</h3>
                      <h4 className="banner-subtitle">4 Products</h4>
                      <span className="banner-link-text">Shop Now</span>
                    </a>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="banner banner-cat banner-badge">
                    <a href="#">
                      <img
                        src="assets/images/category/boxed/banner-6.jpg"
                        alt="Banner"
                      />
                    </a>

                    <a className="banner-link" href="#">
                      <h3 className="banner-title">Sportwear</h3>
                      <h4 className="banner-subtitle">0 Products</h4>
                      <span className="banner-link-text">Shop Now</span>
                    </a>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3 order-md-last">
                  <div className="banner banner-cat banner-badge">
                    <a href="#">
                      <img
                        src="assets/images/category/boxed/banner-8.jpg"
                        alt="Banner"
                      />
                    </a>

                    <a className="banner-link" href="#">
                      <h3 className="banner-title">Jumpers</h3>
                      <h4 className="banner-subtitle">1 Products</h4>
                      <span className="banner-link-text">Shop Now</span>
                    </a>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="banner banner-cat banner-badge">
                    <a href="#">
                      <img
                        src="/assets/images/category/boxed/banner-7.jpg"
                        alt="Banner"
                      />
                    </a>

                    <a className="banner-link" href="#">
                      <h3 className="banner-title">Shoes</h3>
                      <h4 className="banner-subtitle">2 Products</h4>
                      <span className="banner-link-text">Shop Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-filter-overlay"></div>
          <aside className="sidebar-shop sidebar-filter sidebar-filter-banner">
            <div className="sidebar-filter-wrapper">
              <div className="widget widget-clean">
                <label>
                  <i className="icon-close"></i>Filters
                </label>
                <a href="#" className="sidebar-filter-clear">
                  Clean All
                </a>
              </div>
              <div className="widget">
                <h3 className="widget-title">Browse Category</h3>

                <div className="widget-body">
                  <div className="filter-items filter-items-count">
                    <div className="filter-item">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="cat-1"
                        />
                        <label className="custom-control-label" for="cat-1">
                          Women
                        </label>
                      </div>
                      <span className="item-count">3</span>
                    </div>

                    <div className="filter-item">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="cat-2"
                        />
                        <label className="custom-control-label" for="cat-2">
                          Men
                        </label>
                      </div>
                      <span className="item-count">0</span>
                    </div>

                    <div className="filter-item">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="cat-3"
                        />
                        <label className="custom-control-label" for="cat-3">
                          Holiday Shop
                        </label>
                      </div>
                      <span className="item-count">0</span>
                    </div>

                    <div className="filter-item">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="cat-4"
                        />
                        <label className="custom-control-label" for="cat-4">
                          Gifts
                        </label>
                      </div>
                      <span className="item-count">0</span>
                    </div>

                    <div className="filter-item">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="cat-5"
                        />
                        <label className="custom-control-label" for="cat-5">
                          Homeware
                        </label>
                      </div>
                      <span className="item-count">0</span>
                    </div>

                    <div className="filter-item">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="cat-6"
                          checked="checked"
                        />
                        <label className="custom-control-label" for="cat-6">
                          Grid Categories Fullwidth
                        </label>
                      </div>
                      <span className="item-count">13</span>
                    </div>

                    <div className="sub-filter-items">
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-7"
                          />
                          <label className="custom-control-label" for="cat-7">
                            Dresses
                          </label>
                        </div>
                        <span className="item-count">3</span>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-8"
                          />
                          <label className="custom-control-label" for="cat-8">
                            T-shirts
                          </label>
                        </div>
                        <span className="item-count">0</span>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-9"
                          />
                          <label className="custom-control-label" for="cat-9">
                            Bags
                          </label>
                        </div>
                        <span className="item-count">4</span>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-10"
                          />
                          <label className="custom-control-label" for="cat-10">
                            Jackets
                          </label>
                        </div>
                        <span className="item-count">2</span>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-11"
                          />
                          <label className="custom-control-label" for="cat-11">
                            Shoes
                          </label>
                        </div>
                        <span className="item-count">2</span>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-12"
                          />
                          <label className="custom-control-label" for="cat-12">
                            Jumpers
                          </label>
                        </div>
                        <span className="item-count">1</span>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-13"
                          />
                          <label className="custom-control-label" for="cat-13">
                            Jeans
                          </label>
                        </div>
                        <span className="item-count">1</span>
                      </div>

                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cat-14"
                          />
                          <label className="custom-control-label" for="cat-14">
                            Sportwear
                          </label>
                        </div>
                        <span className="item-count">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
