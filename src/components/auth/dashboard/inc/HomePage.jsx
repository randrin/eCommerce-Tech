import React, { Component } from "react";
import { Translation } from "react-i18next";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <>
            <div
              className="tab-pane fade show active"
              id="tab-dashboard"
              role="tabpanel"
              aria-labelledby="tab-dashboard-link"
            >
              <div className="store-background-blue-bunting my-5 pt-2 pb-2 text-center">
                <h6 className="store-text-white">
                  Bienvenue
                  <span className="store-username font-weight-normal">
                    Username
                  </span>
                  sur votre compte client
                </h6>
                <span>
                  Vous trouverez ici toutes les données essentielles sur vous et
                  vos commandes.
                </span>
              </div>
              <div className="store-dashboard-container">
                <div className="row mb-1 mt-1">
                  <div className="col-md-12 store-dashboard-fullbox store-btn-hover">
                    <h4>— Mon Abonnement Infinity —</h4>
                    <div>
                      <span className="store-dashboard-text">
                        Status :
                        <span className="font-weight-bold store-text-tomato">
                          Non Activé
                        </span>
                      </span>
                    </div>
                    <Link
                      to="/"
                      className="btn btn-primary btn-g store-dashboard-btn-plus"
                    >
                      En savoir plus
                      <i className="icon-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="row mb-1">
                  <div className="col-md-6 store-dashboard-halfbox store-btn-hover">
                    <h4>— Mes Commandes —</h4>
                    <div>
                      <span className="store-dashboard-text font-weight-bold store-text-tomato">
                        0 commande(s) en cours de traitement
                      </span>
                      <span className="store-dashboard-text">
                        0 commande(s) terminée(s)
                      </span>
                    </div>
                    <hr className="store-divider-line" />
                    <p>
                      Vous pouvez suivre les étapes de votre commande en cours
                      et retrouver l'historique de vos commandes passées.
                    </p>
                    <a
                      data-toggle="tab"
                      href="#tab-orders"
                      role="tab"
                      aria-controls="tab-orders"
                      className="btn btn-primary btn-g"
                    >
                      Voir le détail
                      <i className="icon-long-arrow-right"></i>
                    </a>
                  </div>
                  <div className="col-md-6 store-dashboard-halfbox store-btn-hover">
                    <h4>— Mes Informations —</h4>
                    <div>
                      <span className="store-dashboard-text font-weight-bold store-text-tomato">
                        Monsieur / Madame Nom Et Prènom <br />
                        test@gmail.com
                      </span>
                    </div>
                    <hr className="store-divider-line" />
                    <p>
                      Vous avez déménagé, changé d'email, de mot de passe...
                      Ici, vous pouvez modifier et compléter vos coordonnées.
                    </p>
                    <Link to="/" className="btn btn-primary btn-g">
                      Voir / Modifier
                      <i className="icon-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 store-dashboard-halfbox store-btn-hover">
                    <h4>— Mes Filleuls —</h4>
                    <div>
                      <span className="store-dashboard-text font-weight-bold store-text-tomato">
                        0 filleul(s) inscrit(s)
                      </span>
                      <span className="store-dashboard-text">
                        0 filleul(s) en attente d'inscription
                      </span>
                    </div>
                    <hr className="store-divider-line" />
                    <p>
                      Vous pouvez suivre les inscriptions de vos filleuls et les
                      relancer.
                    </p>
                    <Link to="/" className="btn btn-primary btn-g">
                      Voir le détail
                      <i className="icon-long-arrow-right"></i>
                    </Link>
                  </div>
                  <div className="col-md-6 store-dashboard-halfbox store-btn-hover">
                    <h4>— Mes Bons d'Achat —</h4>
                    <div>
                      <span className="store-dashboard-text font-weight-bold store-text-tomato">
                        0 bon(s) d'achat disponible(s)
                      </span>
                    </div>
                    <hr className="store-divider-line" />
                    <p>
                      Vous retrouvez le détail de vos bons d'achat et leur date
                      d'expiration.
                    </p>
                    <Link to="/" className="btn btn-primary btn-g">
                      Voir le détail
                      <i className="icon-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Translation>
    );
  }
}
