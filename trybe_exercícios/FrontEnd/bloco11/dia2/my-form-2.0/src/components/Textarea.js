import React, { Component } from "react";
import PropTypes from "prop-types";

class Textarea extends Component {
  constructor() {
    super()

    this.state = {
      firstTime: true,
    }

    this.onMouseEnter = this.onMouseEnter.bind(this);
  }

  onMouseEnter({ target }) {
    if (this.state.firstTime && target.id === '2') {
      alert('Lembre-se de preencher este campo com atenção')
      this.setState({
        firstTime: false,
      });
    }
  }

  render() {
    const { name, type, cols, rows, maxLength, required, id, onChange } = this.props;
    
    return (
      <label htmlFor={id}>{name}
        <textarea
          name={name}
          type={type}
          onChange={onChange}
          id={id} 
          cols={cols} 
          rows={rows} 
          maxLength={maxLength}
          onMouseEnter={this.onMouseEnter}
          required={required}
        ></textarea>
      </label>
    )
  }
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  cols: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  id: PropTypes.number,
  onChange: PropTypes.func,
}

export default Textarea;