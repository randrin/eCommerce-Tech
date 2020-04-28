import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "../../../components";

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  restoreInformationsUser() {
    localStorage.removeItem("user");
    //window.location.replace(`/`);
  }

  componentDidMount() {
    this.restoreInformationsUser();
  }
  render() {
    return (
      <>
        <Navbar />
        <main className="main">
          <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
            <div className="container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link id="reloadBrowser" to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Logout
                </li>
              </ol>
            </div>
          </nav>
          <div className="container">
            <p>Merci de votre visite sur le site.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
