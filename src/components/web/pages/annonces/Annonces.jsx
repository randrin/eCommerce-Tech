import React, { Component } from "react";

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
            <h3>FREE SHIPPING FOR ALL ORDERS OVER $50</h3>
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
