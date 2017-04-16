import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainActions from '../../actions/mainActions';
import './index.css';

class TopBar extends Component {
    constructor(props) {
        super(props);

        this.clearFilter = this.clearFilter.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    filterPokemon(type) {
        this.props.actions.clearPokemonListByType();
        this.props.actions.fetchPokemonByType(type);
        this.props.actions.filterPokemonByType({
            isFilterByPokemonType: true,
            type,
        });
    }

    clearFilter() {
        this.props.actions.filterPokemonByType({
            isFilterByPokemonType: false,
        });
    }

    onChange(event) {
        if (event.target.value === 'show_all') {
            this.clearFilter();
        } else {
            this.filterPokemon(event.target.value);
        }
    }

    render() {
        return (
            <div className="top-bar">
                <span className="top-bar-title">
                    Pokedex
                </span>
                <div className="select-type-pokemon-wrapper">
                    <span className="filter-span">Filter: </span>
                    <select className="select-type-pokemon" onChange={this.onChange}>
                        <option value="show_all">Show All</option>
                        <option value="normal">Normal</option>
                        <option value="fighting">Fighting</option>
                        <option value="flying">Flying</option>
                        <option value="poison">Poison</option>
                        <option value="ground">Ground</option>
                        <option value="rock">Rock</option>
                        <option value="ghost">Ghost</option>
                        <option value="steel">Steel</option>
                        <option value="fire">Fire</option>
                        <option value="water">Water</option>
                        <option value="grass">Grass</option>
                        <option value="electric">Electric</option>
                        <option value="psychic">Psychic</option>
                        <option value="ice">Ice</option>
                        <option value="dragon">Dragon</option>
                        <option value="dark">Dark</option>
                        <option value="fairy">Fairy</option>
                    </select>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(mainActions, dispatch)
});

export default connect(null, mapDispatchToProps)(TopBar);