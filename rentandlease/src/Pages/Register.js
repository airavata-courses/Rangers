import React, { Component } from "react";
import values from "redux-form/lib/values";
import RegisterForm from "../Components/RegisterForm";
import ConfirmOTP from "../Components/ConfirmOTP";
import { Button, Form, Modal } from "react-bootstrap";
import { getApi, postApi } from "../Common/api";
import { registerUser } from "../Actions/UserActions";
import { connect } from "react-redux";
import validator from "validator";
import "./Register.css";

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
      password: "",
      validationerror: {
        firstName: null,
        lastName: null,
        email: null,
        contactNumber: null,
        otp: null,
        password: null
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
      if (!validator.isEmail(value)) {
        error.email = "Email address is invalid";
      }
    }

    return error;
  };

  onValidationOtp = data => {
    let postdata = {
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      email: this.state.email,
      phone: this.state.contactNumber,
      password: this.state.password
    };
    // let url = `http://149.165.171.144:30012/users`;
    let url = `http://149.165.171.144:30012/users`;
    postApi(
      url,
      data => {
        this.props.registerUser(data.user);
        this.props.history.push("/home");
      },
      err => {},
      postdata
    );
  };
  verifyOTP = () => {
    console.log("veriy otp");
    // getApi("url", "GET", data => this.onValidationOtp(data), error => {});
    let url = `http://149.165.171.144:30012/validateOTP`;
    let postData = {
      email: this.state.email,
      otp: this.state.otp
    };

    console.log("verify otp post data", postData);
    postApi(
      url,
      data => this.onValidationOtp(data),
      error => {
        let errorObj = {
          firstName: null,
          lastName: null,
          email: null,
          contactNumber: null,
          otp: "Invalid OTP"
        };
        this.setState({ validationerror: errorObj });
        console.log(`error in verify otp`, error);
      },
      postData
    );
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

    let error = {
      firstName: null,
      lastName: null,
      email: null,
      contactNumber: null,
      password: null
    };

    if (this.state.firstName == "") {
      error.firstName = "First name is required";
    }

    if (this.state.lastName == "") {
      error.lastName = "Last name is required";
    }

    if (this.state.email == "") {
      error.email = "Email address is required";
    }

    if (this.state.password == "") {
      error.password = "Password is required";
    }

    if ((this.state.email != "") & !validator.isEmail(this.state.email)) {
      error.email = "Email address is invalid";
    }

    if (error.firstName || error.lastName || error.email || error.password) {
      this.setState({ validationerror: error });
    } else {
      // let url = `http://149.165.171.144:30012/sendOTP`;
      let createUserUrl = `http://149.165.171.144:30012/users`;
      let postdata = {
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        email: this.state.email,
        phone: this.state.contactNumber,
        password: this.state.password
      };
      console.log("post data after register", postdata);
      postApi(
        createUserUrl,
        data => {
          this.props.registerUser(postdata);
          this.props.history.push("/viewListings");
        },
        err => {
          console.log(`error while generating otp`);
        },
        postdata
      );
    }

    console.log(values);
  };

  render() {
    return (
      <div className="Register">
        {/* <RegisterForm onSubmit={this.submit} /> */}
        <form onSubmit={event => this.submit(event)}>
          {/* <div>
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div> */}
          <Form.Group controlId="firstName" bsSize="large">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              autoFocus
              name="firstName"
              type="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </Form.Group>
          {this.state.validationerror.firstName && (
            <div>{this.state.validationerror.firstName}</div>
          )}
          {/* <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div> */}
          <Form.Group controlId="lastName" bsSize="large">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              autoFocus
              name="lastName"
              type="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </Form.Group>
          {this.state.validationerror.lastName && (
            <div>{this.state.validationerror.lastName}</div>
          )}
          {/* <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div> */}
          <Form.Group controlId="email" bsSize="large">
            <Form.Label>Email </Form.Label>
            <Form.Control
              autoFocus
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          {this.state.validationerror.email && (
            <div>{this.state.validationerror.email}</div>
          )}

          {/* <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div> */}
          <Form.Group controlId="password" bsSize="large">
            <Form.Label>Password </Form.Label>
            <Form.Control
              autoFocus
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          {this.state.validationerror.password && (
            <div>{this.state.validationerror.password}</div>
          )}

          {/* <div>
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              name="contactNumber"
              type="text"
              value={this.state.contactNumber}
              onChange={this.handleChange}
            />
          </div> */}
          <Form.Group controlId="contactNumber" bsSize="large">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              autoFocus
              name="contactNumber"
              type="contactNumber"
              value={this.state.contactNumber}
              onChange={this.handleChange}
            />
          </Form.Group>
          {this.state.validationerror.contactNumber && (
            <div>{this.state.validationerror.contactNumber}</div>
          )}
          {/* <Button variant="primary" onClick={event => this.submit(event)}>
            Register
          </Button> */}
          <Button block bsSize="large" onClick={event => this.submit(event)}>
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

const mapStateToProps = state => {
  return {
    useremail: state.user.emailAddress
  };
};

Register = connect(
  mapStateToProps,
  { registerUser }
)(Register);

export default Register;
