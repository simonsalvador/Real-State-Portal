import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Properties from "../components/Properties/Properties";
import Buy from "../components/Header/Buy/Buy";
import Rent from "../components/Header/Rent/Rent";
import Sell from "../components/Header/Sell/Sell";
import Agencies from "../components/Header/Agencies/Agencies";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Properties />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/agencies" element={<Agencies />} />
    </Routes>
  </Router>
);

export default AppRouter;
