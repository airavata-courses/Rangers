import React, { PureComponent } from "react";
import { Button } from "react-bootstrap";

export class DisplayRoom extends PureComponent {
  confirmBooking = (id, useremail) => {};
  render() {
    return (
      <div style={{ border: "solid 2px black" }}>
        <div>
          <label htmlFor="location">Location: </label>
          {this.props.room.location}
        </div>
        <div>
          <label htmlFor="guests">No of guests: </label>
          {this.props.room.guests}
        </div>
        <div>
          <label htmlFor="available">Available: </label>
          {this.props.room.available}
        </div>
        <div>
          <label htmlFor="price">Price: </label>
          {this.props.room.price}
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          {this.props.room.description}
        </div>
        <div>
          <label htmlFor="wifi">WiFi: </label>
          {this.props.room.wifi}
        </div>
        <div>
          <label htmlFor="microwave">Microwave: </label>
          {this.props.room.microwave}
        </div>
        <div>
          <label htmlFor="safeCloset">Safe Closet: </label>
          {this.props.room.safeCloset}
        </div>
        <Button onClick={this.props.onBook}>Book</Button>
      </div>
    );
  }
}

export default DisplayRoom;
