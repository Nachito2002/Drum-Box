import React from 'react';
import './style.sass';
import { change_bank_action } from '../../../redux/actions/changeBankAction';
import { connect } from 'react-redux';

const Page = (props) => {

	let animation = false;

	const handleFunction = () => {
		if (!animation) {
			document.getElementById('bank-button').style.animationName = 'moveRight';
			animation = true
		} else {
			document.getElementById('bank-button').style.animationName = 'moveLeft';
			animation = false
		}
        props.change_bank_action();
	}

	return (
		<div className="bank-container">
			<div className="bank-space">
				<p className="bank-button" id="bank-button" onClick={ handleFunction }></p>
			</div>
			<p className="bank-title">Bank</p>
		</div>
	);
};

const mapDispatchToProps = {
     change_bank_action
}

export default connect(null, mapDispatchToProps)(Page);
