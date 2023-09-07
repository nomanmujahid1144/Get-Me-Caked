import  axiosInstance  from '../../constants/axiosInstance';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';
import { selectProgressBarState } from './ProgressBarActions';


export const getShops = () => {
    return async (dispatch) => {
        dispatch(selectProgressBarState(true))
        const res = await axiosInstance.get('/api/v1/admin/getshop')
        if (res.data.success === true) {
            dispatch(selectProgressBarState(false))
            if (res.data.success) {
                dispatch({
                    type: ACTION_TYPES.GET_SHOP_INFO,
                    payload : res.data.data,
                })
            }
        }
        else {
            dispatch(selectProgressBarState(false))
            alert.show('No About Us Found')
            dispatch({
                type: ACTION_TYPES.GET_SHOP_INFO,
                payload : [],
            })
        }
    }
}
