import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <div
        className="tab-pane fade show active"
        id="tab-dashboard"
        role="tabpanel"
        aria-labelledby="tab-dashboard-link"
      >
        <p>
          Hello <span className="font-weight-normal text-dark">User</span> (not{" "}
          <span className="font-weight-normal text-dark">User</span>?{" "}
          <a href="#">Log out</a>)
          <br />
          From your account dashboard you can view your{" "}
          <a href="#tab-orders" className="tab-trigger-link link-underline">
            recent orders
          </a>
          , manage your{" "}
          <a href="#tab-address" className="tab-trigger-link">
            shipping and billing addresses
          </a>
          , and{" "}
          <a href="#tab-account" className="tab-trigger-link">
            edit your password and account details
          </a>
          .
        </p>
      </div>
    );
  }
}
