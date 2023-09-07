import  axiosInstance  from '../../constants/axiosInstance';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';
import { selectProgressBarState } from './ProgressBarActions';


export const getCartLength = () => {
    return async (dispatch) => {
        dispatch(selectProgressBarState(true))
        const res = await axiosInstance.get('/api/v1/order/getcartlength')
        if (res.data.success === true) {
            dispatch(selectProgressBarState(false))
            dispatch({
                type: ACTION_TYPES.GET_CART_LENGTH,
                payloadLength : res.data?.data,
            })
        }
        else {
            dispatch(selectProgressBarState(false))
            alert.show('No Cart Found')
            dispatch({
                type: ACTION_TYPES.GET_CART_LENGTH,
                payloadLength : 0,
            })
        }
    }
}
