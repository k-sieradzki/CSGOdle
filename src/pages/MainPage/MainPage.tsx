import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';

import Footer from '../../container/footer/Footer';
import styles from '../../styles/mainPage.module.scss'

import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../../redux/actions';
const MainPage = () => {


    const dispatch = useDispatch()
	const guesses = useSelector((state: any) => state.guesses);
	useEffect(() => {
		dispatch(actionCreators.RESET([]));
		return
	}, [])


	return (
		<>
			<Logo />

			<div className={styles.links}>
				<Link to={'skins'}>
                    <div className={`${styles.link} ${styles.zoomed} ${styles.linkBlurry}`}>
                        <p>SKINS</p>
                    </div>
                </Link>

                <Link to={'/'}>
                    <div className={`${styles.link} ${styles.soon}`}>
                        <p>MAPS - <span>COMING SOON</span></p>
                    </div>
                </Link>

                <Link to={'/'}>
                    <div className={`${styles.link} ${styles.soon}`}>
                        <p>CLUTCHES - <span>COMING SOON</span></p>
                    </div>
                </Link>
			</div>

            <Footer/>
		</>
	);
};

export default MainPage;
