/* eslint-disable react/no-array-index-key */
import { useAuth0 } from '@auth0/auth0-react';
import { object } from 'prop-types';

import React from 'react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <article>
        {user?.picture && <img src={user.picture} alt={user?.name} />}
        <h2>{user?.name}</h2>
        <ul>
          {object.keys(user).map((objKey, i) => (
            <li key={i}>
              {objKey}
              :
              {' '}
              {user[objKey]}
            </li>
          ))}
        </ul>
      </article>
    )
  );
};

export default Profile;
