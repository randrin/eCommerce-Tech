import React, { Component } from "react";
import { Navbar, Footer } from "../../../../components";
import { Translation } from "react-i18next";
import { Breadcrumb } from "../../../../site";

export default class Temoignages extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="main">
          <div
            className="page-header text-center"
            style={{
              backgroundImage:
                "url(" + "assets/images/page-header-bg.jpg" + ")",
            }}
          >
            <div className="container">
              <h1 className="page-title">
                Testimonials<span>Elements</span>
              </h1>
            </div>
          </div>
          <Breadcrumb
            title={
              <Translation>
                {(t) => <span>{t("TESTIMONIALS.BREADCRUMB")}</span>}
              </Translation>
            }
          />
          <div className="page-content">
            <div className="container">
              <h2 className="title text-center mb-3">
                Quote Sign <span className="title-separator">/</span> Centered
                Align <span className="title-separator">/</span> 3 Columns
              </h2>
              <div
                className="owl-carousel owl-theme owl-testimonials"
                data-toggle="owl"
                data-owl-options='{
                            "nav": false, 
                            "dots": true,
                            "margin": 20,
                            "loop": true,
                            "responsive": {
                                "0": {
                                    "items":1
                                },
                                "768": {
                                    "items":2
                                },
                                "992": {
                                    "items":3
                                },
                                "1200": {
                                    "items":3,
                                    "nav": true
                                }
                            }
                        }'
              >
                <blockquote className="testimonial text-center">
                  <img src="assets/images/testimonials/user-1.jpg" alt="user" />
                  <p>
                    “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus quet vel, dapibus id, mattis vel, nisi tortor eu
                    nibh. Nullam mollis. ”
                  </p>
                  <cite>
                    Jenson Gregory
                    <span>Customer</span>
                  </cite>
                </blockquote>
                <blockquote className="testimonial text-center">
                  <img src="assets/images/testimonials/user-2.jpg" alt="user" />
                  <p>
                    “ Impedit, ratione sequi, sunt incidunt magnam et. Delectus
                    obcaecati optio eius error libero perferendis nesciunt atque
                    dolores magni recusand. ”
                  </p>
                  <cite>
                    Victoria Ventura
                    <span>Customer</span>
                  </cite>
                </blockquote>
                <blockquote className="testimonial text-center">
                  <img src="assets/images/testimonials/user-1.jpg" alt="user" />
                  <p>
                    “ Molestias animi illo natus ut quod neque ad accusamus
                    praesentium fuga! Dolores odio alias sapiente odit delectus
                    quasi, explicab, modi animi. ”
                  </p>
                  <cite>
                    Angelica Lynch
                    <span>Customer</span>
                  </cite>
                </blockquote>
                <blockquote className="testimonial text-center">
                  <img src="assets/images/testimonials/user-2.jpg" alt="user" />
                  <p>
                    “ Molestias animi illo natus ut quod neque ad accusamus
                    praesentium fuga! Dolores odio alias sapiente odit delectus
                    quasi, explicab. ”
                  </p>
                  <cite>
                    John Smith
                    <span>Customer</span>
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
