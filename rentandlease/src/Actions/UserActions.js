import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../Constants/Constants";
import { postApi } from "../Common/api";

export const login = (username, password, onSuccessfulLogin) => dispatch => {
  //let url = `http://localhost:8086/login`;
  let url = 'http://usermicroservice:8086/login';
  let postdata = {
    email: username,
    password: password
  };
  postApi(
    url,
    data => {
      console.log(`data in login success`, data);
      dispatch(set_User(data.user));
      onSuccessfulLogin();
    },
    err => {
      dispatch(set_login_failure("Invalid Username password"));
    },
    postdata
  );
};

export const registerUser = user => dispatch => {
  dispatch(set_User(user));
};

export const logout = () => dispatch => {
  dispatch(logout_user());
};

function logout_user() {
  return {
    type: LOGOUT,
    payload: null
  };
}

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
