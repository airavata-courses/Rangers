import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getRooms, confirmRoom } from "../Actions/RoomsActions";
import DisplayRoom from "../Components/DisplayRoom";
import { postApi } from "../Common/api";
import { Modal, Button } from "react-bootstrap";
import "./ViewListings.css";

export class ViewListings extends PureComponent {
  constructor() {
    super();
    this.state = {
      showConfirmationModal: false
    };
  }

  componentDidMount() {
    this.props.getRooms();
  }

  sendNotification = room => {
    let subject = "RentNLease";
    let body = `\nDear ${this.props.firstname} ${
      this.props.lastname
    },\n You have booked a room with following details.\n
    Room Location : ${room.location} \n
    Number of Guests: ${room.guests}\n
    Price: ${room.price}\n
    Description: ${room.description} \n
    Thanks & Regards,\nRentNLease Team`;
    let postdata = {
      recipient: this.props.useremail,
      subject: subject,
      body: body
    };
    postApi(
      "/notify/notify",
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      },
      postdata
    );
    // post api call for sending notification
  };

  handleClose = () => {
    this.setState({ showConfirmationModal: false });
    this.props.history.push("/viewListings");
  };

  onBookClick = room => {
    this.props.confirmRoom(room.id, this.props.useremail, data => {
      this.sendNotification(room);
    });
    // alert("Room Booking successful");
    this.setState({ showConfirmationModal: true });
  };
  render() {
    if (!this.props.isLoggedIn) {
      this.props.history.push("/");
      return null;
    } else {
      return (
        <div className="container">
          {this.props.rooms.map(room => (
            <DisplayRoom
              room={room}
              useremail={this.props.useremail}
              onBook={() => this.onBookClick(room)}
            />
          ))}
          <Modal
            show={this.state.showConfirmationModal}
            onHide={this.handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Booking Successfully</Modal.Body>
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
    rooms: state.rooms.rooms,
    useremail: state.user.emailAddress,
    firstname: state.user.firstName,
    lastname: state.user.lastName,
    isLoggedIn: state.user.isLoggedIn
  };
};

ViewListings = connect(
  mapStateToProps,
  { getRooms, confirmRoom }
)(ViewListings);

export default ViewListings;
