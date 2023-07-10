import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { RoutesEnum, RoutesNameEnum } from '../../../routes/routePathsEnum';
import { AuthContext } from '../../../contexts/AuthContext';

const MenuBar: React.FC = () => {
  const { authToken, setLogout } = useContext(AuthContext);
  const location = useLocation();
  const handleLogout = () => {
    setLogout();
  }
  return <Grid container paddingBottom={2} gap={2}>
    {authToken && (
      <React.Fragment>
        <Link to={RoutesEnum.TABLE}>
          <Button
            variant={location.pathname === RoutesEnum.TABLE || location.pathname === '/' ? 'contained' : 'text'}
            >
              {RoutesNameEnum.TABLE}
            </Button>
        </Link>
        <Link to={RoutesEnum.CARDS}>
          <Button
            variant={location.pathname === RoutesEnum.CARDS ? 'contained' : 'text'}
          >
            {RoutesNameEnum.CARDS}
          </Button>
        </Link>
        <Button sx={{ marginLeft: 'auto'}} variant='text' onClick={handleLogout}>Sair</Button>
      </React.Fragment>
    )}
  </Grid>
};

export default MenuBar;