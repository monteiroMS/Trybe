import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;

    return (
      <div className='pokemon-card'>
        <div>
          <p>Nome: {name}</p>
          <p>Tipo: {type}</p>
          <p>Peso Médio: {averageWeight.value}{averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt={`Imagem do pokemon ${name}`} />
      </div>
    );
  }
}

  Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        value: PropTypes.number,
        measurementUnit: PropTypes.string,
      }),
      image: PropTypes.string,
    }).isRequired,
  }

export default Pokemon;