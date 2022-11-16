import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import ForgotPassword from './pages/auth/forgotPassword';
// import Login from './pages/auth/login';
// import Register from './pages/auth/register';
// import ResetPassword from './pages/auth/resetPassword';
// import Dashboard from './pages/dashboard/Dashboard';
// import DonorPage from './pages/Donor/DonorPage';
import LandingPage from './pages/landingPage/landingPage';
import KYCPage from './pages/user/KYCPage';
// import PatientPage from './pages/Patient/PatientPage';

const RouterPage = () => (
  <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route exact path="/kyc" element={<KYCPage />} />
      <Route exact path="*" element={<h1>PAGE NOT FOUND</h1>} />
      {/* <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/donor" element={<DonorPage />} />
      <Route exact path="/patient" element={<PatientPage />} />
      <Route exact path="/resetpassword" element={<ResetPassword />} />
      <Route exact path="/forgotpassword" element={<ForgotPassword />} /> */}
    </Routes>
  </>
);

export default RouterPage;
