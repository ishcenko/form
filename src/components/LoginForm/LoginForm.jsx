import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValue = {
  login: '',
  password: '',
};
export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Field type="text" name="login" placeholder="Email" />
          <ErrorMessage name="login" component="div" />
        </label>
        <br />
        <label htmlFor="password">
          Password
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default LoginForm;
