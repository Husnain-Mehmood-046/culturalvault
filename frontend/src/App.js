import React from "react";
import { Routes, Route } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import CitySelection from "./pages/CitySelection";
import LahoreOptions from "./pages/LahoreOptions";
import LahoreSites from "./pages/LahoreSites";

// Site pages
import BadshahiMosque from "./pages/BadshahiMosque";
import LahoreFort from "./pages/LahoreFort";
import Minar from "./pages/Minar";
import Shalimar from "./pages/Shalimar";
import Museum from "./pages/Museum";
import WazirKhan from "./pages/WazirKhan";
import FoodStreet from "./pages/FoodStreet";
import WalledCity from "./pages/WalledCity";
import WaghaBorder from "./pages/WaghaBorder";
import Tomb from "./pages/Tomb";
import Bagh from "./pages/Bagh";
import Anarkali from "./pages/Anarkali";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/city-selection" element={<CitySelection />} />
      <Route path="/lahore-options" element={<LahoreOptions />} />
      <Route path="/lahore-sites" element={<LahoreSites />} />

      <Route path="/badshahi-mosque" element={<BadshahiMosque />} />
      <Route path="/lahore-fort" element={<LahoreFort />} />
      <Route path="/minar-e-pakistan" element={<Minar />} />
      <Route path="/shalimar-gardens" element={<Shalimar />} />
      <Route path="/lahore-museum" element={<Museum />} />
      <Route path="/wazir-khan-mosque" element={<WazirKhan />} />
      <Route path="/food-street" element={<FoodStreet />} />
      <Route path="/walled-city" element={<WalledCity />} />
      <Route path="/wagha-border" element={<WaghaBorder />} />
      <Route path="/jahangir-tomb" element={<Tomb />} />
      <Route path="/bagh-e-jinnah" element={<Bagh />} />
      <Route path="/anarkali-bazaar" element={<Anarkali />} />
    </Routes>
  );
}

export default App;
