import React from 'react';
import './style.sass';

const Page = () => {
	return(
		<div>
			<input type="range" id="volume" min="0" max="100" step="1" />
		</div>
	);
};

export default Page;