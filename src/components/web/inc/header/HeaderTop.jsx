import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { LoginModal } from "../../../../components";

class HeaderTop extends Component {
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
    const { isLogged, username, t } = this.props;
    const { selectLang } = this.state;

    return (
      <header className="header header-intro-clearance header-4">
        <div className="header-top">
          <div className="container">
            <div className="header-left">
              <a href="tel:#">
                <i className="icon-phone"></i>
                {t("HEADER-TOP.CALL")} +0123 456 789
              </a>
            </div>
            <div className="header-right">
              <ul className="top-menu">
                <li>
                  <a href="#">Links</a>
                  <ul>
                    <li>
                      <div className="header-dropdown">
                        <a href="#">$ USD</a>
                        <div className="header-menu">
                          <ul>
                            <li>
                              <a href="#">Franc CFA</a>
                            </li>
                            <li>
                              <a href="#">€ EURO</a>
                            </li>
                            <li>
                              <a href="#">$ USD</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="header-dropdown">
                        <a href="#" className="store-selected-lang">
                          {selectLang === "fr" ? (
                            <>
                              <img
                                className="store-img-flag"
                                src="/assets/images/flags/fr.png"
                              />
                              <p>French</p>
                            </>
                          ) : (
                            <>
                              <img
                                className="store-img-flag"
                                src="/assets/images/flags/en.png"
                              />
                              <p>English</p>
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
                                <p>English</p>
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
                                <p>French</p>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    {/* On/Off user section */}
                    {/* <li>
                      {isLogged ? (
                        <Link to="/profil">
                          <i className="icon-user"></i>{" "}
                          {t("HEADER-TOP.MORNING")} {username}
                        </Link>
                      ) : (
                        <a href="#signin-modal" data-toggle="modal">
                          <i className="icon-user"></i>{" "}
                          {t("HEADER-TOP.SIGN_IN_UP")}
                        </a>
                      )}
                    </li> */}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <LoginModal />
      </header>
    );
  }
}
export default withTranslation()(HeaderTop);
