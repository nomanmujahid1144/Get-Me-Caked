import React, { useEffect  } from 'react'
import { Footer } from "./Footer";
import { Loader } from '../minor-components/Loader';
import { useDispatch , useSelector } from 'react-redux';
import { getAboutUs } from '../../redux/Actions/AboutusAction';

export const AboutUs = () => {

    const dispatch = useDispatch();

    const loading = useSelector(
        (state) => state.ProgressBarReducer
    );

    const { data, headings } = useSelector(
        (state) => state.aboutusReducer
    )

    useEffect(() => {
        dispatch(getAboutUs()); 
    }, []);

    return (
        <>
            {!loading ? (
                <>
                    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 text-center" >
                        <div className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4" dangerouslySetInnerHTML={{ __html: headings !== '' ? headings : 'About Us' }}></div>
                        <div className="block text-center justify-center my-10">
                            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_nvhJxJ38ZY.json" background="transparent" speed={1} style={{ height: '600px', display: 'inline-block' }} loop autoplay />
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

