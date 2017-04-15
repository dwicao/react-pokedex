import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    const renderBackground = () => {
        return `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonId}.png') no-repeat center #d6e2fb`;
    }

    return (
        <div className="card" style={{ background: renderBackground() }}>
            <span>{props.name}</span>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    pokemonId: PropTypes.string.isRequired,
}

export default Card;