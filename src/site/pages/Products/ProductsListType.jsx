import React, { Component } from "react";
import {
  ProductsListFullWidth,
  ProductsList2Cols,
  ProductsList3Cols,
  ProductsList4Cols,
} from "../../../site";

export default class ProductsListType extends Component {
  render() {
    const { productType } = this.props;
    return (
      <div>
        {/* All Products Full Width */}
        {productType === "full" && <ProductsListFullWidth />}
        {/* All Products 2 Cols Width */}
        {productType === "col2" && <ProductsList2Cols />}
        {/* All Products 3 Cols Width */}
        {productType === "col3" && <ProductsList3Cols />}
        {/* All Products 4 Cols With */}
        {productType === "col4" && <ProductsList4Cols />}
      </div>
    );
  }
}
