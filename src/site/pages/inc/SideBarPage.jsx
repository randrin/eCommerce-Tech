import React, { Component } from 'react';

export default class SideBarPage extends Component {
    render() {
        const { title, subtitle } = this.props;
        return (
          <div
            className="page-header text-center"
            style={{
              backgroundImage:
                "url(" + "assets/images/page-header-bg.jpg" + ")",
            }}
          >
            <div className="container">
              <h1 className="page-title">
                {title}
                <span>{subtitle}</span>
              </h1>
            </div>
          </div>
        );
    }
}
