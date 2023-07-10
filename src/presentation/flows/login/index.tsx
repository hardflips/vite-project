/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom';
import { Alert, Box, Button, Snackbar, TextField, Typography } from '@mui/material';
import * as yup from 'yup';

import { RoutesEnum, RoutesNameEnum } from '../../../routes/routePathsEnum';
import { authenticate } from '../../../services/authenticateService';
import { AuthContext } from '../../../contexts/AuthContext';

import { Wrapper, FieldWrapper } from './styles';
import { Field, FieldProps, Formik, FormikHelpers } from 'formik';

interface FormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { setToken } = useContext(AuthContext);
  const [erroMessage, setErrorMessage] = useState<string>('');
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
  });

  const handleSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    console.log(values);
    setErrorMessage('');
    const { token, error } = await authenticate(values);
    if (!error && token) {
      setToken(token);
      localStorage.setItem('userToken', token);
      navigate(RoutesEnum.TABLE);
    }
    if (error) {
      setErrorMessage(error?.message);
      setOpenSnackBar(true);
    }
    actions.setSubmitting(false);
  };

  const renderError = () => {
    return (
      <Snackbar
        open={openSnackBar}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        onClose={() => {
          setOpenSnackBar(false);
        }}
      >
        <Alert severity="error" sx={{ width: '100%' }}>
          {erroMessage}
        </Alert>
      </Snackbar>
    )
  }

  const renderForm = () => {
    return (
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <Wrapper>
          <Typography variant='h5'>
            Bem-vindo!
          </Typography>
          <Typography variant='subtitle2' component="small" paddingBottom={2}>
            Insira seus dados abaixo:
          </Typography>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isValid, handleSubmit, errors, touched }) => (
              <React.Fragment>
                <Field name="email">
                  {({ field }: FieldProps<FormValues['email']>) => (
                    <FieldWrapper>
                      <TextField
                        {...field}
                        label="Email"
                        fullWidth
                        error={touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                      />
                    </FieldWrapper>
                  )}
                </Field>
                <Field name="password">
                  {({ field }: FieldProps<FormValues['password']>) => (
                    <FieldWrapper>
                      <TextField
                        {...field}
                        label="Senha"
                        fullWidth
                        type="password"
                        error={touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                      />
                    </FieldWrapper>
                  )}
                </Field>
                <Button
                  variant="contained"
                  disabled={!isValid}
                  color="primary"
                  onClick={() => { void handleSubmit()}}
                >
                  Entrar
                </Button>
              </React.Fragment>
            )}
          </Formik>
          <Typography variant='body1' component="small" sx={{marginTop: 2}}>
            E-mail: eve.holt@reqres.in
          </Typography>
          {erroMessage ? renderError() : null}
        </Wrapper>
      </Box>
    )
  }
  return <React.Fragment>
    <Helmet>
      <title>{RoutesNameEnum.LOGIN}</title>
    </Helmet>
    {renderForm()}
  </React.Fragment>;
};

export default LoginPage;