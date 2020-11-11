import React from 'react';
import styles from './style.sass';

const Page = (props) => {

	const handleAnimation = () => {
		document.getElementById(props.id).addEventListener('animationend', function(){
			this.style.animationName = '';
		}, false)
		document.getElementById(props.id).addEventListener('click', function(){
			this.style.animationName = 'move'
		})
	}

	return (
		<button className="sounds-button" id={props.id} onMouseOver={ handleAnimation }>A</button>
	);
};

export default Page;