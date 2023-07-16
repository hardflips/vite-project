import React from 'react'
import { Typography, Box } from '@mui/material';
import { Helmet } from 'react-helmet-async'

import { RoutesNameEnum } from '../../../routes/routePathsEnum';
import { Wrapper } from './styles';

const EmptyPage: React.FC = () => {

  const renderContent = () => {
    return (
      <Box>
        <Wrapper>
          <Typography variant='h5' paddingBottom={2}>
            404 - Página não encontrada
          </Typography>
        </Wrapper>
      </Box>
    )
  }
  return <React.Fragment>
    <Helmet>
      <title>{RoutesNameEnum.NOT_FOUND}</title>
    </Helmet>
    {renderContent()}
  </React.Fragment>;
};

export default EmptyPage;