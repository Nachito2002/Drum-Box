import React from 'react';
import Sounds from '../../components/sounds';
import Power from '../../components/buttons/power';
import Bank from '../../components/buttons/bank';
import Screen from '../../components/screen';
import Volume from '../../components/volume';
import styles from './style.module.sass';
import { connect } from 'react-redux';
import { listSounds } from '../../listSounds';

const Home = (props) => {
    const listComponentsSounds = listSounds[props.index].map((obj, i) =>
        <Sounds obj={ obj } key={ i } />
    );
	return (
		<div className={ styles.box }>
			<div className={ styles.buttons }>
            {
                listComponentsSounds
            }
			</div>
			<div className={ styles.controls }>
				<Power />
				<Screen />
				<Volume />
				<Bank />
			</div>
		</div>
	);
};

const mapStateToProps = state => {
    return {
        index: state.change_bank_reducer
    };
};

export default connect(mapStateToProps)(Home);
