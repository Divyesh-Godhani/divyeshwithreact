import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function RegistrationForm() {
    const initialValues = {
        username: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        birthDate: '',
        captcha: '',
      };

      const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    
      const validationSchema = Yup.object().shape({
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Required'),
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        mobile: Yup.string().required('Required').matches(phoneRegExp, 'Phone number is not valid'),
        birthDate: Yup.date().required('Required'),
        captcha: Yup.string().required('Required'),
      });
    
      const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      };
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="max-w-md mx-auto p-6 border rounded-lg shadow-lg">
        <div>
          <label htmlFor="username" className="block mb-1">Username</label>
          <Field type="text" name="username" className="w-full p-2 border rounded" />
          <ErrorMessage name="username" component="div" className="error text-red-600" />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <Field type="password" name="password"  className="w-full p-2 border rounded" />
          <ErrorMessage name="password" component="div" className="error text-red-600" />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
          <Field type="password" name="confirmPassword"  className="w-full p-2 border rounded" />
          <ErrorMessage name="confirmPassword" component="div" className="error text-red-600" />
        </div>

        <div>
          <label htmlFor="firstName" className="block mb-1">First Name</label>
          <Field type="text" name="firstName"  className="w-full p-2 border rounded" />
          <ErrorMessage name="firstName" component="div" className="error text-red-600" />
        </div>

        <div>
          <label htmlFor="lastName" className="block mb-1">Last Name</label>
          <Field type="text" name="lastName"  className="w-full p-2 border rounded" />
          <ErrorMessage name="lastName" component="div" className="error text-red-600" />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <Field type="email" name="email"  className="w-full p-2 border rounded" />
          <ErrorMessage name="email" component="div" className="error text-red-600" />
        </div>

        <div>
          <label htmlFor="mobile" className="block mb-1">Mobile</label>
          <Field type="tel" name="mobile"  className="w-full p-2 border rounded" />
          <ErrorMessage name="mobile" component="div" className="error text-red-600" />
        </div>

        <div>
          <label htmlFor="birthDate" className="block mb-1">Birth Date</label>
          <Field type="date" name="birthDate"  className="w-full p-2 border rounded" />
          <ErrorMessage name="birthDate" component="div" className="error text-red-600" />
        </div>

        <div>
          <label htmlFor="captcha" className="block mb-1">Captcha</label>
          <Field type="text" name="captcha"  className="w-full p-2 border rounded" />
          <ErrorMessage name="captcha" component="div" className="error text-red-600" />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">Register</button>
      </Form>
    </Formik>
  )
}
