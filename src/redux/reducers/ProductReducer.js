import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

const initialState = {
    product: {},
    products: [],
    featuredProducts: [],
    discountProducts: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_PRODUCTS: {
            return {
                ...state,
                products: action.payload,
            };
        }
        case ACTION_TYPES.GET_FEATURE_PRODUCTS: {
            return {
                ...state,
                featuredProducts: action.payload,
            };
        }
        case ACTION_TYPES.GET_DISCOUNT_PRODUCTS: {
            return {
                ...state,
                discountProducts: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
export default productReducer;