import { GUESSES, RANDOM_SKIN, RESET, COLORBLIND } from './actions';

export const initialState: any = {
	guessThisSkin: {},
	guesses: [],
	colorBlind: false,
};

export const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case GUESSES:
			return { ...state, guesses: [action.payload, ...state.guesses] };
		case RANDOM_SKIN:
			return { ...state, guessThisSkin: action.payload };
		case RESET:
			return { ...state, guesses: action.payload };
		case COLORBLIND:
			return { ...state, colorBlind: action.payload };
		default:
			return state;
	}
};
