import React from 'react';
import Home from './pages/home/home';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
	return (
		<Provider store={store}>
            <Home/>
        </Provider>
	);
};

export default App;
