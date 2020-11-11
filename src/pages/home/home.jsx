import React from 'react';
import Sounds from '../../components/sounds';
import Power from '../../components/buttons/power';
import Bank from '../../components/buttons/bank';
import Screen from '../../components/screen';
import Volume from '../../components/volume';
import styles from './style.module.sass';

const Home = () => {
	return (
		<div className={ styles.box }>
			<div className={ styles.buttons }>
				<Sounds id="button1"/>
				<Sounds id="button2"/>
				<Sounds id="button3"/>
				<Sounds id="button4"/>
				<Sounds id="button5"/>
				<Sounds id="button6"/>
				<Sounds id="button7"/>
				<Sounds id="button8"/>
				<Sounds id="button9"/>
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

export default Home;