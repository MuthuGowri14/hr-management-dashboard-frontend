import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const EmployeeForm = ({ employee, onSubmit }) => {
  return (
    <Formik
      initialValues={employee || { name: '', position: '', department: '', email: '', phone: '' }}
      onSubmit={async (values) => {
        try {
          // Make an API request to submit the form data
          const response = await axios.post('/api/employees', values);
          console.log('Employee data submitted:', response.data);
          
          // Optionally, call the passed onSubmit function if needed
          if (onSubmit) {
            await onSubmit(values);
          }
        } catch (error) {
          console.error('Error submitting employee data:', error);
        }
      }}
    >
      <Form>
        <Field name="name" placeholder="Name" required />
        <Field name="position" placeholder="Position" required />
        <Field name="department" placeholder="Department" required />
        <Field name="email" placeholder="Email" required />
        <Field name="phone" placeholder="Phone" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default EmployeeForm;
