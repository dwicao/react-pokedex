import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainActions from '../../actions/mainActions';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

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
                <span>{name}</span>
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
            return <div>Loading...</div>;
        }

        return (
            <div className="card-detail">
                <div className="card-detail-title">
                    <div style={{
                        width: '100px',
                        height: '100px',
                        background: this.renderBackground('white')
                    }}/>
                    <h1>{name}</h1>
                    <span>#{pokemonId}</span>
                </div>
                <span>base_experience: {pokedetail.base_experience}</span>
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