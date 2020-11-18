import React from 'react';
import './style.sass';
import { connect } from 'react-redux';
import { change_volume_action } from '../../redux/actions/changeVolumeAction';
import { change_message_screen } from '../../redux/actions/screenMessageAction';

const Page = (props) => {

    const handleVolume = (e) => {
        props.change_volume_action(e.target.value);
        props.change_message_screen(`Volume - ${ e.target.value }`);
    }
	return(
		<div>
			<input type="range" id="volume" min="0" max="100" step="1" onChange={ handleVolume } />
		</div>
	);
};

const mapDispatchToProps = {
    change_volume_action,
    change_message_screen 
}

export default connect(null, mapDispatchToProps)(Page);
