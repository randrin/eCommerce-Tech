import React, { Component } from "react";
import { Translation } from "react-i18next";

export default class Annonces extends Component {
  render() {
    return (
      <>
        <div
          className="notification"
          style={{
            backgroundImage:
              "url(" + "assets/images/demos/demo-4/notification-back.jpg" + ")",
          }}
        >
          <div className="notify-content">
            <Translation>
              {(t) => <h3>{t("ANNONCES.TITLE")}</h3>}
            </Translation>
          </div>
          <div className="notify-action">
            <span className="notifications-close">
              <i className="icon-close"></i>
            </span>
          </div>
        </div>
      </>
    );
  }
}
