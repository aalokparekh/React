import { INCREASE, DECREASE } from '../Store/action';

const initialState = {
    count: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                count: state.count + action.payload,
            };
        case DECREASE:
            return {
                ...state,
                count: state.count - action.payload,
            };
        default:
            return state;
    }
};

export default counterReducer;