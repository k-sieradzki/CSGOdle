import React, { useEffect } from 'react';

import styles from '../../styles/skinsPage.module.scss';

import Navbar from '../../container/navbar/Navbar';
import Header from '../../container/header/Header';

import Main from '../../container/main/Main';
import Result from '../../container/result/Result';
import Information from '../../container/information/Information';
import Footer from '../../container/footer/Footer';

import RandomSkinGenerate from '../../backend/randomSkinGenerate';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../../redux/actions';

const GuessSkin = () => {



	return (
		<main>
			<RandomSkinGenerate />
			<div className={styles.topContainer}>
				<Navbar />
				<Header />
			</div>

			<Main />

			<div className={styles.botContainer}>
				<Information />
				<Result />

				{/* <p className={styles.summary}>
					Yesterday's skin was <span className={styles.skinsCount}>#1 </span>
					<span className={styles.yesterdaySkin}>AWP | Dragon Lore</span>
				</p> */}
				<Footer />
			</div>
		</main>
	);
};

export default GuessSkin;
