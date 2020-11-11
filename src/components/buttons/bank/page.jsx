import React from 'react';
import './style.sass';

const Page = () => {

	let animation = false;

	const handleAnimation = () => {
		if (!animation) {
			document.getElementById('bank-button').style.animationName = 'moveRight';
			animation = true
		} else {
			document.getElementById('bank-button').style.animationName = 'moveLeft';
			animation = false
		}
	}

	return (
		<div className="bank-container">
			<div className="bank-space">
				<p className="bank-button" id="bank-button" onClick={ handleAnimation }></p>
			</div>
			<p className="bank-title">Bank</p>
		</div>
	);
};

export default Page;