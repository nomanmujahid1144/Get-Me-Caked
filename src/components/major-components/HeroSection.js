import React, { useEffect, useState } from 'react'
import { baseURL } from '../../constants/baseURL';
import { HeroMapInput } from '../minor-components/HeroMapInput'
import axiosInstance from "../../constants/axiosInstance";
import { Footer } from './Footer'
import {  useSelector , useDispatch } from 'react-redux';
import { useAlert } from 'react-alert'
import { DashboardProducts } from '../minor-components/DashboardProducts'
import BottomImage from '../../assets/second-hero-section.png'
import { getCategories } from '../../redux/Actions/CategoryActions';
import { getDiscountProducts, getFeatureProducts } from '../../redux/Actions/ProductActions';
import { getBlogs } from '../../redux/Actions/BlogsActions';
import { ButtonLink } from '../minor-components/Button';
import { SlickSliderForHeaderImages } from '../minor-components/SlickSlider';


export const HeroSection = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    let token = localStorage.getItem('token');
    const [location, setLocation] = useState(false);
    const [notLocated, setNotLocated] = useState(false);
    const [editHeaderPreview, seteditHeaderFilePreview] = useState('')
    const [editSliderPreview, seteditSliderFilePreview] = useState('')
    const config = {
        headers: {
            "Authorization": localStorage.getItem('token')
        }
    }

    const { categories } = useSelector(
        (state) => state.categoryReducer
    )
    const { featuredProducts } = useSelector(
        (state) => state.productReducer
    )

    const { discountProducts } = useSelector(
        (state) => state.productReducer
    )

    const { blogs } = useSelector(
        (state) => state.blogReducer
    )

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getFeatureProducts());
        dispatch(getBlogs());
        dispatch(getDiscountProducts());
        getUserInfo();
        getHeaderImages();
    }, [])


    const getHeaderImages = async () => {
        await axiosInstance.get('/api/v1/headerimages/getHeaderImages')
            .then((res) => {
                let images = res.data.data;
                if (images.length != 0) {
                    seteditHeaderFilePreview(res.data.data[0].headerPhoto)
                    seteditSliderFilePreview(res.data.data[0].sliderPhoto)
                } else {

                }

            })
            .catch((err) => {

            })
    }

    const getUserInfo = async () => {
        await axiosInstance.get('/api/v1/user/getsingleuser', config)
            .then((res) => {
                if (res.data.data.formattedAddress !== '') {
                    setLocation(true);
                } else {
                    setLocation(false);
                }
            })
            .catch((err) => {
            })
    }

    const updateUser = async (values) => {
        await axiosInstance.patch('/api/v1/user/updateuser', values, config)
            .then(async (res) => {
                if (res.data.success) {
                    let verifyLocation = {
                        formattedAddress: res.data.data.formattedAddress,
                        geometry: res.data.data.geometry
                    }
                    getAccessProducts(verifyLocation)
                }
                else {
                    // console.log('No Brand Found')
                }
            })
            .catch((error) => {
                // console.log(error, "Error in Fetching Brands")
            })
    }

    const getAccessProducts = async (verifyLocation) => {
        await axiosInstance.post('/api/v1/user/verifylocation', verifyLocation)
            .then((resp) => {
                if (resp.data.success) {
                    console.log(resp.data , 'Location')
                    if (resp.data.data != null) {
                        setLocation(true);
                        setNotLocated(false);
                    } else {
                        setLocation(false);
                        setNotLocated(true);
                    }
                }
                else {
                    // console.log('No Brand Found')
                        setLocation(false);
                        setNotLocated(true);
                }
            })
            .catch((error) => {
                setLocation(false);
                setNotLocated(true);
            })
    }

    const getLocation = async (values) => {
        if (token) {
            updateUser(values)
        } else {
            getAccessProducts(values)
        }
    }

    return (
        <>
            <HeroMapInput headerImage={editHeaderPreview} located={notLocated} gromatryLocation={getLocation} isLocaed={location} />
            {categories.length != 0 ? 
                <div className='w-full mx-auto bg-bgGrayLight p-5'>
                    <h2 className='text-center mb-10 text-2xl md:text-3xl text-primaryColor uppercase'>
                        Browse Our Catalogues
                    </h2>
                    <DashboardProducts categories={categories} isCategoryType={true} />
                </div>
                : null}
            {featuredProducts.length != 0 ? 
                <div className='w-full mx-auto my-10 p-5'>
                    <h2 className='text-center mb-10 text-2xl md:text-3xl text-primaryColor uppercase'>
                        Featured Products
                    </h2>
                    <DashboardProducts featuredProducts={featuredProducts} isFeaturedProducts={true} />
                </div>
                : null}
            <div className="w-[100%] h-[50vh] bg-footerImage  bg-no-repeat bg-center  bg-cover px-10  flex  items-center">
                <div className='w-fit h-fit p-5 bg-bgGrayLight rounded-3xl opacity-80 flex flex-col justify-center text-start'>
                    <h1 className='text-2xl text-primaryColor font-bold mb-4'>
                        Vapes to Go
                    </h1>
                    <p className='mb-4'>Disposable vapes are all charged up and ready to stroll</p>
                    <ButtonLink goto='vapes' type="Vapes"/>
                </div>
            </div>
            {discountProducts.length != 0 ?    
                <div className='w-full mx-auto my-10 p-5'>
                    <h2 className='text-center mb-10 text-2xl md:text-3xl text-primaryColor uppercase'>
                        Products-Under $40
                    </h2>
                    <DashboardProducts productDiscount={discountProducts} isProductDiscount={true} />
                </div>
            : null}
            
            <div className="w-[100%] h-[50vh] bg-flowerImage  bg-no-repeat bg-center  bg-cover px-10  flex justify-end  items-center">
                <div className='w-fit h-fit p-5 bg-bgGrayLight rounded-3xl opacity-80 flex flex-col justify-end text-start'>
                    <h1 className='text-2xl text-primaryColor font-bold mb-4'>
                        Flowers to Go
                    </h1>
                    <p className='mb-4'>Flowers are all charged up and ready to stroll</p>
                    <ButtonLink goto='flower' type="Flowers"/>
                </div>
            </div>
            <div className='w-full mx-auto my-10 p-5'>
                <h2 className='text-center mb-10 text-2xl md:text-3xl text-primaryColor uppercase'>
                    LATEST FROM THE BLOG
                </h2>
                <DashboardProducts blogs={blogs} isBlogType={true} />
            </div>
            <SlickSliderForHeaderImages>
                <>
                    <div className='relative'>
                        <img
                            src={editSliderPreview != '' ? baseURL + editSliderPreview : BottomImage}
                            className='md:h-[600px] px-0'
                            style={{ width: '100%', height: 'auto' }}
                            alt='Your Image'
                        />
                        <div className='absolute p-2 md:p-5 top-0 left-0 w-full h-full flex items-center'>
                            <div className='w-[90%] md:w-96 h-auto md:h-48 px-2 py-1 md:p-5 bg-bgGrayLight rounded-3xl opacity-80 flex flex-col justify-center text-start'>
                            <p className='text-lg md:text-2xl text-primaryColor font-bold mb-1 md:mb-4'>
                                Find your strain
                            </p>
                            <p>
                                With thousands to choose from, find the strain that fits your needs. Our products will make you feel Awesome.
                            </p>
                            </div>
                        </div>
                    </div>
                </>
            </SlickSliderForHeaderImages>
            {/* <div style={{ backgroundImage: `url(${editSliderPreview != '' ? baseURL + editSliderPreview : BottomImage})` }} className="w-[100%] h-[70vh]  bg-no-repeat bg-center  bg-cover px-10  flex  items-center">
                <div className='w-96 h-fit p-5 bg-bgGrayLight rounded-3xl opacity-80 flex flex-col justify-center text-start'>
                    <h1 className='text-2xl text-primaryColor font-bold mb-4'>
                        Find your strain
                    </h1>
                    <p>
                        With thousands to choose from, find the strain that fits your needs.Our products will make you feel Awesome.
                    </p>
                </div>
            </div> */}
            <>
                <Footer />
            </>

        </>
    )
}
