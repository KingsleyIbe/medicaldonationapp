import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage';
import KYCPage from './pages/user/KYCPage';
import ProfilePage from './pages/user/ProfilePage';

const RouterPage = () => (
  <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route exact path="/kyc" element={<KYCPage />} />
      <Route exact path="/dashboard" element={<ProfilePage />} />
      <Route exact path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  </>
);

export default RouterPage;
