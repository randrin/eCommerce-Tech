import React, { Component } from "react";
import { Navbar, Footer, HeroBanner } from "../../../../components";
import { Translation } from "react-i18next";
import { Breadcrumb } from "../../../../site";

export default class Temoignages extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="main">
          <Translation>
            {(t) => (
              <>
                <HeroBanner
                  title={t("TESTIMONIALS.HEROBANNER_TITLE")}
                  subtitle={t("TESTIMONIALS.HEROBANNER_SUBTITLE")}
                />
                <Breadcrumb
                  title={<span>{t("TESTIMONIALS.BREADCRUMB")}</span>}
                />
              </>
            )}
          </Translation>
          <div className="page-content">
            <div className="container mt-7">
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
              <div className="store-divider-line"></div>
              {/** Post your testimonial here **/}
              <div className="reply">
                <div className="heading">
                  <Translation>
                    {(t) => (
                      <>
                        <h3 className="title">
                          {t("TESTIMONIALS.REPLY_TITLE")}
                        </h3>
                        <p className="title-desc mb-3">
                          {t("TESTIMONIALS.REPLY_SUBTITLE")}
                        </p>
                        <form action="#">
                          <label for="reply-message" className="sr-only">
                            Comment
                          </label>
                          <textarea
                            name="reply-message"
                            id="reply-message"
                            cols="30"
                            rows="4"
                            className="form-control"
                            required
                            placeholder={t("TESTIMONIALS.REPLY_TEXTAREA")}
                          ></textarea>
                          <div className="row">
                            <div className="col-md-6">
                              <label for="reply-name" className="sr-only">
                                Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="reply-name"
                                name="reply-name"
                                required
                                placeholder={t("TESTIMONIALS.REPLY_INPUT_NAME")}
                              />
                            </div>
                            <div className="col-md-6">
                              <label for="reply-email" className="sr-only">
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="reply-email"
                                name="reply-email"
                                required
                                placeholder={t(
                                  "TESTIMONIALS.REPLY_INPUT_EMAIL"
                                )}
                              />
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-outline-primary-2 mt-3"
                          >
                            <span>{t("TESTIMONIALS.REPLY_BUTTON")}</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>
                        </form>
                      </>
                    )}
                  </Translation>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
