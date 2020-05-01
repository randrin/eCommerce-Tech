import React, { Component } from "react";
import {
  HeaderTop,
  HeaderMiddle,
  HeaderBottom,
  Annonces,
} from "../../../../components";

export default class Navbar extends Component {
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
    const { username, email, isLogged } = this.state;
    return (
      <>
        <>
          <Annonces />
          <header className="header-wrapper header header-intro-clearance header-4">
            <HeaderTop isLogged={isLogged} username={username} />
            <HeaderMiddle isLogged={isLogged} username={username} />
            <HeaderBottom />
          </header>
        </>
      </>
    );
  }
}
