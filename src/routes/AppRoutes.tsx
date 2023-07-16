import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginLayout from '../presentation/flows/login'
import CardPage from '../presentation/flows/cards'
import TablePage from '../presentation/flows/table'
import EmptyPage from '../presentation/flows/empty'
import SideNav from '../presentation/components/SideNav'
import PrivateRoute from './privateRoute'
import { RoutesEnum } from './routePathsEnum'
import { AuthContext } from '../contexts/AuthContext'

const AppRoutes: React.FC = () => {
  const { authToken } = useContext(AuthContext);

  const renderRoutes = () => (
    <BrowserRouter>
      {authToken ? <SideNav /> : null }
      <Routes>
        <Route
          key={RoutesEnum.TABLE}
          element={<PrivateRoute isPrivate />}
          path={RoutesEnum.TABLE}
        >
          <Route path={RoutesEnum.TABLE} element={<TablePage />} />
        </Route>
        <Route
          key={RoutesEnum.CARDS}
          element={<PrivateRoute isPrivate />}
          path={RoutesEnum.CARDS}
        >
          <Route path={RoutesEnum.CARDS} element={<CardPage />} />
        </Route>
        <Route path="*" element={<EmptyPage />} />
        {!authToken ? (
          <Route path={RoutesEnum.LOGIN} element={<LoginLayout />} />
        ) : (
          <Route path="/" element={<TablePage />} />
        )}
      </Routes>
    </BrowserRouter>
  );

  return renderRoutes();
};

export default AppRoutes;