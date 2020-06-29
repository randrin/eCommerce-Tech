import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";
import { OrdersEmpty } from "../../..";

export default class Orders extends Component {
  render() {
    return (
      <>
        <Translation>
          {(t) => (
            <>
              <div
                className="tab-pane fade text-center"
                id="tab-orders"
                role="tabpanel"
                aria-labelledby="tab-orders-link"
              >
                <OrdersEmpty />
              </div>
            </>
          )}
        </Translation>
      </>
    );
  }
}
