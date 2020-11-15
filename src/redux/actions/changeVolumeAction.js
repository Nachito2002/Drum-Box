export const CHANGE_VOLUME = 'CHANGE_VOLUME';

export const change_volume_action = sound => {
    return {
        type: CHANGE_VOLUME,
        payload: {
            sound
        }
    };
};
