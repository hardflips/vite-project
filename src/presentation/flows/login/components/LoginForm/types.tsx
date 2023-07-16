import { FormikValues } from "formik";

export interface LoginFormProps {
  method: string;
  formik: FormikValues;
  handleMethodChange: (_event: React.SyntheticEvent<Element>, value: string) => void;
  handleCloseSnackBar: () => void;
  errorMessage: {
    open: boolean;
    message: string;
  };
}