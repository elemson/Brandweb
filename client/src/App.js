import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Footer from "./components/layout/Footer";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Navigation from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navigation />
          <div className="App">
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
        </Router>
      </Provider>
      <Footer />
    </>
  );
}

export default App;
