import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Button } from "react-bootstrap";
import withRouter from "react-router-dom/withRouter";

let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <Button
        variant="primary"
        onClick={() => this.props.history.push("/register")}
      >
        Register
      </Button>
    </form>
  );
};

LoginForm = compose(
  withRouter,
  reduxForm({ form: "Login" })
)(LoginForm);

export default LoginForm;
