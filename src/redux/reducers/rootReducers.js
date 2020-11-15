import { combineReducers } from 'redux';
import { change_message_screen_reducer } from './messageScreenReducer';
import { change_volume_reducer } from './volumeReducer';
import { power_reducer } from './powerReducer';
import { change_bank_reducer } from './bankReducer'

export const rootReducers = combineReducers({
  change_message_screen_reducer,
  change_volume_reducer,
  power_reducer,
  change_bank_reducer
});
