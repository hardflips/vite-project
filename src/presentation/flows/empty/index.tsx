/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from 'react'
import { Typography, Box } from '@mui/material';
import { Helmet } from 'react-helmet-async'

import { RoutesNameEnum } from '../../../routes/routePathsEnum';
import { Wrapper } from './styles';

const EmptyPage: React.FC = () => {

  const renderForm = () => {
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
    {renderForm()}
  </React.Fragment>;
};

export default EmptyPage;