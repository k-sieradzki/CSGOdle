import React from 'react';
import styles from './logo.module.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<div className={styles.logo}>
			<Link to={'/'}>
				<img src='assets/logo.png' alt='csgodle logo' />
			</Link>
		</div>
	);
};

export default Logo;
