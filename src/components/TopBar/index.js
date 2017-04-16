import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainActions from '../../actions/mainActions';
import './index.css';

class TopBar extends Component {
    constructor(props) {
        super(props);

        this.clearFilter = this.clearFilter.bind(this);
    }

    filterPokemon(type) {
        this.props.actions.fetchPokemonByType(type);
        
        this.props.actions.filterPokemonByType({
            isFilterByPokemonType: true,
            type,
        });
    }

    clearFilter() {
        this.props.actions.clearPokemonList([]);

        this.props.actions.fetchPokemon();

        this.props.actions.filterPokemonByType({
            isFilterByPokemonType: false,
        });
    }

    render() {
        return (
            <div className="top-bar">
                <span className="top-bar-title">
                    Pokedex
                </span>
                <span onClick={this.clearFilter}>
                    Show All
                </span>
                <span onClick={() => this.filterPokemon('ghost')}>
                    Ghost Type
                </span>
                <span onClick={() => this.filterPokemon('normal')}>
                    Normal Type
                </span>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(mainActions, dispatch)
});

export default connect(null, mapDispatchToProps)(TopBar);