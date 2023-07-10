import React, { useContext, useEffect } from 'react';
import { RouteProps, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

interface PrivateRouteProps extends Omit<RouteProps, 'element'> {
  isPrivate?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isPrivate }) => {
  const { authToken } = useContext(AuthContext);  

  useEffect(() => {    
    if (isPrivate) {
      if (!authToken) {
        window.location.replace('/');
      }
    }
  }, [authToken, isPrivate]);

  return <Outlet />;
};

export default PrivateRoute;
