/* eslint-disable no-unused-vars*/
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}

      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired, // Ensures title is a required string
  id: PropTypes.string, // Optional string ID
  rightIcon: PropTypes.node, // Allows any React node (JSX, icon, etc.)
  leftIcon: PropTypes.node, // Allows any React node (JSX, icon, etc.)
  containerClass: PropTypes.string, // Optional string for extra styles
};

export default Button;
