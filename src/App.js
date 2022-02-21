import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Location from "./components/Location";
import Services from "./components/Services";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const location = {
    address: "3424 Oak Lawn Ave, Dallas, TX. 75219",
    lat: 32.811602,
    lng: -96.805879
  };
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" component={<Home />} element={<Home />} />
        <Route
          path="/location"
          component={<Location />}
          element={<Location location={location} zoomLevel={17} />}
        />
        <Route
          path="/services"
          component={<Services />}
          element={<Services />}
        />
      </Routes>
    </div>
  );
}

export default App;
