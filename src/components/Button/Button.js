import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import style from "./Button.module.scss";

class Button extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { type, text, onClick } = this.props;
    const buttonClass = classnames({
      [style.primary]: type === "primary",
      [style.primaryReversed]: type === "primaryReversed",
      [style.secondary]: type === "secondary"
    });
    return (
      <button className={buttonClass} onClick={onClick}>
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "primary-reversed", "secondary"]),
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  text: "",
  type: "primary"
};

export default Button;
