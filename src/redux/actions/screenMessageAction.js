export const CHANGE_MESSAGE_SCREEN = 'CHANGE_MESSAGE_SCREEN';

export const change_message_screen = message => {
    return {
        type: CHANGE_MESSAGE_SCREEN,
        payload: {
            message
        }
    };
};
