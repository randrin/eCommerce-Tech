import React, { Component } from 'react'

export default class Downloads extends Component {
    render() {
        return (
          <div
            className="tab-pane fade"
            id="tab-downloads"
            role="tabpanel"
            aria-labelledby="tab-downloads-link"
          >
            <p>No downloads available yet.</p>
            <a href="category.html" className="btn btn-outline-primary-2">
              <span>GO SHOP</span>
              <i className="icon-long-arrow-right"></i>
            </a>
          </div>
        );
    }
}
