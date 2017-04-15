import React from 'react';

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

export default Card;