import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainActions from '../../actions/mainActions';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';
import Spinner from 'react-spinkit';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowingModal: false,
        };

        this.handleClose = this.handleClose.bind(this);
    }

    handleClick(pokemonId) {
        this.setState({ isShowingModal: true });
        this.props.actions.fetchPokemonDetail(pokemonId);
    }

    handleClose() {
        this.setState({ isShowingModal: false });
        this.props.actions.clearPokemonDetail();
    }

    renderBackground(color) {
        return `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokemonId}.png') no-repeat center ${color}`;
    }

    render() {
        const { name, pokemonId } = this.props;

        return (
            <div className="card"
                onClick={() => this.handleClick(pokemonId)}
                style={{ background: this.renderBackground('#d6e2fb') }}
            >
                <span className="card-pokemon-name">{name}</span>
                {this.state.isShowingModal &&
                    <ModalContainer onClose={this.handleClose}>
                        <ModalDialog onClose={this.handleClose}>
                            {this.renderModalContent()}
                        </ModalDialog>
                    </ModalContainer>
                }
            </div>
        );
    }

    renderModalContent() {
        const { name, pokemonId, pokedetail } = this.props;

        if (Object.keys(pokedetail).length === 0) {
            return <Spinner spinnerName='pulse' noFadeIn/>;
        }

        return (
            <div className="card-detail">
                <div className="card-detail-title">
                    <span className="card-detail-number">#{pokemonId}</span>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        background: this.renderBackground('white')
                    }}/>
                    <h2 className="card-detail-name">{name}</h2>
                </div>
                <div className="card-detail-info">
                    <div className="card-detail-types">
                        {pokedetail.types.map(({ type }, index) => (
                            <span key={index}>{type.name}</span>
                        ))}
                    </div>
                    <div className="card-detail-group">
                        <span className="card-detail-group-title">profile</span>
                        <div className="card-detail-group-content card-detail-basic">
                            <span>height: {pokedetail.height}</span>
                            <span>weight: {pokedetail.weight}</span>
                            <span>base exp: {pokedetail.base_experience}</span>
                        </div>
                    </div>
                    <div className="card-detail-group">
                        <span className="card-detail-group-title">abilities</span>
                        {pokedetail.abilities.map(({ ability }, index) => (
                            <span key={index} className="card-detail-group-content">
                                {ability.name}
                            </span>
                        ))}
                    </div>
                    <div className="card-detail-group">
                        <span className="card-detail-group-title">base stats</span>
                        {pokedetail.stats.map(({ base_stat, stat }, index) => (
                            <span key={index} className="card-detail-group-content">
                                {stat.name}: {base_stat}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    pokemonId: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  pokedetail: state.pokedetail
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(mainActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);