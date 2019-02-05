import React, { Component } from "react";
import values from "redux-form/lib/values";
import RegisterForm from "../Components/RegisterForm";
import ConfirmOTP from "../Components/ConfirmOTP";
import { Modal, Button } from "react-bootstrap";
import { getApi, postApi } from "../Common/api";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      showModal: false,
      otp: "",
      validationerror: {
        firstName: null,
        lastName: null,
        email: null,
        contactNumber: null,
        otp: null
      }
    };
  }

  validate = (key, value) => {
    let error = {
      firstName: null,
      lastName: null,
      email: null,
      contactNumber: null
    };
    console.log(key);
    console.log(value);
    if (key == "firstName") {
      if (value == "") {
        error.firstName = "First name is required";
      }
    }

    if (key == "lastName") {
      if (value == "") {
        error.lastName = "Last name is required";
      }
    }

    if (key == "email") {
      if (value == "") {
        error.email = "Email address is required";
      }
    }

    return error;
  };

  onValidationOtp = data => {
    if (data == "true") {
      let postdata = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        contactNumber: this.state.contactNumber
      };
      postApi(
        "url",
        data => {
          this.props.history.push("/home");
        },
        err => {},
        postdata
      );
    } else {
      let error = {
        firstName: null,
        lastName: null,
        email: null,
        contactNumber: null,
        otp: "Invalid OTP"
      };
      this.setState({ validationerror: error });
    }
  };
  verifyOTP = () => {
    console.log("veriy otp");
    // getApi("url", "GET", data => this.onValidationOtp(data), error => {});
    postApi("url", data => this.onValidationOtp(data), error => {});
  };

  handleChange = event => {
    let error = this.validate(event.target.name, event.target.value);

    this.setState({
      otp: event.target.value,
      validationerror: error,
      [event.target.name]: event.target.value
    });
  };

  submit = event => {
    event.preventDefault();
    this.setState({ showModal: true });
    console.log(values);
  };

  render() {
    return (
      <div>
        {/* <RegisterForm onSubmit={this.submit} /> */}
        <form onSubmit={event => this.submit(event)}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          {this.state.validationerror.firstName && (
            <div>{this.state.validationerror.firstName}</div>
          )}
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          {this.state.validationerror.lastName && (
            <div>{this.state.validationerror.lastName}</div>
          )}
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          {this.state.validationerror.email && (
            <div>{this.state.validationerror.email}</div>
          )}
          <div>
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              name="contactNumber"
              type="text"
              value={this.state.contactNumber}
              onChange={this.handleChange}
            />
          </div>
          {this.state.validationerror.contactNumber && (
            <div>{this.state.validationerror.contactNumber}</div>
          )}
          <Button variant="primary" onClick={event => this.submit(event)}>
            Register
          </Button>
        </form>
        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Verify OTP</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            OTP :
            <input
              name="otp"
              type="text"
              value={this.state.otp}
              onChange={this.handleChange}
            />
            {this.state.validationerror.otp && (
              <div>{this.state.validationerror.otp}</div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.verifyOTP}>
              Validate
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Register;
