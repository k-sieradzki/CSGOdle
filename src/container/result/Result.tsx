import React, { useState, useEffect, useRef, RefObject } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './result.module.scss';

import Counter from '../../components/counter/Counter';

const Result: React.FC = () => {
	const resultContainerRef = useRef<HTMLDivElement>(null);

	const [showInput, setShowInput] = useState(false);
	const guesses = useSelector((state: any) => state.guesses);
	const guessThisSkin = useSelector((state: any) => state.guessThisSkin);

	const inputSkinsBoxStyles = {display: showInput ? 'block' : 'none'};

	const handleScroll = () => {
		if (resultContainerRef.current) {
			resultContainerRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => {
		if (guesses[0] === guessThisSkin) {
			setShowInput(true);
		}
	}, [guesses]);

	useEffect(() => {
		setTimeout(() => {
			handleScroll();
		}, 1000);
	}, [showInput]);



	return (
		<div
			className={styles.resultContainer}
			style={inputSkinsBoxStyles}
			ref={resultContainerRef as RefObject<HTMLDivElement>}
		>
			<div className={styles.result}>
				<div className={styles.inside}>
					<h2>GG WP</h2>
					<div className={styles.answer}>
						<div className={styles.img}>
							<img src={guessThisSkin.image} alt='' />
						</div>
						<div className={styles.skin}>
							<p>You guessed</p>
							<span>{guessThisSkin.fullName}</span>
						</div>
					</div>
					<div className={styles.tries}>
						<p>
							Number of tries: <span>{guesses.length}</span>
						</p>
					</div>

					<div className={styles.counter}>
						<h2>Next skin in</h2>
						<Counter/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Result;
