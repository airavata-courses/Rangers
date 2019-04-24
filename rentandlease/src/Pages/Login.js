import React, { PureComponent } from "react";
import LoginForm from "../Components/LoginForm";
import { getApi, postApi } from "../Common/api";
import { connect } from "react-redux";
import { login, Login_failure } from "../Actions/UserActions";
import { Field, reduxForm } from "redux-form";
import { Button } from "react-bootstrap";
import validator from "validator";
import { GoogleLogin } from "react-google-login";

export class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      validationerror: {
        username: null,
        password: null
      }
    };
  }

  onSuccessfulLogin = () => {
    this.props.history.push("/home");
  };

  responseGoogleSucc = response => {
    console.log("Logged in");
    // Cookies.set("username", response.profileObj.name);
    window.location.href = "/home";
  };

  submit = event => {
    event.preventDefault();
    console.log(this.state);
    let error = {
      username: null,
      password: null
    };
    if (this.state.username == "") {
      error.username = "Username is required";
    }
    if (this.state.password == "") {
      error.password = "Password is required";
    }
    if ((this.state.user != "") & !validator.isEmail(this.state.username)) {
      error.username = "Invalid username";
    }

    this.setState({ validationerror: error });

    this.props.login(
      this.state.username,
      this.state.password,
      this.onSuccessfulLogin
    );
  };

  handleChange = event => {
    let error = {
      username: null,
      password: null
    };
    console.log(event.target.name);
    console.log(event.target.value);

    if (event.target.name == "username") {
      if (event.target.value == "") {
        error.username = "Username is required";
      }
      if ((event.target.value != "") & !validator.isEmail(event.target.value)) {
        error.username = "Invalid username";
      }
    }

    if (event.target.name == "password") {
      if (event.target.value == "") {
        error.password = "Password is required";
      }
    }
    console.log(error);
    console.log("Commit to test the build");
    this.setState({
      [event.target.name]: event.target.value,
      validationerror: error
    });
  };

  render() {
    return (
      <div style={{}}>
        <form>
          <div>
            <label htmlFor="username">Email</label>
            <input
              name="username"
              type="email"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          {this.state.validationerror.username && (
            <div>{this.state.validationerror.username}</div>
          )}
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          {this.state.validationerror.password && (
            <div>{this.state.validationerror.password}</div>
          )}
          {this.props.loginMessage && <div>{this.props.loginMessage}</div>}
          <div>
            <Button variant="primary" onClick={event => this.submit(event)}>
              Login
            </Button>
          </div>
          <div>
            <Button
              variant="primary"
              onClick={() => this.props.history.push("/register")}
            >
              Register
            </Button>
          </div>
          <GoogleLogin
              clientId="654502185597-4kdf7cmdei8r72c5ja4bsgi5iqi4b2so.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogleSucc}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
        
            />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  loginMessage: state.user.loginMessage
});

// Login = reduxForm({ form: "Login" })(Login);

export default connect(
  mapStateToProps,
  { login }
)(Login);
