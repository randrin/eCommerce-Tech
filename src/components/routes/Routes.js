import React from "react";
import {
  About,
  Cart,
  Contact,
  Error404,
  Home,
  Product,
  Products,
  Faqs,
} from "../../pages";
import { Route, Switch } from "react-router-dom";

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/faqs" component={Faqs} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/product/:id" component={Product} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/cart" component={Cart} />
    <Route component={Error404} />
  </Switch>
);

export default Routes;
