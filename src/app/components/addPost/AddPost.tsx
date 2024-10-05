import { useEffect } from 'react';

import useAuth from '../../hooks/useAuth';

const AddPost = () => {
  const { authorising, checkingAuth, checkAuthStatus } = useAuth();

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  return (
    <>
      {authorising || checkingAuth ? (
        <p className="preloader">Authorising...</p>
      ) : (
        <>
          <h1>Admin Page</h1>
          <p>Welcome to the administration section!</p>
        </>
      )}
    </>
  );
};

export default AddPost;
