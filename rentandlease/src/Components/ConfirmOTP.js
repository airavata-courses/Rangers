import React, { PureComponent } from "react";
import { Modal, Button } from "react-bootstrap";

export class ConfirmOTP extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      otp: ""
    };
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ otp: event.target.value });
  };

  handleClose = () => {
    console.log("otp is ", this.state.otp);
  };
  render() {
    return (
      <div>
        <Modal show={this.props.showModal}>
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
            <Button variant="primary" onClick={() => this.handleClose}>
              Validate
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ConfirmOTP;
