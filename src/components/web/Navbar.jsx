import React, { Component } from "react";
import { HeaderTop, HeaderMiddle, HeaderBottom } from "../../components";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="page-wrapper">
          <header className="header header-intro-clearance header-4">
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />
          </header>
        </div>
        <button id="scroll-top" title="Back to Top">
          <i class="icon-arrow-up"></i>
        </button>
      </>
    );
  }
}
