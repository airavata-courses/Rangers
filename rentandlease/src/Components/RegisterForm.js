import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "react-bootstrap";

let RegisterForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="contactNumber">Contact Number</label>
        <Field name="contactNumber" component="input" type="number" />
      </div>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </form>
  );
};

RegisterForm = reduxForm({ form: "Login" })(RegisterForm);

export default RegisterForm;
