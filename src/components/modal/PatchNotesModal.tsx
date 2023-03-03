import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { RxQuestionMarkCircled } from 'react-icons/rx';
import { CgNotes } from 'react-icons/cg';

import styles from '../modal/modal.module.scss';
import Modal from 'react-modal';

import { customStyles } from './ModalSettings';

const PatchNotesModal: React.FC = () => {
	const [showModal, setShowModal] = useState(false);
	const handleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<div>
			<div onClick={handleModal}>
				<div className={styles.icon}>
					<CgNotes />
					<div className={styles.iconInfo}>Patch notes</div>
				</div>
			</div>

			<Modal
				className={styles.modal}
				isOpen={showModal}
				style={customStyles}
				onRequestClose={handleModal}
				ariaHideApp={false}
			>
				<div className='div'>
					<h2 className={styles.sectionTitle}> Patch notes</h2>

					<div className={styles.centerSet}>
						<div className={styles.patchBox}>
							<div className={styles.date}>12 / 02 / 2023</div>
							<div className={styles.patchInfo}>
								Added <span>Revolution Case</span>
							</div>
						</div>
					</div>
				</div>

				<button onClick={handleModal} className={styles.closeTest}>
					X
				</button>
			</Modal>
		</div>
	);
};

export default PatchNotesModal;
