import React from "react";
import { SET_ROOMS } from "../Constants/Constants";

const initialState = {
  rooms: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ROOMS:
      return { ...state, rooms: payload };

    default:
      return state;
  }
};
