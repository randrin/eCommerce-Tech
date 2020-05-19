import React, { Component } from "react";
import { Navbar, Footer, HeroBanner } from "../../../components";
import {
  Breadcrumb,
  ProductsFilter,
  ProductsListFullWidth,
  ProductsList2Cols,
  ProductsList3Cols,
  ProductsList4Cols,
} from "../../../site";
import { Translation } from "react-i18next";
import { Link } from "react-router-dom";

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productType: "full",
    };
    this.handleProductsType = this.handleProductsType.bind(this);
  }

  handleProductsType(type) {
    this.setState({
      productType: type,
    });
  }
  componentDidMount() {}
  render() {
    const { productType } = this.state;
    return (
      <>
        <Navbar />
        <main className="main">
          <HeroBanner title="List" subtitle="Shop" />
          <Breadcrumb title="Products List" />
          <div className="page-content">
            <div className="container">
              <div className="row mt-3">
                <div className="col-lg-9">
                  <div className="toolbox">
                    <div className="toolbox-left">
                      <div className="toolbox-info">
                        Showing <span>9 of 56</span> Products
                      </div>
                    </div>

                    <div className="toolbox-right">
                      <div className="toolbox-sort">
                        <label htmlFor="sortby">Sort by:</label>
                        <div className="select-custom">
                          <select
                            name="sortby"
                            id="sortby"
                            className="form-control"
                          >
                            <option value="popularity" defaultValue="selected">
                              Most Popular
                            </option>
                            <option value="rating">Most Rated</option>
                            <option value="date">Date</option>
                          </select>
                        </div>
                      </div>
                      <div className="toolbox-layout">
                        {/* Products Full List */}
                        <a
                          href="#"
                          onClick={() => this.handleProductsType("full")}
                          className="btn-layout active"
                        >
                          <svg width="16" height="10">
                            <rect x="0" y="0" width="4" height="4" />
                            <rect x="6" y="0" width="10" height="4" />
                            <rect x="0" y="6" width="4" height="4" />
                            <rect x="6" y="6" width="10" height="4" />
                          </svg>
                        </a>
                        {/* Products List 2 cols */}
                        <a
                          href="#"
                          onClick={() => this.handleProductsType("col2")}
                          className="btn-layout col2"
                        >
                          <svg width="10" height="10">
                            <rect x="0" y="0" width="4" height="4" />
                            <rect x="6" y="0" width="4" height="4" />
                            <rect x="0" y="6" width="4" height="4" />
                            <rect x="6" y="6" width="4" height="4" />
                          </svg>
                        </a>
                        {/* Products List 3 cols */}
                        <a
                          href="#"
                          onClick={() => this.handleProductsType("col3")}
                          className="btn-layout"
                        >
                          <svg width="16" height="10">
                            <rect x="0" y="0" width="4" height="4" />
                            <rect x="6" y="0" width="4" height="4" />
                            <rect x="12" y="0" width="4" height="4" />
                            <rect x="0" y="6" width="4" height="4" />
                            <rect x="6" y="6" width="4" height="4" />
                            <rect x="12" y="6" width="4" height="4" />
                          </svg>
                        </a>
                        {/* Products List 4 cols */}
                        <a
                          href="#"
                          onClick={() => this.handleProductsType("col4")}
                          className="btn-layout"
                        >
                          <svg width="22" height="10">
                            <rect x="0" y="0" width="4" height="4" />
                            <rect x="6" y="0" width="4" height="4" />
                            <rect x="12" y="0" width="4" height="4" />
                            <rect x="18" y="0" width="4" height="4" />
                            <rect x="0" y="6" width="4" height="4" />
                            <rect x="6" y="6" width="4" height="4" />
                            <rect x="12" y="6" width="4" height="4" />
                            <rect x="18" y="6" width="4" height="4" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* All Products */}
                  {/* All Products Full Width */}
                  {productType === "full" && <ProductsListFullWidth />}
                  {/* All Products 2 Cols Width */}
                  {productType === "col2" && <ProductsList2Cols />}
                  {/* All Products 3 Cols Width */}
                  {productType === "col3" && <ProductsList3Cols />}
                  {/* All Products 4 Cols With */}
                  {productType === "col4" && <ProductsList4Cols />}

                  {/* Pagination */}
                  <nav aria-label="Page navigation">
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <a
                          className="page-link page-link-prev"
                          href="#"
                          aria-label="Previous"
                          tabIndex="-1"
                          aria-disabled="true"
                        >
                          <span aria-hidden="true">
                            <i className="icon-long-arrow-left"></i>
                          </span>
                          Prev
                        </a>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item-total">of 6</li>
                      <li className="page-item">
                        <a
                          className="page-link page-link-next"
                          href="#"
                          aria-label="Next"
                        >
                          Next{" "}
                          <span aria-hidden="true">
                            <i className="icon-long-arrow-right"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <ProductsFilter />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
