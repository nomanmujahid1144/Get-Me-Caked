import React, { useEffect, useState } from 'react'
import { Footer } from "./Footer";
import { useDispatch , useSelector } from 'react-redux';
import { Loader } from '../minor-components/Loader';
import { getDelivery } from '../../redux/Actions/DeliveryAction';

export const Delivery = () => {

  const dispatch = useDispatch();

    const loading = useSelector(
        (state) => state.ProgressBarReducer
    );

    const { data, headings } = useSelector(
        (state) => state.deliveryReducer
    )

  useEffect(() => {
    dispatch(getDelivery());
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <div className="py-20 text-center">

            <div className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4" dangerouslySetInnerHTML={{ __html: headings !== '' ? headings : 'Delivery Zone' }}></div>
            <div className="w-[100%] h-[60vh]  bg-no-repeat bg-center  bg-cover  flex justify-center  items-center gap-2 my-4">
              {/* <img src={mailDelivery} className='w-[100%] h-[50vh] object-cover' /> */}
              <iframe title='deliveryIframe' src="https://www.google.com/maps/d/embed?mid=1UX7pzLLGlXmhkUDg6Lz0jaKqtCGgLvY&ehbc=2E312F" className="w-[70%] h-[60vh]"></iframe>
            </div>

            <div className="lg:px-28 px-5 text-left" dangerouslySetInnerHTML={{ __html: data !== '' ? data : '' }}></div>
          </div>
          <div>
            <Footer />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

