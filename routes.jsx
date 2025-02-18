import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import RegisterPage from "./pages/RegisterPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
