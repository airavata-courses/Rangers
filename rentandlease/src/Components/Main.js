import React, { PureComponent } from "react";
import Login from "../Pages/Login";
import HomePage from "../Pages/HomePage";
import AddListings from "../Pages/AddListings";
import ViewListings from "../Pages/ViewListings";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "../Pages/Register";
import store from "./store";
import { Provider } from "react-redux";

export class Main extends PureComponent {
  render() {
    return (
      <div>
        {/* <Provider store={store}> */}
        {/* <Router> */}
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/addListings" component={AddListings} />
          <Route exact path="/viewListings" component={ViewListings} />
          <Route exact path="/register" component={Register} />
        </div>
        {/* </Router> */}
        {/* </Provider> */}
      </div>
    );
  }
}

export default Main;
