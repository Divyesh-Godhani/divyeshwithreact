import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function LoginForm() {
    const initialValues = {
        username: '',
        password: '',
        captcha: '',
      };
    
      const validationSchema = Yup.object().shape({
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
        captcha: Yup.string().required('Required'),
      });
    
      const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      };
  return (
   <>
   <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="max-w-md mx-auto p-6 border rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">Username</label>
          <Field type="text" name="username" className="w-full p-2 border rounded" />
          <ErrorMessage name="username" component="div" className="error text-red-600" />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password</label>
          <Field type="password" name="password" className="w-full p-2 border rounded" />
          <ErrorMessage name="password" component="div" className="error text-red-600" />
        </div>

        <div className="mb-4">
          <label htmlFor="captcha" className="block mb-1">Captcha</label>
          <Field type="text" name="captcha" className="w-full p-2 border rounded" />
          <ErrorMessage name="captcha" component="div" className="error text-red-600" />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">Login</button>
      </Form>
    </Formik>
   </>
  )
}
