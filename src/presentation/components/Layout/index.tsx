import React from 'react'

import { LayoutProps } from './types';
import { styled } from '@mui/material';

const Layout: React.FC<LayoutProps> = ({children}) => {
  const SIDE_NAV_WIDTH = 280;

  const LayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    maxWidth: '100%',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: SIDE_NAV_WIDTH
    }
  }));
  
  return <LayoutRoot>
    {children}
  </LayoutRoot>;
};

export default Layout;