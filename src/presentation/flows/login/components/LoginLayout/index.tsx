import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';

import { LoginLayoutProps } from './types';
import LoginForm from '../LoginForm';

const LoginLayout: React.FC<LoginLayoutProps> = ({
  pageTitle,
  method,
  formik,
  handleMethodChange,
  handleCloseSnackBar,
  errorMessage,
}) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Box
        component="main"
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          minHeight: '100vh'
        }}
      >
        <Grid
          container
          sx={{ flex: '1 1 auto' }}
        >
          <Grid
            xs={12}
            lg={6}
            sx={{
              backgroundColor: 'background.paper',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
          >
            <LoginForm
              handleMethodChange={handleMethodChange}
              method={method}
              formik={formik}
              handleCloseSnackBar={handleCloseSnackBar}
              errorMessage={errorMessage}
            />
          </Grid>
          <Grid
            xs={12}
            lg={6}
            sx={{
              alignItems: 'center',
              background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              '& img': {
                maxWidth: '100%'
              }
            }}
          >
            <Box sx={{ p: 3 }}>
              <Typography
                align="center"
                color="inherit"
                sx={{
                  fontSize: '24px',
                  lineHeight: '32px',
                  mb: 1
                }}
                variant="h1"
              >
                Welcome to{' '}
                <Box
                  component="a"
                  sx={{ color: '#15B79E' }}
                  target="_blank"
                >
                  Devias Kit
                </Box>
              </Typography>
              <Typography
                align="center"
                sx={{ mb: 3 }}
                variant="subtitle1"
              >
                A professional kit that comes with ready-to-use MUI components.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  )
}

export default LoginLayout;