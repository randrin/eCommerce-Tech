import React, { Component } from "react";
import { Translation } from "react-i18next";
export default class extends Component {
  render() {
    return (
      <>
        <div
          className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light"
          data-toggle="owl"
          data-owl-options='{
                        "dots": true,
                        "nav": false, 
                        "responsive": {
                            "1200": {
                                "nav": true,
                                "dots": false
                            }
                        }
                    }'
        >
          <div
            className="intro-slide"
            style={{
              backgroundImage:
                "url(" + "assets/images/demos/demo-4/slider/slide-1.png" + ")",
            }}
          >
            <div className="container intro-content">
              <div className="row justify-content-end">
                <div className="col-auto col-sm-7 store-btn-hover col-md-6 col-lg-5">
                  <Translation>
                    {(t) => (
                      <h3 className="intro-subtitle text-third">
                        {t("DEALS.PROMOTIONS")}
                      </h3>
                    )}
                  </Translation>
                  <h1 className="intro-title">Beats by</h1>
                  <h1 className="intro-title">Dre Studio 3</h1>
                  <div className="intro-price">
                    <sup className="intro-old-price">$349,95</sup>
                    <span className="text-third">
                      $279<sup>.99</sup>
                    </span>
                  </div>
                  <a
                    href="category.html"
                    className="btn btn-primary btn-g btn-round"
                  >
                    <Translation>
                      {(t) => <span>{t("BUTTONS.SHOW_MORE")}</span>}
                    </Translation>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="intro-slide"
            style={{
              backgroundImage:
                "url(" + "assets/images/demos/demo-4/slider/slide-2.png" + ")",
            }}
          >
            <div className="container intro-content">
              <div className="row justify-content-end">
                <div className="col-auto col-sm-7 store-btn-hover col-md-6 col-lg-5">
                  <Translation>
                    {(t) => (
                      <h3 className="intro-subtitle text-primary">
                        {t("CATEGORY.NEW_ARRIVALS")}
                      </h3>
                    )}
                  </Translation>
                  <h1 className="intro-title">
                    Apple iPad Pro <br />
                    12.9 Inch, 64GB{" "}
                  </h1>
                  <div className="intro-price">
                    <Translation>
                      {(t) => <sup>{t("DEALS.TODAY")} :</sup>}
                    </Translation>
                    <span className="text-primary">
                      $999<sup>.99</sup>
                    </span>
                  </div>
                  <a href="category.html" className="btn btn-primary btn-g btn-round">
                    <Translation>
                      {(t) => <span>{t("BUTTONS.SHOW_MORE")}</span>}
                    </Translation>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="slider-loader"></span>
      </>
    );
  }
}
