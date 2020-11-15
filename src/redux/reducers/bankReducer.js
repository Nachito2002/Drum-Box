import { CHANGE_BANK } from '../actions/changeBankAction';

const defaultState = 0;

export const change_bank_reducer = ( state = defaultState, action) => {
    switch( action.type ) {
        case CHANGE_BANK:
            if ( state === 0 ) {
                return 1
            } else {
                return 0
            };
        default:
            return state;
    };
};
