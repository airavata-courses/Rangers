import React from "react";
import { SET_ROOMS } from "../Constants/Constants";

const initialState = {
  rooms: [
    {
      id: 1,
      location: "A",
      guests: "2",
      available: true,
      price: "10",
      description: "something",
      wifi: false,
      microwave: false,
      safeCloset: false
    },
    {
      id: 2,
      location: "B",
      guests: "2",
      available: true,
      price: "20",
      description: "some desc",
      wifi: false,
      microwave: false,
      safeCloset: false
    }
  ]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ROOMS:
      return { ...state, rooms: payload };

    default:
      return state;
  }
};
