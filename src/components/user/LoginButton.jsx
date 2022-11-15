import { useAuth0 } from '@auth0/auth0-react';

import React from 'react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <button type="button" onClick={() => loginWithRedirect()}>Sign in</button>
    )
  );
};

export default LoginButton;
