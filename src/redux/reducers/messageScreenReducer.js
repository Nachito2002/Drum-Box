import { CHANGE_MESSAGE_SCREEN } from '../actions/screenMessageAction';

const defaultState = '';
export const change_message_screen_reducer = ( state = defaultState, action ) => {
    switch(action.type) {
        case CHANGE_MESSAGE_SCREEN:
            return action.payload.message;
        default:
            return state;
    };
};
