export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const THEME_CHANGE = 'THEME_CHANGE';

// Action Creators
export const increment = (value) => ({
    type: INCREASE,
    payload: value,
});

export const decrement = (value) => ({
    type: DECREASE,
    payload: value,
});

export const setTheme = (theme) => ({
    type: THEME_CHANGE,
    payload: theme,
});