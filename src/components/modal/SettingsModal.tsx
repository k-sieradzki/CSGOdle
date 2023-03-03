import React, {useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RxQuestionMarkCircled } from 'react-icons/rx';
import Switch from "react-switch";

import { actionCreators } from '../../redux/actions';


import styles from '../modal/modal.module.scss'
import { FiSettings } from 'react-icons/fi';
import Modal from 'react-modal';

import { customStyles } from './ModalSettings';

const SettingsModal: React.FC = () => {
	const [showModal, setShowModal] = useState(false);
	const colorBlind = useSelector((state: any) => state.colorBlind);
	const dispatch = useDispatch()


	const [isColorBlind, setisColorBlind] = useState(false)

	const handleModal = () => {
		setShowModal(!showModal);
	};

	useEffect(() => {
		dispatch(actionCreators.COLORBLIND(isColorBlind))
	}, [isColorBlind])
	


	return (
		<div>
			<div onClick={handleModal}>
            <div className={styles.icon}><FiSettings/>
					<div className={styles.iconInfo}>Settings</div>
				</div>
			</div>

			<Modal
				className={styles.modal}
				isOpen={showModal}
				style={customStyles}
				ariaHideApp={false}
				onRequestClose={handleModal}
			>

				<div className="div">
					<h2 className={styles.sectionTitle}>Settings</h2>

					<div className={styles.centerSet}>
						<h3>Colorblind mode</h3>
						<Switch className={styles.switch} onChange={() => {setisColorBlind(!isColorBlind)}} checked={isColorBlind} />
					</div>
				</div>


				<button onClick={handleModal} className={styles.closeTest}>X</button>	
			</Modal>
		</div>
	);
};

export default SettingsModal;
