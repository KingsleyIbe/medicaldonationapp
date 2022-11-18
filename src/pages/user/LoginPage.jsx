import React from 'react';
import LoginButton from '../../components/user/LoginButton';
import LogoutButton from '../../components/user/LogoutButton';
import Profile from '../../components/user/Profile';

const LoginPage = () => (
  <div>
    <LoginButton />
    <LogoutButton />
    <Profile />
  </div>
);

export default LoginPage;
