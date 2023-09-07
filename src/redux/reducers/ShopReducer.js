import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

const initialState = {
    shops: [],
};

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_SHOP_INFO: {
            return {
                ...state,
                shops: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
export default shopReducer;