import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FavorisEmpty extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-content text-center">
          <h2 className="title">Oufff !!!!</h2>
          <p>
            Vous n'êtes pas connecté pour avoir accès à vos favories lors de
            votre dernière navigation sur le site.
          </p>
          <div className="row m-5">
            <div className="col-md-6">
              <Link to="/login" class="btn btn-outline-primary-2">
                <span>LOG IN</span>
                <i class="icon-long-arrow-right"></i>
              </Link>
            </div>
            <div className="col-md-6 store-favoris">
              <Link to="/register" class="btn btn-primary btn-g">
                <span>REGISTER</span>
                <i class="icon-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
