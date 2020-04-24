import React, { Component } from "react";

export default class HeaderCartEmpty extends Component {
  render() {
    return (
      <>
        <div className="text-center">
          <span className="icon-box-icon">
            <i className="icon-shopping-cart"></i>
          </span>
          <div className="icon-box-content">
            <h3 className="icon-box-title">Votre panier est vide</h3>
          </div>
        </div>
      </>
    );
  }
}
