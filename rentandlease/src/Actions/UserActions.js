import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../Constants/Constants";

export const login = (username, password) => dispatch => {
  dispatch(
    set_User({
      isLoggedIn: true,
      firstName: "Ameya",
      lastName: "Angal",
      emailAddress: "aangal@iu.edu",
      contactNumber: "8122725134"
    })
  );
};

// export const verifyOtp = (otp) => dispatch => {
//   return new Promise()
// }

function set_User(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
}
export const Login_failure = error => dispatch => {
  dispatch({ type: LOGIN_FAILURE, payload: error });
};
