import React, { Component } from "react";
import defaultImgStore from "../../../../images/page-header-bg.jpg";

export default class HeroBanner extends Component {
  render() {
    const { img, title, subtitle, children } = this.props;
    return (
      <div
        className="page-header text-center"
        style={{
          backgroundImage: "url(" + `${img}` + ")",
        }}
      >
        <div className="container">
          <h1 className="page-title">
            {title}
            <span>{subtitle}</span>
          </h1>
          {children}
        </div>
      </div>
    );
  }
}

HeroBanner.defaultProps = {
  img: defaultImgStore,
};
