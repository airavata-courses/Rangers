import { LOGIN_SUCCESS } from "../Constants/Constants";

const initialState = {
  isLoggedIn: false,
  firstName: null,
  lastName: null,
  emailAddress: null,
  contactNumber: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: payload.isLoggedIn,
        firstName: payload.firstName,
        lastName: payload.lastName,
        emailAddress: payload.emailAddress,
        contactNumber: payload.contactNumber
      };

    default:
      return state;
  }
};
