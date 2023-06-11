/* eslint-disable */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRouteElement({ isLoggedIn, children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate('/', { replace: true });
    }
  }, [isLoggedIn]);

  return children;
};

export default ProtectedRouteElement;

