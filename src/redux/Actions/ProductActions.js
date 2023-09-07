import  axiosInstance  from '../../constants/axiosInstance';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';
import { selectProgressBarState } from './ProgressBarActions';


export const getProducts = () => {
    return async (dispatch) => {
        dispatch(selectProgressBarState(true))
        const res = await axiosInstance.get('/api/v1/product/getproducts')
        if (res.data.success === true) {
            dispatch(selectProgressBarState(false))
            dispatch({
                type: ACTION_TYPES.GET_PRODUCTS,
                payload: res.data.data
            })
        }
        else {
            dispatch(selectProgressBarState(false))
            alert.show('No Products Found')
            dispatch({
                type: ACTION_TYPES.GET_PRODUCTS,
                payload: []
            })
        }
    }
}

export const getFeatureProducts = () => {
    return async (dispatch) => {
        dispatch(selectProgressBarState(true))
        const res = await axiosInstance.get('/api/v1/product/getfeatureproducts')
        if (res.data.success === true) {
            dispatch(selectProgressBarState(false))
            dispatch({
                type: ACTION_TYPES.GET_FEATURE_PRODUCTS,
                payload: res.data.data
            })
        }
        else {
            dispatch(selectProgressBarState(false))
            alert.show('No Products Found')
            dispatch({
                type: ACTION_TYPES.GET_FEATURE_PRODUCTS,
                payload: []
            })
        }
    }
}

export const getDiscountProducts = () => {
    return async (dispatch) => {
        dispatch(selectProgressBarState(true))
        const res = await axiosInstance.get('/api/v1/product/getdiscountproducts')
        if (res.data.success === true) {
            dispatch(selectProgressBarState(false))
            dispatch({
                type: ACTION_TYPES.GET_DISCOUNT_PRODUCTS,
                payload: res.data.data
            })
        }
        else {
            dispatch(selectProgressBarState(false))
            alert.show('No Products Found')
            dispatch({
                type: ACTION_TYPES.GET_DISCOUNT_PRODUCTS,
                payload: []
            })
        }
    }
}
