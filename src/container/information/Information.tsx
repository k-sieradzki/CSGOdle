import React from 'react';
import styles from './information.module.scss';
import { useSelector, useDispatch } from 'react-redux';


const Information: React.FC = () => {
	const colorBlind = useSelector((state: any) => state.colorBlind);

	let correctColor =  colorBlind ? 'blue' : 'green' ;
	let incorrectColor = colorBlind ? 'orangered' : 'red'
	return (
		<>
			<div className={styles.indicators}>
				<div className={styles.info}>
					<h3>Color indicators</h3>
					<div className={styles.colorsBox}>
						<div className={styles.box}>
							<div className={styles.correct} style={{ backgroundColor: correctColor}}></div>
							<p>Correct</p>
						</div>
						<div className={styles.box}>
							<div className={styles.incorrect} style={{ backgroundColor: incorrectColor }}></div>
							<p>Incorrect</p>
						</div>
					</div>
				</div>
			</div>

		</>
	);
};

export default Information;
