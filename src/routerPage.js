import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ForgotPassword from './pages/auth/forgotPassword';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ResetPassword from './pages/auth/resetPassword';
import Dashboard from './pages/dashboard/Dashboard';
import DonorPage from './pages/Donor/DonorPage';
import LandingPage from './pages/landingPage/landingPage';
import PatientPage from './pages/Patient/PatientPage';

export default function RouterPage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/donor" element={<DonorPage />} />
        <Route exact path="/patient" element={<PatientPage />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}
