import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";

export default class LogoutModal extends Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <>
            <div
              className="modal fade"
              id="logout-modal"
              tabIndex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-body">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        <i className="icon-close"></i>
                      </span>
                    </button>
                    <div className="form-box">
                      <div className="form-tab">
                        <div className="tab-content" id="tab-content-5">
                          <div
                            className="tab-pane fade show active"
                            id="signin"
                            role="tabpanel"
                            aria-labelledby="signin-tab"
                          >
                            <div className="">
                              <div className="row justify-content-center">
                                <div className="icon-box text-center">
                                  <span className="icon-box-icon">
                                    <i className="icon-info-circle store-icon-large"></i>
                                  </span>
                                  <div className="icon-box-content">
                                    <h3 className="icon-box-title">
                                      {t("LOGOUT.TITLE")}
                                    </h3>
                                    <p>{t("LOGOUT.SUBTITLE")}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="row justify-content-center">
                                <div className="col-md-6">
                                  <div className="store-logout">
                                    <button
                                      type="button"
                                      className="btn btn-outline-primary-2"
                                      data-dismiss="modal"
                                    >
                                      <i className="icon-long-arrow-left"></i>
                                      {t("LOGOUT.BUTTON_CANCEL")}
                                    </button>
                                  </div>
                                </div>
                                <div className="col-md-6 store-create-account">
                                  <div className="store-logout">
                                    <Link
                                      id="logout-modal"
                                      to="/logout"
                                      className="btn btn-primary btn-g"
                                    >
                                      <span>{t("LOGOUT.BUTTON_LOGOUT")}</span>
                                      <i className="icon-long-arrow-right"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Translation>
    );
  }
}
