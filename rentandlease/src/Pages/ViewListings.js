import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getRooms, confirmRoom } from "../Actions/RoomsActions";
import DisplayRoom from "../Components/DisplayRoom";
import { postApi } from "../Common/api";

export class ViewListings extends PureComponent {
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
      "http://149.165.171.144:30004/notify",
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

  onBookClick = room => {
    this.props.confirmRoom(room.id, this.props.useremail, data =>
      this.sendNotification(room)
    );
  };
  render() {
    if (!this.props.isLoggedIn) {
      this.props.history.push("/login");
      return null;
    } else {
      return (
        <div>
          {this.props.rooms.map(room => (
            <DisplayRoom
              room={room}
              useremail={this.props.useremail}
              onBook={() => this.onBookClick(room)}
            />
          ))}
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
