import React, { useState, useEffect } from 'react';

import styles from './styles/app.module.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GuessSkin from './pages/GuessSkinPage/GuessSkin';
import Main from './pages/MainPage/MainPage';

interface RouteProps {
	path: string;
	exact?: boolean;
	element: React.ReactElement;
}
function App() {
	return (
		<div className={styles.appContainer}>
			<div className={styles.app}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/skins' element={<GuessSkin />} />
						{/* <Route path='/maps' element={<GuessSkin />} />
				<Route path='/clutches' element={<GuessSkin />} />
				<Route path='*' element={ <WrongRoute/>}/> */}
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
