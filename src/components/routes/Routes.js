import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import {
  About,
  Cart,
  Contact,
  Error404,
  Home,
  Product,
  Products,
  Faqs,
  Checkout,
} from "../../pages";
import { ComingSoon, Temoignages, Blogs, Favoris } from "../../components";

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={withRouter(Home)} />
    <Route exact path="/home" component={withRouter(Home)} />
    <Route exact path="/about" component={About} />
    <Route exact path="/faqs" component={Faqs} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/product/:id" component={Product} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/checkout" component={Checkout} />
    <Route exact path="/coming-soon" component={ComingSoon} />
    <Route exact path="/temoignages" component={Temoignages} />
    <Route exact path="/blogs" component={Blogs} />
    <Route exact path="/favoris" component={Favoris} />
    <Route component={Error404} />
  </Switch>
);

export default Routes;
