import React, { useState, useEffect } from 'react';
import styles from './main.module.scss';
import { useSelector, useDispatch } from 'react-redux';





const Main = () => {
	const [showLabels, setShowLabels] = useState(false)
	const colorBlind = useSelector((state: any) => state.colorBlind);
	const guesses = useSelector((state: any) => state.guesses);
	const guessThisSkin = useSelector((state: any) => state.guessThisSkin);

	const labelStyles = { display: showLabels ? 'flex' : 'none'};




	//console.log(guesses)

	useEffect(() => {
		if (guesses.length > 0 ) {
			setShowLabels(true);
		}
	}, [guesses]);

	return (
		<>
			<div className={styles.guessingContainer}>
				<div className={styles.answerContainer}>
					<div className={styles.guessingInfo} style={labelStyles}>
						<div className={styles.infoBox}>Skin</div>
						<div className={styles.infoBox}>Type</div>
						<div className={styles.infoBox}>Gun</div>
						<div className={styles.infoBox}>Name</div>
						<div className={styles.infoBox}>Case</div>
						<div className={styles.infoBox}>Rarity</div>
						<div className={styles.infoBox}>Year</div>
					</div>

					{guesses.length > 0 && guesses.map((key: any, index: any) => {
						const compareValues = (guessThisSkin:any, key:any) => {
							return Object.keys(guessThisSkin).reduce((colors:any, field:any) => {
							  colors[field] = guessThisSkin[field] === key[field] ? colorBlind ? 'blue' : 'green' : colorBlind ? 'orangered' : 'red';
							  return colors;
							}, {});
						  };

						  const colors = compareValues(guessThisSkin, key);
						  const keyArrow = (guessThisSkin.year > key.year) ? styles.yearArrowUp : (guessThisSkin.year < key.year) ? styles.yearArrowDown  : null 

						return (
							<div className={styles.answerBox} key={index}>
								<div className={styles.square} style={{ backgroundColor: colors.image }}> <img src={key.image} alt='' /> </div>
								<div className={styles.square} style={{ backgroundColor: colors.type }}>{key.type}</div>
								<div className={styles.square} style={{ backgroundColor: colors.gun }}>{key.gun}</div>
								<div className={styles.square} style={{ backgroundColor: colors.name }}>{key.name}</div>
								<div className={styles.square} style={{ backgroundColor: colors.collection }}>{key.collection}</div>
								<div className={styles.square} style={{ backgroundColor: colors.rarity }}>{key.rarity}</div>
								<div className={`${styles.square} ${keyArrow}`} style={{ backgroundColor: colors.year }}><p>{key.year}</p></div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Main;
