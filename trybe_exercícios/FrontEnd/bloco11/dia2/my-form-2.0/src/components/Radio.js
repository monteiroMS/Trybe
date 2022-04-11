import React, { Component } from "react";
import PropTypes from "prop-types";

class Radio extends Component {
  render() {
    const { name, options, required } = this.props;

    return (
      <label htmlFor={name}>{name}
        {options.map((opcao) => (
          <label key={opcao} id={name} htmlFor={opcao}>{opcao}
            <input 
              type="radio" 
              name={name}
              value={opcao} 
              id={opcao} 
              required={required} 
            />
          </label>
        ))}
      </label>
    )
  }
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  required: PropTypes.bool,
}

export default Radio;