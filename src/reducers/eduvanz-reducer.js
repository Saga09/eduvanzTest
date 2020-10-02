import * as actionType from '../actions/action-types';

const initialState = {
    data: {},
    guest: 0

};


const eduvanzReducer = function (state = initialState, action) {
    switch (action.type) {
        case actionType.INCREMENTAL_GUEST:
            return Object.assign({}, state, {guest: state.guest + 1});
        case actionType.DECREMENTAL_GUEST:
            return Object.assign({}, state, {guest: state.guest - 1})
    }

    return state
};

export default eduvanzReducer;
