import React from 'react';
import styles from './style.module.sass';
import { connect } from 'react-redux';
import { change_message_screen } from '../../redux/actions/screenMessageAction';

const Page = (props) => {
	return (
		<div className={ styles.screen }>
			<p>{ props.message }</p>
		</div>
	);
};

const mapStateToProps = state => {
    return {
        message: state.change_message_screen
    }
}
export default Page;
