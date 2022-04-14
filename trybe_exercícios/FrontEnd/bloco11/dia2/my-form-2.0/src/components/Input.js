import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {

  render() {
    const { name, type, maxLength, onChange, onBlur, required } = this.props;
    return (
      <label htmlFor={name}>{name}
      <input
        name={name}
        id={name}
        type={type}
        maxLength={maxLength}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
      /></label>
    ) 
  }

}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  maxLength: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
}

export default Input;