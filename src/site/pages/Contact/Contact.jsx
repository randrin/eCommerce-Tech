import React, { Component } from "react";
import { Breadcrumb } from "../..";
import { Navbar, Footer } from "../../../components";
import { Translation } from "react-i18next";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Navbar />
        <Translation>
          {(t) => (
            <>
              <main className="main">
                <Breadcrumb title={<span>{t("CONTACT.BREADCRUMB")}</span>} />
                <div className="container">
                  <div
                    className="page-header page-header-big text-center"
                    style={{
                      backgroundImage:
                        "url(" + "assets/images/contact-header-bg.jpg" + ")",
                    }}
                  >
                    <h1 className="page-title text-white">
                      {t("CONTACT.TITLE")}
                      <span className="text-white">
                        {t("CONTACT.SUBTITLE")}
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="store-contact-wrapper page-content pb-0">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 mb-2 mb-lg-0">
                        <h2 className="title mb-1">
                          {t("CONTACT.INFORMATIONS")}
                        </h2>
                        <p className="mb-3">
                          {t("CONTACT.INFORMATIONS_TITLE")}
                        </p>
                        <div className="row">
                          <div className="col-sm-7">
                            <div className="contact-info">
                              <h3>{t("CONTACT.ADDRESS_STORE")}</h3>
                              <ul className="contact-list">
                                <li>
                                  <i className="icon-map-marker"></i>
                                  70 Washington Square South New York, NY 10012,
                                  United States
                                </li>
                                <li>
                                  <i className="icon-phone"></i>
                                  <a href="tel:#">+92 423 567</a>
                                </li>
                                <li>
                                  <i className="icon-envelope"></i>
                                  <a href="mailto:#">info@Molla.com</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-sm-5">
                            <div className="contact-info">
                              <h3>{t("CONTACT.OPEN_STORE")}</h3>
                              <ul className="contact-list">
                                <li>
                                  <i className="icon-clock-o"></i>
                                  <span className="text-dark">
                                    Monday-Saturday
                                  </span>{" "}
                                  <br />
                                  11am-7pm ET
                                </li>
                                <li>
                                  <i className="icon-calendar"></i>
                                  <span className="text-dark">Sunday</span>{" "}
                                  <br />
                                  11am-6pm ET
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <h2 className="title mb-1">{t("CONTACT.QUESTIONS")}</h2>
                        <p className="mb-2">{t("CONTACT.QUESTIONS_TITLE")}</p>
                        <form action="#" className="contact-form mb-3">
                          <div className="row">
                            <div className="col-sm-6">
                              <label htmlFor="cname" className="sr-only">
                                Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="cname"
                                placeholder="Name *"
                                required
                              />
                            </div>
                            <div className="col-sm-6">
                              <label htmlFor="cemail" className="sr-only">
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="cemail"
                                placeholder="Email *"
                                required
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <label htmlFor="cphone" className="sr-only">
                                Phone
                              </label>
                              <input
                                type="tel"
                                className="form-control"
                                id="cphone"
                                placeholder="Phone"
                              />
                            </div>
                            <div className="col-sm-6">
                              <label htmlFor="csubject" className="sr-only">
                                Subject
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="csubject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <label htmlFor="cmessage" className="sr-only">
                            Message
                          </label>
                          <textarea
                            className="form-control"
                            cols="30"
                            rows="4"
                            id="cmessage"
                            required
                            placeholder="Message *"
                          ></textarea>
                          <button
                            type="submit"
                            className="btn btn-outline-primary-2 btn-minwidth-sm"
                          >
                            <span>SUBMIT</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                    <hr className="mt-4 mb-5" />
                    <div className="stores mb-4 mb-lg-5">
                      <h2 className="title text-center mb-3">Our Stores</h2>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="store">
                            <div className="row">
                              <div className="col-sm-5 col-xl-6">
                                <figure className="store-media mb-2 mb-lg-0">
                                  <img
                                    src="assets/images/stores/img-1.jpg"
                                    alt="image"
                                  />
                                </figure>
                              </div>
                              <div className="col-sm-7 col-xl-6">
                                <div className="store-content">
                                  <h3 className="store-title">
                                    Wall Street Plaza
                                  </h3>
                                  <address>
                                    88 Pine St, New York, NY 10005, USA
                                  </address>
                                  <div>
                                    <a href="tel:#">+1 987-876-6543</a>
                                  </div>
                                  <h4 className="store-subtitle">
                                    Store Hours:
                                  </h4>
                                  <div>Monday - Saturday 11am to 7pm</div>
                                  <div>Sunday 11am to 6pm</div>
                                  <a
                                    href="#"
                                    className="btn btn-link"
                                    target="_blank"
                                  >
                                    <span>View Map</span>
                                    <i className="icon-long-arrow-right"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="store">
                            <div className="row">
                              <div className="col-sm-5 col-xl-6">
                                <figure className="store-media mb-2 mb-lg-0">
                                  <img
                                    src="assets/images/stores/img-2.jpg"
                                    alt="image"
                                  />
                                </figure>
                              </div>
                              <div className="col-sm-7 col-xl-6">
                                <div className="store-content">
                                  <h3 className="store-title">
                                    One New York Plaza
                                  </h3>
                                  <address>
                                    88 Pine St, New York, NY 10005, USA
                                  </address>
                                  <div>
                                    <a href="tel:#">+1 987-876-6543</a>
                                  </div>
                                  <h4 className="store-subtitle">
                                    Store Hours:
                                  </h4>
                                  <div>Monday - Friday 9am to 8pm</div>
                                  <div>Saturday - 9am to 2pm</div>
                                  <div>Sunday - Closed</div>
                                  <a
                                    href="#"
                                    className="btn btn-link"
                                    target="_blank"
                                  >
                                    <span>View Map</span>
                                    <i className="icon-long-arrow-right"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </>
          )}
        </Translation>
        <div id="map"></div>
        <Footer />
      </>
    );
  }
}
