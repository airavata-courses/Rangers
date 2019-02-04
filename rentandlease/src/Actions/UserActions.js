import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../Constants/Constants";

export const login = (username, password, onSuccessfulLogin) => dispatch => {
  console.log(`username is ${username}`);
  console.log(`password is ${password}`);
  if ((username == "aangal@iu.edu") & (password == "1234")) {
    dispatch(
      set_User({
        isLoggedIn: true,
        firstName: "Ameya",
        lastName: "Angal",
        emailAddress: "aangal@iu.edu",
        contactNumber: "8122725134"
      })
    );
    onSuccessfulLogin();
  } else {
    dispatch(set_login_failure("Invalid Username password"));
  }
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
function set_login_failure(error) {
  return { type: LOGIN_FAILURE, payload: error };
}
