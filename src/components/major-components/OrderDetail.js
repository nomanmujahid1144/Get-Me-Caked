import { Footer } from "./Footer";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Noty from "noty";
import  axiosInstance  from "../../constants/axiosInstance";
import { baseURL } from "../../constants/baseURL";
import { getStatusBatch } from "../../constants/helperfunctions";
export const OrderDetail = () => {

  const params = useParams()
  const orderId = params.orderid;
  const [order, setOrder] = useState({})
  const [batch, setBatch] = useState('')
  useEffect(() => {
    getOrderDetail()
  }, [orderId])

  useEffect(() => {
    if (order) {
      const batch_Status = getStatusBatch(order?.status, order?.pickUpStatus);
      setBatch(batch_Status)
    }
  }, [order])

  const getOrderDetail = async () => {
    axiosInstance.get('/api/v1/order/getorderbyorderid', {
      params: {
        orderId: orderId
      }
    })
      .then((res) => {
        setOrder(res.data.data[0])
      })
      .catch((err) => {
        new Noty({
          type: "error",
          timeout: 2000,
          text: "Something Went Wrong"
        }).show();
      })
  }

  return (
    <>
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col">
          <h1 className="text-3xl  lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #{order.orderid}</h1>
          <p className="flex text-base font-medium leading-6 text-gray-600">
            {order.date} at {order.time}
              <div className="ml-3" dangerouslySetInnerHTML={{ __html: batch }} />
          </p>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
              {order?.details?.map((order, index) => (
                <div key={index} className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                  <div className="pb-4 md:pb-8 w-full md:w-40">
                    <img className="w-full hidden md:block rounded-full h-32" src={`${baseURL + order.productId.productPhoto}`} alt="dress" />
                    <img className="w-full md:hidden h-32 rounded-full" src={`${baseURL + order.productId.productPhoto}`} alt="dress" />
                  </div>
                  <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                      <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{order.productId.name}</h3>
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-sm leading-none text-gray-800"><span className=" text-gray-300">Brand: </span> {order.productId.brand}</p>
                        <p className="text-sm leading-none text-gray-800"><span className=" text-gray-300">Category: </span> {order.productId.category}</p>
                        <p className="text-sm leading-none text-gray-800"><span className=" text-gray-300">Sub-Category: </span> {order.productId.subCategory}</p>
                        <p className="text-sm leading-none text-gray-800"><span className=" text-gray-300">Type: </span> {order.productId.type}</p>
                      </div>
                    </div>
                    <div className="flex justify-between space-x-8 items-start w-full">
                      <p className="text-base xl:text-lg leading-6">${order.productId.price}</p>
                      <p className="text-base xl:text-lg leading-6 text-gray-800">{order.quantity}</p>
                      <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">${order.productTotal}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
              <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between w-full">
                    <p className="text-base leading-4 text-gray-800">Subtotal</p>
                    <p className="text-base leading-4 text-gray-600">${order.subTotal}</p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base leading-4 text-gray-800">Delivery Charges</p>
                    <p className="text-base leading-4 text-gray-600">${order.deliveryFee}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                  <p className="text-base font-semibold leading-4 text-gray-600">${order.totalPrice}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
            <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer</h3>
            <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
              <div className="flex flex-col justify-start items-start flex-shrink-0">
                <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                  <img className="rounded-full" src={`${order?.userId?.profilePhoto !== '' ? baseURL + order?.userId?.profilePhoto : 'https://i.ibb.co/5TSg7f6/Rectangle-18.png'}`} alt="avatar" />
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-base font-semibold leading-4 text-left text-gray-800">{order?.userId?.fullName}</p>
                    <p className="text-sm leading-5 text-gray-600">{order?.userId?.deliveryZipCode}</p>
                  </div>
                </div>
                <div className="flex justify-center text-gray-800 md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 7L12 13L21 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="cursor-pointer text-sm leading-5 ">{order?.userId?.email}</p>
                </div>
              </div>
              <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                  <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                  </div>
                  <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{order?.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>

  )
}