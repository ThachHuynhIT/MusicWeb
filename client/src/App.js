import React from "react";
import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { PublicRoutes, PrivateRoutes, AuthRoutes } from "./routes";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import DefaultUserLayout from "./components/Layouts/DefaultUserLayout";
import DefaultAccountLayout from "./components/Layouts/DefaultAccountLayout";
import config from "./config";
import * as UserServices from "./service/userService";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    UserServices.isAuthen().then((data) => {
      setAuthenticated(data.isAuthenticated);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {PublicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {AuthRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  isAuthenticated ? (
                    <Navigate to={config.home} replace={true} />
                  ) : (
                    <Layout>
                      <Page />
                    </Layout>
                  )
                }
              />
            );
          })}
          {PrivateRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  isAuthenticated ? (
                    <Layout>
                      <Page />
                    </Layout>
                  ) : (
                    <Navigate to={config.userLogin} replace={true} />
                  )
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
