import React, { Component } from "react";
import values from "redux-form/lib/values";
import RegisterForm from "../Components/RegisterForm";
import ConfirmOTP from "../Components/ConfirmOTP";
import { Modal, Button } from "react-bootstrap";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      otp: ""
    };
  }

  verifyOTP = () => {
    console.log("veriy otp");
    this.props.history.push("/home");
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ otp: event.target.value });
  };

  submit = values => {
    this.setState({ showModal: true });
    console.log(values);
  };

  render() {
    return (
      <div>
        <RegisterForm onSubmit={this.submit} />
        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Verify OTP</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            OTP :
            <input
              type="text"
              value={this.state.otp}
              onChange={this.handleChange}
            />
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
