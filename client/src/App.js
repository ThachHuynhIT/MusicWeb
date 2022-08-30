import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./routes";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import songs from "D:/WEB/reactjs/MusicWeb/client/src/data/songs.json";
import albums from "D:/WEB/reactjs/MusicWeb/client/src/data/albums.json";

function App() {
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
