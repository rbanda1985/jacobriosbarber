import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Appointment from "./components/Appointment";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />

      <Routes>
        <Route path="/" component={<Home />} element={<Home />} />
        <Route path="contact" component={<Contact />} element={<Contact />} />
        <Route
          path="/appointment"
          component={<Appointment />}
          element={<Appointment />}
        />
      </Routes>
    </div>
  );
}

export default App;
