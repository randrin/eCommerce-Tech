import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "../../components";
import { Breadcrumb } from "./../../site";
import { Translation } from "react-i18next";

export default class WorkWithUs extends Component {
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
                <Breadcrumb
                  title={<span>{t("WORK_WITH_US.BREADCRUMB")}</span>}
                />
                <div className="container">
                  <div
                    className="page-header page-header-big text-center"
                    style={{
                      backgroundImage:
                        "url(" + "assets/images/about-header-bg.jpg" + ")",
                    }}
                  >
                    <h1 className="page-title text-white">
                      {t("WORK_WITH_US.TITLE")}
                      <span className="text-white mt-2">
                        {t("WORK_WITH_US.SUBTITLE")}
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="page-content pb-0">
                  <div className="container">
                    <div className="row my-5">
                      <div className="col mb-3 mb-lg-0">
                        <form method="POST" action="#">
                          <div className="row">
                            <div className="col-sm-4">
                              <label>
                                {t("WORK_WITH_US.FULLNAME")}
                                <span className="store-required">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder={t(
                                  "WORK_WITH_US.FULLNAME_PLACEHOLDER"
                                )}
                                required
                              />
                            </div>
                            <div className="col-sm-4">
                              <label>
                                {t("LOGIN.EMAIL_FIELD")}
                                <span className="store-required">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder={t(
                                  "WORK_WITH_US.EMAIL_PLACEHOLDER"
                                )}
                                required
                              />
                            </div>
                            <div className="col-sm-4">
                              <label>
                                {t("WORK_WITH_US.PROFESSION")}
                                <span className="store-required">*</span>
                              </label>
                              <div class="select-custom">
                                <select
                                  name="sortby"
                                  id="sortby"
                                  class="form-control"
                                >
                                  <option value="" selected hidden>
                                    {t("WORK_WITH_US.PROFESSION_PLACEHOLDER")}
                                  </option>
                                  <option value="popularity">
                                    Most Popular
                                  </option>
                                  <option value="rating">Most Rated</option>
                                  <option value="date">Date</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <label>
                                {t("WORK_WITH_US.DESCRIPTION")}
                                <span className="store-required">*</span>
                              </label>
                              <textarea
                                className="form-control"
                                placeholder={t(
                                  "WORK_WITH_US.DESCRIPTION_PLACEHOLDER"
                                )}
                              ></textarea>
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-outline-primary-2"
                          >
                            <span>{t("WORK_WITH_US.FORM_SEND")}</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </>
          )}
        </Translation>
        <Footer />
      </>
    );
  }
}
