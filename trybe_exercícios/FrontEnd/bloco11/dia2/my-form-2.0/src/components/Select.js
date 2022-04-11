import React, { Component } from "react";
import PropTypes from "prop-types";

class Select extends Component {
  render() {
    const { name, required, states } = this.props;

    return (
      <select name={name} required={required}>
        {states.map((estado) => <option key={estado}>{estado}</option>)}
      </select>
    )
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  states: PropTypes.arrayOf(PropTypes.string),
}

export default Select;