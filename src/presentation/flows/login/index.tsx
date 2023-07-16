import { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { AuthContext } from '../../../contexts/AuthContext';
import { authenticate } from '../../../services/authenticateService';
import { RoutesEnum, RoutesNameEnum } from '../../../routes/routePathsEnum';

import LoginLayout from './components/LoginLayout';

const LoginPage: React.FC = () => {
  const { setToken } = useContext(AuthContext);
  const [method, setMethod] = useState('email');
  const [errorMessage, setErrorMessage] = useState<{ open: boolean; message: string}>({
    open: false,
    message: ''
  });

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values) => {
      const { token, error } = await authenticate(values);
      if (token) {
        setToken(token);
        localStorage.setItem('userToken', token);
        navigate(RoutesEnum.TABLE);
      }
      if (error) {
        setErrorMessage({
          open: true,
          message: error.message,
        });
      }
    }
  });

  const handleMethodChange = useCallback(
    (_event: React.SyntheticEvent<Element>, value: string) => {
      setMethod(value);
    },
    []
  );
  
  return (
    <LoginLayout
      pageTitle={RoutesNameEnum.LOGIN}
      method={method}
      formik={formik}
      handleMethodChange={handleMethodChange}
      handleCloseSnackBar={() => {
        setErrorMessage({
          open: false,
          message: '',
        })
      }}
      errorMessage={errorMessage}
    />
  )
}

export default LoginPage;