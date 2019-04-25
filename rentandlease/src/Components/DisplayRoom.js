import React, { PureComponent } from "react";
import { Button, Card } from "react-bootstrap";
import house from "../images/house.jpg";
//import '../images/house.jpg'

export class DisplayRoom extends PureComponent {
  confirmBooking = (id, useremail) => {};
  render() {
    return (
      <div>
        <Card style={{ width: "20rem", height: "35rem", margin: "0.8rem" }}>
          <Card.Img variant="top" src={house} />
          <Card.Body>
            <Card.Title>{this.props.room.location}</Card.Title>
            {/* <Card.Text> Location : {this.props.room.location}  </Card.Text> */}
            <Card.Text> No of guests: {this.props.room.guests}</Card.Text>
            <Card.Text> Available: {this.props.room.available}</Card.Text>
            <Card.Text> Price: {this.props.room.price}</Card.Text>
            <Card.Text> Description: {this.props.room.description}</Card.Text>
            <Card.Text>
              {" "}
              WiFi: {this.props.room.wifi == 1 ? "True" : "False"} | Microwave:{" "}
              {this.props.room.microwave == 1 ? "True" : "False"} | Safe Closet:{" "}
              {this.props.room.safeCloset == 1 ? "True" : "False"}
            </Card.Text>
            <Button variant="primary" onClick={this.props.onBook}>
              Book
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default DisplayRoom;
