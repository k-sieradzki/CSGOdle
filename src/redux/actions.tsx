export const GUESSES = 'GUESSES';
export const RANDOM_SKIN = 'RANDOM_SKIN'
export const RESET = 'RESET'
export const COLORBLIND = 'COLORBLIND'

const createAction = (type:string) => (payload:any) => ({ type, payload });

export const actionCreators = {
    GUESSES: createAction(GUESSES),
    RANDOM_SKIN: createAction(RANDOM_SKIN),
    RESET: createAction(RESET),
    COLORBLIND: createAction(COLORBLIND),
};
