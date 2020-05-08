import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class MultiLanguages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectLang: localStorage.getItem("i18nextLng"),
    };
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }
  handleChangeLanguage(lang) {
    this.props.i18n.changeLanguage(lang);
    this.setState({ selectLang: lang });
  }
  render() {
    const { selectLang } = this.state;
    return (
      <div className="header-dropdown">
        <a href="#" className="store-selected-lang">
          {selectLang === "fr" ? (
            <>
              <img
                className="store-img-flag"
                src="/assets/images/flags/fr.png"
              />
              <p>Français</p>
            </>
          ) : (
            <>
              <img
                className="store-img-flag"
                src="/assets/images/flags/en.png"
              />
              <p>Anglais</p>
            </>
          )}
        </a>
        <div className="header-menu">
          <ul>
            <li>
              <span
                className="store-selected-lang"
                onClick={() => this.handleChangeLanguage("en")}
              >
                <img
                  className="store-img-flag"
                  src="/assets/images/flags/en.png"
                />{" "}
                <p>Anglais</p>
              </span>
            </li>
            <li>
              <span
                className="store-selected-lang"
                onClick={() => this.handleChangeLanguage("fr")}
              >
                <img
                  className="store-img-flag"
                  src="/assets/images/flags/fr.png"
                />
                <p>Français</p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default withTranslation()(MultiLanguages);