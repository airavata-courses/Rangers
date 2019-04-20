import React, { PureComponent } from "react";
import { Redirect } from "react-router";
import { Modal, Button } from "react-bootstrap";
import { postApi } from "../Common/api";
import { connect } from "react-redux";

export class AddListings extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      guests: "",
      available: true,
      price: "",
      description: "",
      wifi: false,
      microwave: false,
      safeCloset: false,
      showConfirmationModal: false,
      addListingConfirmation: null,
      validationerror: {
        location: null,
        guests: null,
        price: null
      }
    };
  }

  validate = (key, value) => {
    let error = {
      location: null,
      guests: null,
      price: null
    };

    if (key == "location") {
      if (value == "") {
        error.location = "Location is required";
      }
    }

    if (key == "guests") {
      if (value == "") {
        error.guests = "Guests is required";
      }
      if (value < 1) {
        error.price = "Number of Guests cannot be negative";
      }
    }

    if (key == "price") {
      if (value == "") {
        error.price = "Price is required";
      }
      if (value < 1) {
        error.price = "Price cannot be negative";
      }
    }

    return error;
  };

  handleChange = event => {
    let error = this.validate(event.target.name, event.target.value);

    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      validationerror: error,
      [name]: value
    });
  };

  submit = event => {
    let error = {
      location: null,
      guests: null,
      price: null
    };

    if (this.state.location == "") {
      error.location = "Location is required";
    }

    if (this.state.guests == "") {
      error.guests = "Guests is required";
    }
    if (this.setState.guests < 1) {
      error.price = "Number of Guests cannot be negative";
    }

    if (this.state.price == "") {
      error.price = "Price is required";
    }
    if (this.state.price < 1) {
      error.price = "Price cannot be negative";
    }

    if (error.location || error.guests || error.price) {
      this.setState({ validationerror: error });
    } else {
      let postdata = {
        location: this.state.location,
        owneremail: this.props.emailAddress,
        guests: this.state.guests,
        available: this.state.available,
        price: this.state.price,
        description: this.state.description,
        wifi: this.state.wifi == true ? 1 : 0,
        microwave: this.state.microwave == true ? 1 : 0,
        safeCloset: this.state.safeCloset == true ? 1 : 0
      };

      postApi(
        //"http://localhost:3010/rooms/",
        "http://localhost:3010/rooms/",
        data => {
          this.setState({
            showConfirmationModal: true,
            addListingConfirmation: data
          });
        },
        error => {
          this.setState({
            showConfirmationModal: true,
            addListingConfirmation: error
          });
        },
        postdata
      );
    }
  };

  handleClose = () => {
    this.setState({ showConfirmationModal: false });
    this.props.history.push("/home");
  };

  render() {
    if (!this.props.isLoggedIn) {
      this.props.history.push("/");
      return null;
    } else {
      return (
        <div>
          <form>
            <div>
              <label htmlFor="location">Location</label>
              <input
                name="location"
                type="text"
                value={this.state.location}
                onChange={this.handleChange}
              />
            </div>
            {this.state.validationerror.location && (
              <div>{this.state.validationerror.location}</div>
            )}

            <div>
              <label htmlFor="guests">Guests</label>
              <input
                name="guests"
                type="number"
                value={this.state.guests}
                onChange={this.handleChange}
              />
            </div>
            {this.state.validationerror.guests && (
              <div>{this.state.validationerror.guests}</div>
            )}

            <div>
              <label htmlFor="price">Price</label>
              <input
                name="price"
                type="number"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </div>
            {this.state.validationerror.price && (
              <div>{this.state.validationerror.price}</div>
            )}

            <div>
              <label htmlFor="description">Description</label>
              <input
                name="description"
                type="text"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>

            <div>
              <label htmlFor="wifi">Wifi</label>
              <input
                name="wifi"
                type="checkbox"
                checked={this.state.wifi}
                // checked={this.state.wifi}
                onChange={this.handleChange}
              />
            </div>

            <div>
              <label htmlFor="microwave">Microwave</label>
              <input
                name="microwave"
                type="checkbox"
                checked={this.state.microwave}
                // checked={this.state.microwave}
                onChange={this.handleChange}
              />
            </div>

            <div>
              <label htmlFor="safeCloset">safeCloset</label>
              <input
                name="safeCloset"
                type="checkbox"
                checked={this.state.safeCloset}
                // checked={this.state.safeCloset}
                onChange={this.handleChange}
              />
            </div>

            <Button name="AddListings" onClick={() => this.submit()}>
              Add Listing{" "}
            </Button>
          </form>
          <Modal
            show={this.state.showConfirmationModal}
            onHide={this.handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            {/* <Modal.Body>{this.state.addListingConfirmation}</Modal.Body> */}
            <Modal.Body>Listing added Successfully</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Ok
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    emailAddress: state.user.emailAddress,
    isLoggedIn: state.user.isLoggedIn
  };
};

AddListings = connect(mapStateToProps)(AddListings);

export default AddListings;
