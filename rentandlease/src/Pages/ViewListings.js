import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getRooms, confirmRoom } from "../Actions/RoomsActions";
import DisplayRoom from "../Components/DisplayRoom";

export class ViewListings extends PureComponent {
  componentDidMount() {
    this.props.getRooms();
  }

  sendNotification = useremail => {
    console.log(`Send email notification for ${useremail}`);
  };

  onBookClick = id => {
    this.props.confirmRoom(id, this.props.useremail, this.sendNotification);
  };
  render() {
    return (
      <div>
        {this.props.rooms.map(room => (
          <DisplayRoom
            room={room}
            useremail={this.props.useremail}
            onBook={() => this.onBookClick(room.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rooms: state.rooms.rooms,
    useremail: state.user.email
  };
};

ViewListings = connect(
  mapStateToProps,
  { getRooms, confirmRoom }
)(ViewListings);

export default ViewListings;
