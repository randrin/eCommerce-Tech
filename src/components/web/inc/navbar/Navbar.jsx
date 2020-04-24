import React, { Component } from "react";
import {
  HeaderTop,
  HeaderMiddle,
  HeaderBottom,
  Annonces,
} from "../../../../components";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="page-wrapper">
          <Annonces />
          <header className="header header-intro-clearance header-4">
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />
          </header>
        </div>
        <button id="scroll-top" title="Back to Top">
          <i className="icon-arrow-up"></i>
        </button>
      </>
    );
  }
}
