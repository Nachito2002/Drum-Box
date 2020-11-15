import { CHANGE_VOLUME } from '../actions/changeVolumeAction';

const defaultState = 50;

export const change_volume_reducer = ( state = defaultState, action ) => {
    switch (action.type) {
        case CHANGE_VOLUME:
            return action.payload.sound;
        default:
            return state;
    };
};
