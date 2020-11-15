import { POWER } from '../actions/powerAction';

const defaultState = false;

export const power_reducer = ( state = defaultState, action ) => {
    switch ( action.type ) {
        case POWER:
            return !state;
        default:
            return state;
    };
};
