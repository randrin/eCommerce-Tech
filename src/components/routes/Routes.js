import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import {
  About,
  Cart,
  Contact,
  Error404,
  Home,
  ProductSingle,
  ProductsList,
  Faqs,
  FaqsByCategories,
  Checkout,
  WorkWithUs,
} from "../../site";
import {
  ComingSoon,
  Temoignages,
  Blogs,
  Favoris,
  Dashboard,
  Logout,
  LoginPage,
  Register,
  ResetPassword,
  QuickView,
  Cookies,
  PolitiquesConfidentialite,
  TermesConditions,
} from "../../components";

const Routes = (props) => (
  <Switch>
    <Route exact path="/" strict component={Home} />
    <Route exact path="/home" component={withRouter(Home)} />
    <Route exact path="/about" component={About} />
    <Route exact path="/faqs" component={FaqsByCategories} />
    <Route exact path="/faqs/:description" component={Faqs} />
    <Route exact path="/products" component={ProductsList} />
    <Route exact path="/product/:id" component={withRouter(ProductSingle)} />
    <Route
      exact
      path="/product/quick-view/:id"
      component={withRouter(QuickView)}
    />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/checkout" component={withRouter(Checkout)} />
    <Route exact path="/coming-soon" component={ComingSoon} />
    <Route exact path="/temoignages" component={Temoignages} />
    <Route exact path="/blogs" component={withRouter(Blogs)} />
    <Route exact path="/favoris" component={Favoris} />
    <Route exact path="/profil" component={Dashboard} />
    <Route exact path="/logout" component={withRouter(Logout)} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/reset-password" component={ResetPassword} />
    <Route exact path="/cookies" component={Cookies} />
    <Route exact path="/policy" component={PolitiquesConfidentialite} />
    <Route exact path="/terms-conditions" component={TermesConditions} />
    <Route exact path="/work-with-us" component={WorkWithUs} />
    <Route component={Error404} />
  </Switch>
);

export default Routes;
