import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutProducts } from "../minor-components/CheckoutProducts";
import { CheckoutUserDetails } from "../minor-components/CheckoutUserDetails";
import axiosInstance from '../../constants/axiosInstance';
import { Loader } from '../minor-components/Loader'
import { useAlert } from 'react-alert'
import { Footer } from "./Footer";
import { useDispatch } from "react-redux";
import { getCartLength } from "../../redux/Actions/CartAction";

export const Checkout = () => {

  const [loading, setLoading] = useState(false)
  const [cartItems, setCartItems] = useState([]);
  const [cartUser, setCartUser] = useState([]);
  const [subTotalPrice, setSubTotalPrice] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);
  const [deliveryFee, setDeliveryFee] = useState([]);
  let navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCartLength());
    if (localStorage.getItem('token')) {
      fetchCart();
      setLoading(false)
      navigate("/checkout")
    } else {
      navigate("/login")
    }
  }, [loading])


  // let response ;
  const fetchCart = async () => {
    setLoading(true)
    await axiosInstance.get("/api/v1/order/getcart", {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
      .then((response) => {
        setLoading(false)
        setCartItems(response.data.data.details);
        setSubTotalPrice(response.data.data.subTotal);
        setTotalProducts(response.data.data.totalProducts);
        setTotalPrice(response.data.data.totalPrice);
        setDeliveryFee(response.data.data.deliveryFee);
        setCartUser(response.data.data.userId);
      })
      .catch((err) => {
        setLoading(false)
      })

  };

  const handleDelivery = async (day) => {
    // console.log(day ,'DAY')
  }

  const handleSubmit = async (deliveryDay, total, deliveryCharges, deliveryAddress, postalCode, paymentMethod, coordinates) => {
    // if (paymentMethod === '') {
    //   alert.show("Please Select Payment Method")
    // } else {
      
    // }

    let order = {
      details: cartItems,
      totalPrice: total,
      deliveryFee: deliveryCharges,
      deliveryType: deliveryDay,
      subTotal: total - deliveryCharges,
      totalProducts: totalProducts,
      formattedAddress: deliveryAddress,
      postalCode: postalCode,
      paymentMethod: paymentMethod,
      geometry: [coordinates[0], coordinates[1]]
    }


    await axiosInstance.post("/api/v1/order/placeorder", order, {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
      .then((response) => {
        if (response.data.success) {
          axiosInstance.delete('/api/v1/order/deletecart', {
            headers: {
              "Authorization": localStorage.getItem('token')
            }
          })
            .then((res) => {
              if (res.data.success) {
                dispatch(getCartLength());
                alert.show("Order Place Successfully")
                navigate('/')
              } else {
                alert.show("Something Went Wrong")
              }
            })

        }
      })
      .catch((err) => {
        // console.log(err, 'Error response')
      })

  }

  const handleItem = async (item, action) => {
    setLoading(true)
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

    axiosInstance.post(url, details, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    }).then((res) => {
      dispatch(getCartLength());
      setLoading(false)
    }).catch((err) => {
      dispatch(getCartLength());
      setLoading(false)

    })
  }

  const handleExtraItem = async (item, action) => {
    setLoading(true)
    const details = {
      productId: item.productId,
      quantity: item.quantity,
      extras: item.extras
    }
    let url = ''

    if (action === 'p') {
      url = '/api/v1/order/addtocart'
    } else if (action === 'm') {
      url = '/api/v1/order/decreaseextrasquantity'
    }

    axiosInstance.post(url, details, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    }).then((res) => {
      dispatch(getCartLength());
      setLoading(false)
    }).catch((err) => {
      dispatch(getCartLength());
      setLoading(false)
    })
  }


  return (
    <>
      {!loading ?
        <>
          <div>
            {cartItems.length != 0 ?
              <>
                <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 my-16 text-textColor">
                  <div className="px-4 pt-8">
                    <p className="text-xl font-medium">Order Summary</p>
                    {cartItems.map((product, index) => (
                      <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6 ">
                        <CheckoutProducts
                          key={index}
                          cartProductId={product.productId._id}
                          cartProductName={product.productId.name}
                          cartProductImage={product.productId.productPhoto}
                          cartProductPrice={product.productId.price}
                          cartProductBrand={product.productId.brand}
                          cartExtras={product.extras}
                          cartProductCategory={product.productId.category}
                          cartProductDescription={product.productId.description}
                          cartProductType={product.productId.type}
                          cartProductQuantity={product.quantity}
                          getItem={handleItem}
                          getExtraItem={handleExtraItem}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-10  px-4 pt-8 lg:mt-0">
                    <CheckoutUserDetails
                      handleSubmit={handleSubmit}
                      handleDeliveryDay={handleDelivery}
                      cartUser={cartUser}
                      totalPrice={totalPrice}
                      subTotalPrice={subTotalPrice}
                      deliveryFee={deliveryFee}
                    />
                  </div>
                </div>
              </>
              : <>
                <div className="block text-center justify-center my-10">
                  <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_qh5z2fdq.json" background="transparent" speed={1} style={{ height: '300px', display: 'inline-block' }} loop autoPlay />
                  <p className="text-4xl text-textColor font-bold">
                    Cart is Empty!Please Add some Products
                  </p>
                </div>
              </>}
          </div>
          <div>
            <Footer />
          </div>
        </>
        : (
          <Loader />
        )}
    </>
  );
};
