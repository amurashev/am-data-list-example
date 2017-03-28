
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';
import { mapDispatchToProps } from '../../utils/functions';

import Container from './components/Container';


const App = (props) => <Container {...props} />;


function mapStateToProps(state) {
    return {
        usersList: state.get('usersList').toJS()
    }
}


// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps(Actions))(App);