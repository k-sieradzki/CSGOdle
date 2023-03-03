import React, { useState, useEffect, useMemo } from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import styles from './header.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { skinsBox } from '../../data/skinsBox';
import { actionCreators } from '../../redux/actions';

const Header: React.FC = () => {
	const dispatch = useDispatch();
	const guesses = useSelector((state: any) => state.guesses);
	const guessThisSkin = useSelector((state: any) => state.guessThisSkin);

	const [input, setInput] = useState('');
	const [showInput, setShowInput] = useState(true);

	const inputSkinsBoxStyles = { display: showInput ? 'block' : 'none' };

	const filteredArray = useMemo(() => {
		const filtered: any = [];

		for (const collection in skinsBox) {
			skinsBox[collection].skins.forEach((e: any) => {
				const fullNameLower = e.fullName.toLowerCase();
				const inputLower = input.toLowerCase();

				if ( input.length > 1 && (fullNameLower.includes(inputLower) || fullNameLower.split(' | ').join(' ').trim().includes(inputLower))) {
					filtered.push(e);
				} else if (input.length === 1 && e.name.charAt(0).toLowerCase() === inputLower.charAt(0)) {
					filtered.push(e);
				}
			});
		}
		return filtered;
	}, [input]);

	const result = useMemo(
		() =>
			filteredArray.filter(
				(guess: any) =>
					!guesses.some(
						(guesses: any) => JSON.stringify(guess) === JSON.stringify(guesses)
					)
			),
		[filteredArray]
	);


	const handleProductIdChange = (event: React.ChangeEvent<HTMLInputElement> ) => { setInput(event.target.value);};



	const handleClick = (key: any) => {
		setInput('');
		dispatch(actionCreators.GUESSES(key));
	};

	const submitInput = () => {
		if(result.name !== undefined){
			if (input.toLowerCase() === result[0].name.toLowerCase()) {
				setInput('');
				dispatch(actionCreators.GUESSES(result[0]));
			}
		}
	};


	useEffect(() => {
		if (guesses[0] === guessThisSkin) {
			setShowInput(false);
		}
	}, [guesses]);

	useEffect(() => {
		const addCity = (event: any) => {
			if (event.keyCode === 13) {
				event.preventDefault();
				submitInput();
			}
		};
		document.addEventListener('keydown', addCity);
		return () => {
			document.removeEventListener('keydown', addCity);
		};
	});


	
	return (
		<>
			<div className={styles.infoBox}>
				<div className={styles.info}>
					<h2>Guess today's CS:GO skin!</h2>
					<p>Type any skin to begin.</p>
				</div>
			</div>
			{/* <div className={styles.usersInfo}>
				<span>103300</span> people already found out!
			</div> */}

			<div className={styles.inputSkinsBox} style={inputSkinsBoxStyles}>
				<div className={styles.inputBox}>
					<input type='text' value={input} onChange={handleProductIdChange} />
					<div className={styles.icon} onClick={() => submitInput()}>
						<BsFillArrowRightSquareFill />
					</div>
				</div>
			</div>

			<div className={styles.skinsAccordion}>
				{result.map((key: any, index: any) => {
					return (
						<div
							className={styles.skin}
							key={index}
							onClick={() => handleClick(key)}
						>
							<img
								className={styles.skinImg}
								src={key.image}
								alt={key.fullName}
							/>
							<div className='name'>{key.fullName}</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Header;
