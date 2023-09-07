import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getSingleUserOrder } from '../../redux/Actions/OrdersAction';

export const OrderHistory = (props) => {
    const dispatch = useDispatch();

    const { singleUserOrders } = useSelector(
        (state) => state.orderReducer
    )

    useEffect(() => {
        dispatch(getSingleUserOrder());
    }, [])


    return (
        <>
            <div className='w-full h-[85vh]'>
            <div style={{ scrollbarWidth: 'thin' }} className="container h-full mx-auto overflow-auto">
                    <div className="w-full shadow-[0px_3px_12px_rgba(0,0,0,0.1)] py-2">
                        <div className="w-full lg:w-full  text-[#4E4E4E] text-2xl font-semibold md:w-full bg-white rounded-lg text-center">Order History</div>
                    </div>
                    {singleUserOrders.map((order , index) => (
                        <div key={index} className="w-full mt-5">
                            <div class="m-5 px-4 py-2 shadow-md rounded-lg">
                                <div className='flex justify-between'>
                                    <div>Order Id : {order.orderid}</div>
                                    <div>Price : ${order.totalPrice}</div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>Date / Time: {order.date} at {order.time}</div>
                                    <div className='text-myBg'><a href={`/order/${order._id}`}>Details</a></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}