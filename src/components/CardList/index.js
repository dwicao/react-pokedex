import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainActions from '../../actions/mainActions';
import InfiniteScroll from 'react-infinite-scroller'
import Card from './Card';
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

    renderLoader() {
        if (this.section > 740) return;

        return <div className="loader">Loading...</div>;
    }

    renderCard() {
        const { pokelist } = this.props;
        
        return pokelist.map(section => section.map(pokemon => {
            const pokemonId = parseFloat(getPokemonId(pokemon.url));

            if (pokemonId > 10000) return;

            return (
                <Card
                    name={pokemon.name}
                    url={pokemon.url}
                    pokemonId={getPokemonId(pokemon.url)}
                />
            );
        }));
    }
}

const mapStateToProps = (state) => ({
  pokelist: state.pokelist
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(mainActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
