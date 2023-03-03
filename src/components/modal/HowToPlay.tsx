import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RxQuestionMarkCircled } from 'react-icons/rx';
import Switch from 'react-switch';

import styles from '../modal/modal.module.scss';
import Modal from 'react-modal';

import { customStyles } from './ModalSettings';
import Counter from '../counter/Counter';
const ModalHowToPlay: React.FC = () => {
	const [showModal, setShowModal] = useState(false);

	const handleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<div>
			<div onClick={handleModal}>
				<div className={styles.icon}>
					<RxQuestionMarkCircled />
					<div className={styles.iconInfo}>How to play?</div>
				</div>
			</div>

			<Modal
				className={styles.modal}
				isOpen={showModal}
				style={customStyles}
				onRequestClose={handleModal}
				ariaHideApp={false}
			>


				<div className={styles.howToPlay}>
					<h2 className={styles.sectionTitle}>How To Play?</h2>
					<p>Guess today's skin from Valve's game "CS:GO". It changes every 24h. </p>

					<div className={styles.centerSet}>
						<h4>Next skin in:</h4>
						<div className={styles.counter}>
						<Counter></Counter>
						</div>
						<p className={styles.grayParagraph}>Time zone: Europe</p>
					</div>
				</div>



				<div className={styles.skins}>
					<h2 className={styles.sectionTitle}>Skins</h2>
					<p className={styles.gameInfo}>
						In skin mode, simply type in the name of a skin and it will reveal its
						properties.
						<br />
						The color of the tiles will change to show how close your guess was to
						the skin to find.
						<br />
						<span className={styles.green}>Green</span> indicates the property
						is an exact match.
						<br />
						<span className={styles.red}>Red</span> indicates there is no
						overlap between your guess and the property.
						<br />
						⬇️ ⬆️ With arrows, it also indicates if the answer property is above
						or below your guess.
						<br />
					</p>
				</div>



				<div className={styles.properties}>
					<h2 className={styles.sectionTitle}>Properties</h2>
					<p>Here is the details of each of the properties columns:</p>


					<div className={styles.propBox}>
						<h3>Type:</h3>
						<p><span>Posiblle Values:</span> Rifle, Sniper Rifle, SMG, Pistol etc. </p>
					</div>

					<div className={styles.propBox}>
						<h3>Gun:</h3>
						<p><span>Posiblle Values:</span> AK-47, AWP, M4A4</p>
					</div>

					<div className={styles.propBox}>
						<h3>Name:</h3>
						<p><span>Posiblle Values:</span> Asiimov, Redline, Antique etc.</p>
					</div>

					<div className={styles.propBox}>
						<h3>Collection:</h3>
						<p><span>Posiblle Values:</span> Operation Phonenix, Operation Wildfire, Chroma</p>
					</div>

					<div className={styles.propBox}>
						<h3>Rarity:</h3>
						<p><span>Posiblle Values:</span> Covert, Classified, Restricted, Mil-Spec etc.</p>
					</div>

					<div className={styles.propBox}>
						<h3>Year:</h3>
						<p><span>Posiblle Values:</span> 2014, 2015, 2016 etc.</p>
					</div>
				</div>


				
				<div className={styles.example}>
					<h2 className={styles.sectionTitle}>Example</h2>
					<p>Consider the correct answer is AK-47 | The Empress.</p>
					<p>If you enter M4A4 | Asiimov, these properties will appear:</p>
					<img src="assets/missed.png" alt=""  className={styles.howToPlayImg}/>

					<div className={styles.exampleBox}>
						<h3>Type: <span className={styles.green}>Green</span></h3>
						<p>It is an exact match, they are both Rifles.</p>
					</div>

					<div className={styles.exampleBox}>
						<h3>Gun: <span className={styles.red}>Red</span></h3>
						<p>It is not a match since The Empress is AK-47.</p>
					</div>

					<div className={styles.exampleBox}>
						<h3>Name: <span className={styles.red}>Red</span></h3>
						<p>It is not a match since The Empress isn't Asiimov.</p>
					</div>


					<div className={styles.exampleBox}>
						<h3>Case: <span className={styles.red}>Red</span></h3>
						<p>It is not a match since isn't in Winter Offensive case</p>
					</div>


					<div className={styles.exampleBox}>
						<h3>Rarity: <span className={styles.green}>Green</span></h3>
						<p>It is an exact match, they are both Covert.</p>
					</div>


					<div className={styles.exampleBox}>
						<h3>Release year: <span className={styles.red}>Red</span> and a down arrow</h3>
						<p>AK-47 | The Empress's release year is after 2013.</p>
					</div>

					<p>If you entered AK-47 | The Empress, here is what would come up:</p>
					<img src="assets/full.png" alt="" className={styles.howToPlayImg}/>
					<h2>GL HF</h2>
				</div>






				<button onClick={handleModal} className={styles.closeTest}>
					X
				</button>
			</Modal>
		</div>
	);
};

export default ModalHowToPlay;
