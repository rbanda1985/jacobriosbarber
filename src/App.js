import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Location from "./components/Location";
import Services from "./components/Services";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" component={<Home />} element={<Home />} />
        <Route path="contact" component={<Location />} element={<Location />} />
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
