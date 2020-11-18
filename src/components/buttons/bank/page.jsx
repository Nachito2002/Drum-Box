import React from 'react';
import './style.sass';
import { change_bank_action } from '../../../redux/actions/changeBankAction';
import { change_message_screen } from '../../../redux/actions/screenMessageAction';
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

        if (animation) {
            props.change_message_screen('Bank 2');
        } else {
            props.change_message_screen('Bank 1');
        }
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
    change_bank_action,
    change_message_screen
};

export default connect(null, mapDispatchToProps)(Page);
