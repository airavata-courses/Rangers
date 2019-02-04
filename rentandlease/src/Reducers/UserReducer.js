import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../Constants/Constants";

const initialState = {
  isLoggedIn: false,
  firstName: null,
  lastName: null,
  emailAddress: null,
  contactNumber: null,
  loginMessage: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        firstName: payload.firstName,
        lastName: payload.lastName,
        emailAddress: payload.emailAddress,
        contactNumber: payload.contactNumber,
        loginMessage: null
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        loginMessage: payload
      };

    default:
      return state;
  }
};
