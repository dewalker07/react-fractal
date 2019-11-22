import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Title } from "react-head";
// import FaTwitter from "react-icons/lib/fa/twitter";
import FaUser from "react-icons/lib/fa/user";
// import googleLogo from "../../../assets/images/google-logo.svg";
import fractalLogo from "../../../assets/images/fractal-logo.png";
import bg from "../../../assets/images/bg.jpg";
// import background1366 from "../../../assets/images/postits-1366.jpg";
import "./LandingPage.scss";

class LandingPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  enterAsGuest = () => {
    this.props.dispatch({ type: "ENTER_AS_GUEST" });
  };

  render = () => (
    <div className="landing-page">
      <Title>Fractal Analytics</Title>
      <div className="landing-page-background">
        <img
          srcSet={`${bg} 1920w`}
          src={bg}
          alt="background"
        />
      </div>
      <div className="landing-page-info-wrapper">
        <div className="landing-page-info">
          <div className="landing-page-heading">
            <img
              src={fractalLogo}
              alt="Fractal logo"
              className="landing-page-logo"
            />
            &nbsp;
            <h1>Analytics</h1>
          </div>

          <div className="signin-buttons">
            {/* <div>
              <a href="/auth/twitter" className="signin-button twitter-button">
                <FaTwitter className="logo-icon" /> &nbsp;Sign in with Twitter
              </a>
            </div> */}
            {/* <div>
              <a href="/auth/google" className="signin-button google-button">
                <img
                  className="google-logo"
                  src={googleLogo}
                  alt="google logo"
                />
                &nbsp;Sign in with Google
              </a>
            </div> */}
            <div className="guest-button-wrapper">
              <button
                onClick={this.enterAsGuest}
                className="signin-button guest-button"
              >
                <FaUser className="logo-icon" /> &nbsp;Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(LandingPage);
