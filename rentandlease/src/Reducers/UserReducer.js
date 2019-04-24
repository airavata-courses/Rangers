import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  GOOGLE_LOGIN
} from "../Constants/Constants";

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
        firstName: payload.firstname,
        lastName: payload.lastname,
        emailAddress: payload.email,
        contactNumber: payload.phone,
        loginMessage: null
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        loginMessage: payload
      };

    case GOOGLE_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        firstName: payload.givenName,
        lastname: payload.familyName,
        emailAddress: payload.email,
        loginMessage: null
      };

    case LOGOUT:
      return { initialState };

    default:
      return state;
  }
};
