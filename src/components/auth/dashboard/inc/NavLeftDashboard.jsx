import React, { Component } from "react";
import { Translation } from "react-i18next";

export default class NavLeftDashboard extends Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <>
            <aside className="col-md-4 col-lg-3">
              <ul
                className="nav nav-dashboard flex-column mb-3 mb-md-0"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="tab-dashboard-link"
                    data-toggle="tab"
                    href="#tab-dashboard"
                    role="tab"
                    aria-controls="tab-dashboard"
                    aria-selected="true"
                  >
                    {t("DASHBOARD.TITLE")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="tab-orders-link"
                    data-toggle="tab"
                    href="#tab-orders"
                    role="tab"
                    aria-controls="tab-orders"
                    aria-selected="false"
                  >
                    {t("DASHBOARD.ORDERS.TITLE")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="tab-downloads-link"
                    data-toggle="tab"
                    href="#tab-downloads"
                    role="tab"
                    aria-controls="tab-downloads"
                    aria-selected="false"
                  >
                    {t("DASHBOARD.DOWNLOADS")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="tab-address-link"
                    data-toggle="tab"
                    href="#tab-address"
                    role="tab"
                    aria-controls="tab-address"
                    aria-selected="false"
                  >
                    {t("DASHBOARD.ADRESSES")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="tab-account-link"
                    data-toggle="tab"
                    href="#tab-account"
                    role="tab"
                    aria-controls="tab-account"
                    aria-selected="false"
                  >
                    {t("DASHBOARD.ACCOUNT_DETAILS")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#logout-modal"
                    data-toggle="modal"
                  >
                    {t("DASHBOARD.SIGN_OUT")}
                  </a>
                </li>
              </ul>
            </aside>
          </>
        )}
      </Translation>
    );
  }
}
