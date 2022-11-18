import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FaqPage from './pages/faq/FaqPage';
import LandingPage from './pages/landingPage/landingPage';
import DashboardPage from './pages/user/DashboardPage';
import KYCPage from './pages/user/KYCPage';

const RouterPage = () => (
  <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route exact path="/kyc" element={<KYCPage />} />
      <Route exact path="/dashboard" element={<DashboardPage />} />
      <Route exact path="/faq" element={<FaqPage />} />
      <Route exact path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  </>
);

export default RouterPage;
