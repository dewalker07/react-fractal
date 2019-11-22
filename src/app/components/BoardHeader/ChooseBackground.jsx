import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Wrapper, Menu, MenuItem } from "react-aria-menubutton";
import classnames from "classnames";
import FaCheck from "react-icons/lib/fa/check";
import colorIcon from "../../../assets/images/color-icon.png";
import "./ChooseBackground.scss";

class ChooseBackground extends Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    boardColor: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  handleSelection = color => {
    const { dispatch, boardId, boardImage } = this.props;
    // Dispatch update only if selected color is not the same as current board color.
    if (image !== boardImage) {
      dispatch({ type: "CHANGE_BOARD_COLOR", payload: { boardId, image } });
    }
  };

  render() {
    const { boardImage } = this.props;
    const images = ["blue", "green", "red", "pink"];
    return (
      <Wrapper
        className="color-picker-wrapper"
        onSelection={this.handleSelection}
      >
        <Button className="color-picker">
          <img src={colorIcon} alt="colorwheel" className="modal-icon" />
          <div className="board-header-right-text">
            &nbsp;ChooseBackground &nbsp;&#9662;
          </div>
        </Button>
        <Menu className="color-picker-menu">
          {images.map(image => (
            <MenuItem
              value={image}
              className={classnames("color-picker-item", image)}
              key={image}
            >
              {image === boardImage && <FaCheck />}
            </MenuItem>
          ))}
        </Menu>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { boardId } = ownProps.match.params;
  return {
    boardColor: state.boardsById[boardId].color,
    boardId
  };
};

export default withRouter(connect(mapStateToProps)(ChooseBackground));
