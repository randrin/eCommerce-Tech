import React, { Component } from 'react';

export default class ButtonGoToTop extends Component {
    render() {
        return (
          <>
            <button id="scroll-top" title="Back to Top">
              <i className="icon-arrow-up"></i>
            </button>
          </>
        );
    }
}
