
import { bindActionCreators } from 'redux';

export const pipe = (fns, state) => {
    return state.withMutations(s => fns.reduce((state, fn) => {
        return fn(state)
    }, s));
};


export const mapDispatchToProps = (Actions) => {
    return (dispatch) => {
        return { 
            actions: bindActionCreators(Actions, dispatch) 
        }
    }
};
