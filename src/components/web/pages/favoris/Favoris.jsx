import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Footer,
  FavorisProducts,
  FavorisEmpty,
} from "../../../../components";

export default class Favoris extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      isLogged: false,
    };
  }

  retrieveInformationsUser() {
    var user = JSON.parse(localStorage.getItem("user"));
    var now = new Date().getTime().toString();
    if (user) {
      var tokenTime = user.tokenTime;
      if (now < tokenTime) {
        this.setState({
          username: user.value.username,
          email: user.value.email,
          isLogged: true,
        });
      }
    }
  }
  componentDidMount() {
    this.retrieveInformationsUser();
  }
  render() {
    const { isLogged } = this.state;
    return (
      <>
        <Navbar />
        <main class="main">
          <div
            class="page-header text-center"
            style={{
              backgroundImage:
                "url(" + "assets/images/page-header-bg.jpg" + ")",
            }}
          >
            <div class="container">
              <h1 class="page-title">
                Wishlist<span>Shop</span>
              </h1>
            </div>
          </div>
          <nav aria-label="breadcrumb" class="breadcrumb-nav">
            <div class="container">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Wishlist
                </li>
              </ol>
            </div>
          </nav>
          {isLogged ? <FavorisProducts /> : <FavorisEmpty />}
        </main>
        <Footer />
      </>
    );
  }
}
