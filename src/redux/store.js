import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducers } from './reducers/rootReducers';

export const store = createStore(rootReducers, composeWithDevTools());
