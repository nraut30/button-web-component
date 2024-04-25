import React from "react";
import PropTypes from "prop-types";
import { backGroundColorHandler, textColor, buttonBorder } from "./utils";

const Button = ({
  children,
  onClick,
  variant,
  size,
  disabled,
  fullWidth,
  ...otherProps
}) => {
  const buttonStyles = {
    padding: size === "small" ? "6px 16px" : "8px, 0px, 8px, 0px",
    radius: "8px",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    borderRadius: "4px",
    cursor: disabled ? "not-allowed" : "pointer",
    backgroundColor: backGroundColorHandler(variant),
    color: textColor(variant),
    border: buttonBorder(variant),
    width: fullWidth ? "100%" : "189px",
    height: "85px",
    opacity: disabled ? "0.5" : "1",
    margin: 5,
  };

  return (
    <button
      style={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium"]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  variant: "primary",
  size: "medium",
  disabled: false,
  fullWidth: false,
};

export default Button;
