import React from 'react'
import { Link } from 'react-router-dom';
import { 
  Alert,
  Box,
  Button,
  Snackbar,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';

import { LoginFormProps } from './types';

const LoginForm: React.FC<LoginFormProps> = ({
  method,
  formik,
  handleMethodChange,
  handleCloseSnackBar,
  errorMessage,
}) => {

  const renderError = () => {
    return (
      <Snackbar
        open={errorMessage.open}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        onClose={handleCloseSnackBar}
      >
        <Alert severity="error" variant='filled'>
          {errorMessage.message}
        </Alert>
      </Snackbar>
    )
  }

  
  const renderForm = () => {
    return (
      <React.Fragment>
        <Box
          sx={{
            backgroundColor: 'background.paper',
            flex: '1 1 auto',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              maxWidth: 550,
              px: 3,
              py: '100px',
              width: '100%'
            }}
          >
            <div>
              <Stack
                spacing={1}
                sx={{ mb: 3 }}
              >
                <Typography variant="h4">
                  Login
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Don&apos;t have an account?
                  &nbsp;
                  <Link
                    to="/auth/register"
                  >
                    Register
                  </Link>
                </Typography>
              </Stack>
              <Tabs
                onChange={handleMethodChange}
                sx={{ mb: 3 }}
                value={method}
              >
                <Tab
                  label="E-mail"
                  value="email"
                />
                <Tab
                  label="Celular"
                  value="phoneNumber"
                />
              </Tabs>
              {method === 'email' && (
                <form
                  noValidate
                  onSubmit={formik.handleSubmit}
                >
                  <Stack spacing={3}>
                    <TextField
                      error={!!(formik.touched.email && formik.errors.email)}
                      fullWidth
                      helperText={formik.touched.email && formik.errors.email}
                      label="E-mail"
                      name="email"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="email"
                      value={formik.values.email}
                    />
                    <TextField
                      error={!!(formik.touched.password && formik.errors.password)}
                      fullWidth
                      helperText={formik.touched.password && formik.errors.password}
                      label="Senha"
                      name="password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="password"
                      value={formik.values.password}
                    />
                  </Stack>
                  <Button
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    type="submit"
                    variant="contained"
                  >
                    Continue
                  </Button>
                  <Button
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                  >
                    Skip authentication
                  </Button>
                  <Alert
                    severity="info"
                    sx={{ mt: 3 }}
                  >
                    <div>
                      Você pode utilizar <b>eve.holt@reqres.in</b> e senha <b>Password123!</b>
                    </div>
                  </Alert>
                </form>
              )}
              {method === 'phoneNumber' && (
                <div>
                  <Typography
                    sx={{ mb: 1 }}
                    variant="h6"
                  >
                    Not available in the demo
                  </Typography>
                  <Typography color="text.secondary">
                    To prevent unnecessary costs we disabled this feature in the demo.
                  </Typography>
                </div>
              )}
            </div>
          </Box>
        </Box>
      </React.Fragment>
    )
  }
  return <React.Fragment>
    {renderForm()}
    {renderError()}
  </React.Fragment>;
};

export default LoginForm;