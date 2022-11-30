import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import BoardAdmin from './components/BoardAdmin';
// import BoardModerator from './components/BoardModerator';
// import BoardUser from './components/BoardUser';
// import Home from './components/Home';
// import Login from './components/Login';
// import Profile from './components/Profile';
// import Register from './components/Register';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import FaqPage from './pages/faq/FaqPage';
import LandingPage from './pages/landingPage/landingPage';
import DashboardPage from './pages/user/DashboardPage';
import DonateItemPage from './pages/user/DonateItemPage';
import FeedbackPage from './pages/user/FeedbackPage';
import HelpPage from './pages/user/HelpPage';
import KYCPage from './pages/user/KYCPage';
import MessagePage from './pages/user/MessagePage';
import PolicyPage from './pages/user/PolicyPage';
import RecentActivitiesPage from './pages/user/RecentActivitiesPage';
import RequestItemPage from './pages/user/RequestItemPage';
import SignInPage from './pages/user/SignInPage';
import SignUpPage from './pages/user/SignUpPage';

const RouterPage = () => (
  <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route exact path="/kyc" element={<KYCPage />} />
      <Route exact path="/dashboard/summary" element={<DashboardPage />} />
      <Route exact path="/dashboard/donate-item" element={<DonateItemPage />} />
      <Route exact path="/dashboard/request-item" element={<RequestItemPage />} />
      <Route exact path="/dashboard/message" element={<MessagePage />} />
      <Route exact path="/dashboard/recent-activities" element={<RecentActivitiesPage />} />
      <Route exact path="/dashboard/help" element={<HelpPage />} />
      <Route exact path="/dashboard/policy" element={<PolicyPage />} />
      <Route exact path="/dashboard/feedback" element={<FeedbackPage />} />
      <Route exact path="/faq" element={<FaqPage />} />
      <Route exact path="/about" element={<AboutPage />} />
      <Route exact path="/contact" element={<ContactPage />} />
      <Route exact path="*" element={<h1>PAGE NOT FOUND</h1>} />

      {/* <Route exact path="/home" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route path="/user" element={<BoardUser />} />
      <Route path="/mod" element={<BoardModerator />} />
      <Route path="/admin" element={<BoardAdmin />} /> */}
    </Routes>
  </>
);

export default RouterPage;
