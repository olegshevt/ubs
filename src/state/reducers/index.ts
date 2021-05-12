import { combineReducers } from 'redux';
import musicReducer from './musicReducer';
import musicItemReducer from './musicItemReducer';

const reducers = combineReducers({
    music: musicReducer,
    musicItem: musicItemReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;