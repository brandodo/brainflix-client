import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage, Header, UploadPage } from "./components/index";
import { API_URL } from "./config/config.js";
import "./styles/App.scss";

const BACKEND_API_URL = API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export default class App extends Component {
  render() {
    console.log(BACKEND_API_URL);
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => (
              <HomePage
                BACKEND_API_URL={BACKEND_API_URL}
                API_KEY={API_KEY}
                {...routerProps}
              />
            )}
          />
          <Route
            path="/video/:id"
            render={(routerProps) => (
              <HomePage
                BACKEND_API_URL={BACKEND_API_URL}
                API_KEY={API_KEY}
                {...routerProps}
              />
            )}
          />
          <Route
            path="/upload"
            render={(routerProps) => (
              <UploadPage
                BACKEND_API_URL={BACKEND_API_URL}
                API_KEY={API_KEY}
                {...routerProps}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
