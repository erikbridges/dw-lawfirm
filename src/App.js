import React, { Fragment } from "react";
import Navbar from "./partials/Navbar/Navbar";
import Footer from "./partials/Footer/Footer";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./containers/Home";
import Aboutpage from "./containers/About";
import Contactpage from "./containers/Contact";



function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/about" component={Aboutpage} />
          <Route path="/contact" component={Contactpage} />
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
