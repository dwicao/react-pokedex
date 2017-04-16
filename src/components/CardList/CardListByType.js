import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainActions from '../../actions/mainActions';
import Card from './Card';
import { getPokemonId } from '../../utils';

class CardListByType extends Component {
    render() {
        return (
            <div className="card-list">
                {this.renderCard()}
            </div>
        );
    }

    renderLoader(key) {
        return <div key={key} className="loader">Loading...</div>;
    }

    renderCard() {
        const { pokelisttype } = this.props;
        if (pokelisttype.length === 0) return this.renderLoader();

        return pokelisttype.map(({ pokemon }, index) => {
            const pokemonId = parseFloat(getPokemonId(pokemon.url));
            if (pokemonId > 10000) return;

            return (
                <Card key={index} 
                    name={pokemon.name}
                    url={pokemon.url}
                    pokemonId={getPokemonId(pokemon.url)}
                />
            );
        });
    }
}

const mapStateToProps = (state) => ({
  pokelisttype: state.pokelisttype,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(mainActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CardListByType);