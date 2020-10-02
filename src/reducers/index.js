import {combineReducers} from 'redux';

import eduvanzReducer from './eduvanz-reducer'

let reducers = combineReducers({
    eduvanzState: eduvanzReducer
});

export default reducers
