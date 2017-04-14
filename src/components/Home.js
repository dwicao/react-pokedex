import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainActions from '../actions/mainActions';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>React Redux</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    main: state.main
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(mainActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
