import { SlickBlogSlider, SlickSlider } from '../minor-components/SlickSlider'
import { Card } from '../minor-components/Card'
import { baseURL } from '../../constants/baseURL';
import  axiosInstance  from '../../constants/axiosInstance';
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { getCartLength } from '../../redux/Actions/CartAction';

export const SinglDashboardProduct = (props) => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleItem = async (item, action) => {
        const details = {
            productId: item.id,
            quantity: item.quantity,
        }
        let url = ''

        if (action === 'p') {
            url = '/api/v1/order/addtocart'
        } else if (action === 'm') {
            url = '/api/v1/order/decreasecartquantity'
        }

        if (localStorage.getItem('token') == null) {
            alert.show("Sign in Your Account first")
            navigate('/login')
        } else { 
            axiosInstance.post(url, details, { 
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')
                }
            }).then((res) => {
                dispatch(getCartLength());
                alert.show("Product Added to Cart");
            }).catch((err) => {
                alert.show("Cart Updated");
            });
        }
    }

    return (
        <>
        {props.isCategoryType  ?
            <>
                <SlickSlider className='flex'>
                    {props.products?.map((item , index)=>( 
                        <>  
                            <div key={index} className='px-4'>
                                    <Card 
                                        svg={`${baseURL}${item.categoryPhoto}`} 
                                        title={item.brand}
                                        value={index}
                                        isCategoryType={true}
                                    /> 
                            </div>
                        </>
                    ))}
                </SlickSlider>
            </>
        : null}
        {props.isProducts ?
            <SlickSlider className='flex'>
                {props.products?.map((item , index)=>( 
                    <div key={index} className='p-4'>
                        <Card 
                            svg={`${baseURL}${item.productPhoto}`} 
                            title={item.name} 
                            desc={item.description} 
                            price={item.price} 
                            item={item}
                            value={index}
                            isProductType={true}
                            getItem={handleItem}
                        /> 
                    </div>
                ))}
            </SlickSlider>
        : null}
        {props.isProductDiscount ?
            <SlickSlider className='flex'>
                {props.products?.map((item , index)=>( 
                    <div key={index} className='p-4'>
                        <Card 
                            svg={`${baseURL}${item.productPhoto}`} 
                            title={item.name} 
                            desc={item.description} 
                            price={item.price} 
                            item={item}
                            value={index}
                            isProductDiscount={true}
                            getItem={handleItem}
                        /> 
                    </div>
                ))}
            </SlickSlider>
        : null}
        {props.isBlogType ?
            <SlickBlogSlider className='flex'>
                {props.blogs?.map((blog , index)=>( 
                    <div id={index} className="relative p-4">
                        <div className="bg-white  shadow-md border border-gray-200 rounded-3xl max-w-sm mb-5">
                            <a href={`/blog/${blog?._id}`}> <img className="rounded-t-3xl w-full  h-44" src={blog?.blogImage != '' ? baseURL + blog?.blogImage  : `https://flowbite.com/docs/images/blog/image-1.jpg`} alt="" /> </a>
                            <div className="p-5">
                                <a href={`/blog/${blog?._id}`}>
                                    <h5 className="text-textColor font-bold text-2xl tracking-tight mb-2" dangerouslySetInnerHTML={{ __html: blog?.blogHeading != '' ? blog?.blogHeading : '' }}></h5>
                                </a>
                                <p className="font-normal text-textColor mb-3" dangerouslySetInnerHTML={{ __html: blog?.data != '' ? blog?.data.slice(0, 50) + '...' : '' }}></p>
                                <div className="flex justify-center">
                                    <a className="text-white bg-primaryColor hover:bg-primaryColorHover font-medium rounded-full text-sm px-3 py-2 text-center inline-flex items-center" href={`/blog/${blog?._id}`} >
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </SlickBlogSlider>
        : null}
        {props.isBrandType ?
            <div className='flex'>
                {props.products?.map((item , index)=>( 
                    <>  
                        {item.brand === props.brand ?
                            <div key={index} className='px-4'>
                                <Card 
                                    svg={`${baseURL}${item.productPhoto}`} 
                                    title={item.name} 
                                    desc={item.description} 
                                    price={item.price} 
                                    item={item}
                                    value={index}
                                    getItem={props.handleItem}
                                /> 
                            </div>
                        :null}
                    </>
                ))}
            </div>
        : null}
        
        </>
    )
}