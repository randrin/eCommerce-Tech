import React, { Component } from "react";
import { Navbar, Footer } from "../..";

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  restoreInformationsUser() {
    localStorage.removeItem("user");
    window.location.replace(`/`);
  }

  componentDidMount() {
    this.restoreInformationsUser();
  }
  render() {
    return (
      <></>
    );
  }
}
