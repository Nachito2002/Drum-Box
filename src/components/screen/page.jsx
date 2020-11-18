import React from 'react';
import styles from './style.module.sass';
import { connect } from 'react-redux';

const Page = (props) => {
	return (
		<div className={ styles.screen }>
			<p>{ props.message }</p>
		</div>
	);
};

const mapStateToProps = state => {
    return {
        message: state.change_message_screen_reducer
    }
}
export default connect(mapStateToProps)(Page);
