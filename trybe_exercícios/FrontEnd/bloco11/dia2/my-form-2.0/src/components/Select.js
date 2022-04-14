import React, { Component } from "react";
import PropTypes from "prop-types";

class Select extends Component {
  render() {
    const { name, required, states, onChange } = this.props;

    return (
      <label htmlFor={name}>{name}
        <select 
          id={name}
          name={name}
          required={required}
          onChange={onChange}
        >
          {states.map((estado) => <option key={estado}>{estado}</option>)}
        </select>
      </label>
    )
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  states: PropTypes.arrayOf(PropTypes.string),
}

export default Select;