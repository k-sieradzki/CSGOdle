import React, { useState, useEffect } from 'react';
import { skinsBox } from '../data/skinsBox';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../redux/actions';



const RandomSkinGenerate: React.FC = () => {
	const dispatch = useDispatch()
	const random = useSelector((state:any) => state.guessThisSkin)

	let isRandomSkinFnCalled = false;

	const randomSkinFnWrapper = () => {
		if (isRandomSkinFnCalled) return;
		isRandomSkinFnCalled = true;


		const allSkins = [].concat(...Object.values(skinsBox).map((operation:any) => operation.skins));

		const randomIndex = Math.floor(Math.random() * allSkins.length);
		const randomSkin = allSkins[randomIndex];

		dispatch(actionCreators.RANDOM_SKIN(randomSkin))
	};

	useEffect(() => {
		randomSkinFnWrapper();
	}, []);
	return <></>;
};
export default RandomSkinGenerate;
