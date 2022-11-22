import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FaqPage from './pages/faq/FaqPage';
import LandingPage from './pages/landingPage/landingPage';
import DashboardPage from './pages/user/DashboardPage';
import DonateItemPage from './pages/user/DonateItemPage';
import FeedbackPage from './pages/user/FeedbackPage';
import HelpPage from './pages/user/HelpPage';
import KYCPage from './pages/user/KYCPage';
import RecentActivitiesPage from './pages/user/RecentActivitiesPage';

const RouterPage = () => (
  <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route exact path="/kyc" element={<KYCPage />} />
      <Route exact path="/dashboard" element={<DashboardPage />} />
      <Route exact path="/dashboard/donate-item" element={<DonateItemPage />} />
      <Route exact path="/dashboard/request-item" element={<DashboardPage />} />
      <Route exact path="/dashboard/message" element={<DashboardPage />} />
      <Route exact path="/dashboard/recent-activities" element={<RecentActivitiesPage />} />
      <Route exact path="/dashboard/help" element={<HelpPage />} />
      <Route exact path="/dashboard/policy" element={<DashboardPage />} />
      <Route exact path="/dashboard/feedback" element={<FeedbackPage />} />
      <Route exact path="/faq" element={<FaqPage />} />
      <Route exact path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  </>
);

export default RouterPage;
