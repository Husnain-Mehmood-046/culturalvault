import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Auth Pages
import AdminLogin from "./pages/AdminLogin";
import GuideLogin from "./pages/GuideLogin";

// Protected Route Components
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import ProtectedGuideRoute from "./components/ProtectedGuideRoute";

// Public/User Pages
import AuthPage from "./pages/AuthPage";
import CitySelection from "./pages/CitySelection";
import LahoreOptions from "./pages/LahoreOptions";
import LahoreSites from "./pages/LahoreSites";
import AboutUs from "./pages/AboutUs";
import TourBooking from "./pages/TourBooking";
import MyBookings from "./pages/MyBookings";
import LahoreEvents from "./pages/LahoreEvents";

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

// Admin Layout & Pages
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import ManageCities from "./pages/ManageCities";
import ManageSites from "./pages/ManageSites";
import ManageAgents from "./pages/ManageAgents";
import Bookings from "./pages/Bookings";

// Guide Layout & Pages
import GuideLayout from "./components/GuideLayout";
import GuideDashboard from "./pages/GuideDashboard";
import GuideAvailability from "./pages/GuideAvailability";
import GuideBookings from "./pages/GuideBookings";
import GuideCalendar from "./pages/GuideCalendar";
import GuideSchedule from "./pages/GuideSchedule";

function App() {
  return (
    <Router>
      <Routes>
        {/* Root - Redirect to City Selection for public users */}
        <Route path="/" element={<CitySelection />} />

        {/* Public/User pages */}
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/city-selection" element={<CitySelection />} />
        <Route path="/lahore-options" element={<LahoreOptions />} />
        <Route path="/lahore-sites" element={<LahoreSites />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/book-tour" element={<TourBooking />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/tour-booking" element={<TourBooking />} />
        <Route path="/lahore-events" element={<LahoreEvents />} />

        {/* Site Detail Pages */}
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

        {/* Admin Login (Public) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Routes (Protected) */}
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminLayout />
            </ProtectedAdminRoute>
          }
        >
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="manage-cities" element={<ManageCities />} />
          <Route path="manage-sites" element={<ManageSites />} />
          <Route path="manage-agents" element={<ManageAgents />} />
          <Route path="bookings" element={<Bookings />} />
        </Route>

        {/* Guide Login (Public) */}
        <Route path="/guide/login" element={<GuideLogin />} />

        {/* Guide Routes (Protected) */}
        <Route
          path="/guide"
          element={
            <ProtectedGuideRoute>
              <GuideLayout />
            </ProtectedGuideRoute>
          }
        >
          <Route index element={<Navigate to="/guide/dashboard" replace />} />
          <Route path="dashboard" element={<GuideDashboard />} />
          <Route path="availability" element={<GuideAvailability />} />
          <Route path="bookings" element={<GuideBookings />} />
          <Route path="calendar" element={<GuideCalendar />} />
          <Route path="schedule" element={<GuideSchedule />} />
        </Route>

        {/* Catch all - redirect to city selection */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;