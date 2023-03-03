import React from 'react';
import styles from './navbar.module.scss';
import { Link } from 'react-router-dom';
import { MdLeaderboard } from 'react-icons/md';
import { AiOutlineFire } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { CgNotes } from 'react-icons/cg';
import { RxQuestionMarkCircled } from 'react-icons/rx';

import Logo from '../../components/Logo/Logo';
import ModalHowToPlay from '../../components/modal/HowToPlay';
import PatchNotesModal from '../../components/modal/PatchNotesModal';
import SettingsModal from '../../components/modal/SettingsModal';
const Navbar: React.FC = () => {
	return (
		<>
			<Logo/>
			<div className={styles.iconsBox}>
				<div className={styles.icon}><AiOutlineFire/>
					<div className={styles.iconInfo}><p>Daily streak</p></div>
				</div>
				<SettingsModal/>

				<PatchNotesModal/>


				<ModalHowToPlay/>
			</div>
		</>
	);
};






export default Navbar;
