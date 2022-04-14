import React, { Component } from "react";
import PropTypes from "prop-types";

class Submit extends Component {
  render() {
    const { name } = this.props;

    return (
      <button
        type="Submit"
      >{name}</button>
    )
  }
}

Submit.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Submit;
