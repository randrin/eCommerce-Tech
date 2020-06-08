import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, HeroBanner } from "../../../components";
import { Breadcrumb, ContactBanner } from "../../index";
import { Translation } from "react-i18next";

export default class Faqs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
    };
  }
  componentDidMount() {
    let categoryFaq = this.props.match.params.description;
    this.setState({
      category: categoryFaq,
    });
  }
  render() {
    const { category } = this.state;
    return (
      <>
        <Navbar />
        <main className="main">
          <Translation>
            {(t) => (
              <>
                <HeroBanner
                  title={t("FAQS.HEROBANNER_TITLE")}
                  subtitle={t("FAQS.HEROBANNER_SUBTITLE")}
                />
                <Breadcrumb title={<span>{t("FAQS.BREADCRUMB")}</span>} />
                <div className="page-content">
                  <div className="container">
                    {category === "shipping" && (
                      <>
                        <h2 className="title text-center mb-3">
                          Shipping Information
                        </h2>
                        <div
                          className="accordion accordion-rounded"
                          id="accordion-1"
                        >
                          <div className="card card-box card-sm bg-light">
                            <div className="card-header" id="heading-1">
                              <h2 className="card-title">
                                <a
                                  role="button"
                                  data-toggle="collapse"
                                  href="#collapse-1"
                                  aria-expanded="true"
                                  aria-controls="collapse-1"
                                >
                                  How will my parcel be delivered?
                                </a>
                              </h2>
                            </div>
                            <div
                              id="collapse-1"
                              className="collapse show"
                              aria-labelledby="heading-1"
                              data-parent="#accordion-1"
                            >
                              <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Donec odio. Quisque volutpat
                                mattis eros. Nullam malesuada erat ut turpis.
                                Suspendisse urna nibh, viverra non, semper
                                suscipit, posuere a, pede. Donec nec justo eget
                                felis facilisis fermentum. Aliquam porttitor
                                mauris sit amet orci. Aenean dignissim
                                pellentesque felis. Phasellus ultrices nulla
                                quis nibh. Quisque a lectus. Donec consectetuer
                                ligula vulputate sem tristique cursus. Nam nulla
                                quam, gravida non, commodo a, sodales sit amet,
                                nisi.
                              </div>
                            </div>
                          </div>
                          <div className="card card-box card-sm bg-light">
                            <div className="card-header" id="heading-2">
                              <h2 className="card-title">
                                <a
                                  className="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  href="#collapse-2"
                                  aria-expanded="false"
                                  aria-controls="collapse-2"
                                >
                                  Do I pay for delivery?
                                </a>
                              </h2>
                            </div>
                            <div
                              id="collapse-2"
                              className="collapse"
                              aria-labelledby="heading-2"
                              data-parent="#accordion-1"
                            >
                              <div className="card-body">
                                Ipsum dolor sit amet, consectetuer adipiscing
                                elit. Donec odio. Quisque volutpat mattis eros.
                                Nullam malesuada erat ut turpis. Suspendisse
                                urna nibh, viverra non, semper suscipit, posuere
                                a, pede. Donec nec justo eget felis facilisis
                                fermentum.Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit. Donec odio.
                                Quisque volutpat mattis eros.
                              </div>
                            </div>
                          </div>
                          <div className="card card-box card-sm bg-light">
                            <div className="card-header" id="heading-3">
                              <h2 className="card-title">
                                <a
                                  className="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  href="#collapse-3"
                                  aria-expanded="false"
                                  aria-controls="collapse-3"
                                >
                                  Will I be charged customs fees?
                                </a>
                              </h2>
                            </div>
                            <div
                              id="collapse-3"
                              className="collapse"
                              aria-labelledby="heading-3"
                              data-parent="#accordion-1"
                            >
                              <div className="card-body">
                                Nullam malesuada erat ut turpis. Suspendisse
                                urna nibh, viverra non, semper suscipit, posuere
                                a, pede. Donec nec justo eget felis facilisis
                                fermentum.Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit. Donec odio.
                                Quisque volutpat mattis eros. Lorem ipsum dolor
                                sit amet, consectetuer adipiscing elit. Donec
                                odio. Quisque volutpat mattis eros.
                              </div>
                            </div>
                          </div>
                          <div className="card card-box card-sm bg-light">
                            <div className="card-header" id="heading-4">
                              <h2 className="card-title">
                                <a
                                  className="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  href="#collapse-4"
                                  aria-expanded="false"
                                  aria-controls="collapse-4"
                                >
                                  My item has become faulty
                                </a>
                              </h2>
                            </div>
                            <div
                              id="collapse-4"
                              className="collapse"
                              aria-labelledby="heading-4"
                              data-parent="#accordion-1"
                            >
                              <div className="card-body">
                                Nullam malesuada erat ut turpis. Suspendisse
                                urna nibh, viverra non, semper suscipit, posuere
                                a, pede. Donec nec justo eget felis facilisis
                                fermentum.Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit. Donec odio.
                                Quisque volutpat mattis eros. Lorem ipsum dolor
                                sit amet, consectetuer adipiscing elit. Donec
                                odio. Quisque volutpat mattis eros.
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {category === "returns" && (
                      <>
                        <h2 className="title text-center mb-3">
                          Orders and Returns
                        </h2>
                        <div
                          className="accordion accordion-rounded"
                          id="accordion-2"
                        >
                          <div className="card card-box card-sm bg-light">
                            <div className="card-header" id="heading2-1">
                              <h2 className="card-title">
                                <a
                                  className="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  href="#collapse2-1"
                                  aria-expanded="false"
                                  aria-controls="collapse2-1"
                                >
                                  Tracking my order
                                </a>
                              </h2>
                            </div>
                            <div
                              id="collapse2-1"
                              className="collapse"
                              aria-labelledby="heading2-1"
                              data-parent="#accordion-2"
                            >
                              <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Donec odio. Quisque volutpat
                                mattis eros. Nullam malesuada erat ut turpis.
                                Suspendisse urna nibh, viverra non, semper
                                suscipit, posuere a, pede. Donec nec justo eget
                                felis facilisis fermentum.
                              </div>
                            </div>
                          </div>
                          <div className="card card-box card-sm bg-light">
                            <div className="card-header" id="heading2-2">
                              <h2 className="card-title">
                                <a
                                  className="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  href="#collapse2-2"
                                  aria-expanded="false"
                                  aria-controls="collapse2-2"
                                >
                                  I haven’t received my order
                                </a>
                              </h2>
                            </div>
                            <div
                              id="collapse2-2"
                              className="collapse"
                              aria-labelledby="heading2-2"
                              data-parent="#accordion-2"
                            >
                              <div className="card-body">
                                Ipsum dolor sit amet, consectetuer adipiscing
                                elit. Donec odio. Quisque volutpat mattis eros.
                                Nullam malesuada erat ut turpis. Suspendisse
                                urna nibh, viverra non, semper suscipit, posuere
                                a, pede. Donec nec justo eget felis facilisis
                                fermentum.Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit. Donec odio.
                                Quisque volutpat mattis eros.
                              </div>
                            </div>
                          </div>
                          <div className="card card-box card-sm bg-light">
                            <div className="card-header" id="heading2-3">
                              <h2 className="card-title">
                                <a
                                  className="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  href="#collapse2-3"
                                  aria-expanded="false"
                                  aria-controls="collapse2-3"
                                >
                                  How can I return an item?
                                </a>
                              </h2>
                            </div>
                            <div
                              id="collapse2-3"
                              className="collapse"
                              aria-labelledby="heading2-3"
                              data-parent="#accordion-2"
                            >
                              <div className="card-body">
                                Nullam malesuada erat ut turpis. Suspendisse
                                urna nibh, viverra non, semper suscipit, posuere
                                a, pede. Donec nec justo eget felis facilisis
                                fermentum.Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit. Donec odio.
                                Quisque volutpat mattis eros. Lorem ipsum dolor
                                sit amet, consectetuer adipiscing elit. Donec
                                odio. Quisque volutpat mattis eros.
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {category === "payments" && (
                      <>
                        <h2 className="title text-center mb-3">Payments</h2>
                        <div
                          className="accordion accordion-rounded"
                          id="accordion-3"
                        >
                          <div className="card card-box card-sm bg-light">
                            <div className="card-header" id="heading3-1">
                              <h2 className="card-title">
                                <a
                                  className="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  href="#collapse3-1"
                                  aria-expanded="false"
                                  aria-controls="collapse3-1"
                                >
                                  What payment types can I use?
                                </a>
                              </h2>
                            </div>
                            <div
                              id="collapse3-1"
                              className="collapse"
                              aria-labelledby="heading3-1"
                              data-parent="#accordion-3"
                            >
                              <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Donec odio. Quisque volutpat
                                mattis eros. Nullam malesuada erat ut turpis.
                                Suspendisse urna nibh, viverra non, semper
                                suscipit, posuere a, pede. Donec nec justo eget
                                felis facilisis fermentum.
                              </div>
                            </div>
                          </div>
                          <div className="card card-box card-sm bg-light">
                            <div className="card-header" id="heading3-2">
                              <h2 className="card-title">
                                <a
                                  className="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  href="#collapse3-2"
                                  aria-expanded="false"
                                  aria-controls="collapse3-2"
                                >
                                  Can I pay by Gift Card?
                                </a>
                              </h2>
                            </div>
                            <div
                              id="collapse3-2"
                              className="collapse"
                              aria-labelledby="heading3-2"
                              data-parent="#accordion-3"
                            >
                              <div className="card-body">
                                Ipsum dolor sit amet, consectetuer adipiscing
                                elit. Donec odio. Quisque volutpat mattis eros.
                                Nullam malesuada erat ut turpis. Suspendisse
                                urna nibh, viverra non, semper suscipit, posuere
                                a, pede. Donec nec justo eget felis facilisis
                                fermentum.Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit. Donec odio.
                                Quisque volutpat mattis eros.
                              </div>
                            </div>
                          </div>
                          <div className="card card-box card-sm bg-light">
                            <div className="card-header" id="heading3-3">
                              <h2 className="card-title">
                                <a
                                  className="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  href="#collapse3-3"
                                  aria-expanded="false"
                                  aria-controls="collapse3-3"
                                >
                                  I can't make a payment
                                </a>
                              </h2>
                            </div>
                            <div
                              id="collapse3-3"
                              className="collapse"
                              aria-labelledby="heading3-3"
                              data-parent="#accordion-3"
                            >
                              <div className="card-body">
                                Nullam malesuada erat ut turpis. Suspendisse
                                urna nibh, viverra non, semper suscipit, posuere
                                a, pede. Donec nec justo eget felis facilisis
                                fermentum.Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit. Donec odio.
                                Quisque volutpat mattis eros. Lorem ipsum dolor
                                sit amet, consectetuer adipiscing elit. Donec
                                odio. Quisque volutpat mattis eros.
                              </div>
                            </div>
                          </div>
                          <div className="card card-box card-sm bg-light">
                            <div className="card-header" id="heading3-4">
                              <h2 className="card-title">
                                <a
                                  className="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  href="#collapse3-4"
                                  aria-expanded="false"
                                  aria-controls="collapse3-4"
                                >
                                  Has my payment gone through?
                                </a>
                              </h2>
                            </div>
                            <div
                              id="collapse3-4"
                              className="collapse"
                              aria-labelledby="heading3-4"
                              data-parent="#accordion-3"
                            >
                              <div className="card-body">
                                Nullam malesuada erat ut turpis. Suspendisse
                                urna nibh, viverra non, semper suscipit, posuere
                                a, pede. Donec nec justo eget felis facilisis
                                fermentum.Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit. Donec odio.
                                Quisque volutpat mattis eros. Lorem ipsum dolor
                                sit amet, consectetuer adipiscing elit. Donec
                                odio. Quisque volutpat mattis eros.
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <ContactBanner />
              </>
            )}
          </Translation>
        </main>
        <Footer />
      </>
    );
  }
}