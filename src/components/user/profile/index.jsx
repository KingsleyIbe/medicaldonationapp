import { useAuth0 } from '@auth0/auth0-react';
import Header from '../../common/Header';
import SideBar from '../dashboard/SideBar';
import Profile from './Profile';

const UserProfile = () => {
  const { isLoading, error } = useAuth0();
  return (
    <>
      {error && <h1 className="text-center mt-[200px]">Authentication Error</h1>}
      {!error && isLoading && <h1 className="text-center mt-[200px]">Loading...</h1>}
      {!error && !isLoading && (
        <div>
          <Header />
          <SideBar />
          <div className="flex flex-col items-center justify-center">
            <Profile />
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
