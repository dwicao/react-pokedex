import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainActions from '../../actions/mainActions';
import Card from './Card';
import { getPokemonId } from '../../utils';
import './index.css';

class CardList extends Component {
    componentDidMount() {
        this.props.actions.fetchPokemon();
    }

    render() {
        return (
            <div className="card-list">
                {this.renderCard()}
            </div>
        );
    }

    renderCard() {
        const { pokelist } = this.props;

        if (pokelist.length === 0) {
            return <span>Loading...</span>;
        }
        
        return pokelist.map(section => section.map(pokemon => (
            <Card
                name={pokemon.name}
                url={pokemon.url}
                pokemonId={getPokemonId(pokemon.url)}
            />
        )));
    }
}

const mapStateToProps = (state) => ({
  pokelist: state.pokelist
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(mainActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
