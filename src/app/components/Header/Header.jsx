import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FaUser from "react-icons/lib/fa/user";
// import FaSignOut from "react-icons/lib/fa/sign-out";
// import FaSignIn from "react-icons/lib/fa/sign-in";
import fractalLogo from "../../../assets/images/fractal-logo.png";
import "./Header.scss";

class Header extends Component {
  static propTypes = { user: PropTypes.object };
  render = () => {
    const { user } = this.props;
    return (
      <header>
        <Link to="/" className="header-title">
          <img src={fractalLogo} alt="Fractal Logo logo" />
          &nbsp;
        </Link>
        <div className="header-right-side">
          {user ? (
            <img
              src={user.imageUrl}
              alt={user.name}
              className="user-thumbnail"
              title={user.name}
            />
          ) : (
            <FaUser className="guest-icon" />
          )}
          {/* {user ? (
            <a className="signout-link" href="/auth/signout">
              <FaSignOut className="signout-icon" />
              &nbsp;Sign out
            </a>
          ) : (
            <a className="signout-link" href="/">
              <FaSignIn className="signout-icon" />
              &nbsp;Sign in
            </a>
          )} */}
        </div>
      </header>
    );
  };
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Header);
