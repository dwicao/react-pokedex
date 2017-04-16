import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainActions from '../../actions/mainActions';
import InfiniteScroll from 'react-infinite-scroller'
import Card from './Card';
import CardListByType from './CardListByType';
import { getPokemonId } from '../../utils';
import './index.css';

class CardList extends Component {
    constructor(props) {
        super(props);

        this.section = 0;

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        if (this.section < 750) {
            this.props.actions.fetchPokemon(this.section);
            this.section = this.section + 20;
        } 
    }

    render() {
        if (this.props.pokefilter.isFilterByPokemonType) return <CardListByType/>;

        return (   
            <InfiniteScroll
                className="card-list"
                pageStart={0}
                loadMore={this.loadMore}
                loader={this.renderLoader()}
                hasMore={true}
                useWindow={true}
            >
                {this.renderCard()}
            </InfiniteScroll>
        );
    }

    renderLoader(key) {
        if (this.section > 740) return;

        return <div key={key} className="loader">Loading...</div>;
    }

    renderCard() {
        const { pokelist, pokefilter } = this.props;

        /*if (pokefilter.isFilterByPokemonType) {
            return pokelist.map(({ pokemon }, index) => {
                if (!pokemon) return this.renderLoader(index);

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
        }*/
        
        return pokelist.map((section, index) => {
            if (!section.map) return this.renderLoader(index);

            return section.map(({ name, url }) => {
                const pokemonId = parseFloat(getPokemonId(url));

                if (pokemonId > 10000) return;

                return (
                    <Card
                        name={name}
                        url={url}
                        pokemonId={getPokemonId(url)}
                    />
                );
            });
        });
    }
}

const mapStateToProps = (state) => ({
  pokelist: state.pokelist,
  pokefilter: state.pokefilter,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(mainActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
