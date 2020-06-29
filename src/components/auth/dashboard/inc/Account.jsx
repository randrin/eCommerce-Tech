import React, { Component } from 'react'

export default class Account extends Component {
    render() {
        return (
          <div
            className="tab-pane fade"
            id="tab-account"
            role="tabpanel"
            aria-labelledby="tab-account-link"
          >
            <form action="#">
              <div className="row">
                <div className="col-sm-6">
                  <label>First Name *</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col-sm-6">
                  <label>Last Name *</label>
                  <input type="text" className="form-control" required />
                </div>
              </div>
              <label>Display Name *</label>
              <input type="text" className="form-control" required />
              <small className="form-text">
                This will be how your name will be displayed in the account
                section and in reviews
              </small>
              <label>Email address *</label>
              <input type="email" className="form-control" required />
              <label>Current password (leave blank to leave unchanged)</label>
              <input type="password" className="form-control" />
              <label>New password (leave blank to leave unchanged)</label>
              <input type="password" className="form-control" />
              <label>Confirm new password</label>
              <input type="password" className="form-control mb-2" />
              <button type="submit" className="btn btn-outline-primary-2">
                <span>SAVE CHANGES</span>
                <i className="icon-long-arrow-right"></i>
              </button>
            </form>
          </div>
        );
    }
}
