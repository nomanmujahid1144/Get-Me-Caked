import React, { useState, useEffect , useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLogo from "../../assets/logo.png";
import search from "../../assets/bx-search.svg";
import shoppingCart from "../../assets/shopping-cart.svg";
import notificationBell from "../../assets/bell-regular.svg";
import { IconBgRound } from "../minor-components/IconBgRound";
import { EarnDollars } from "../minor-components/EarnDollars";
import { Help } from "../minor-components/Help";
import { OrderHistory } from "../minor-components/OrderHistory";
import { Modal } from "../minor-components/Modal";
import axiosInstance from '../../constants/axiosInstance';
import { useAlert } from 'react-alert'
import { useDispatch , useSelector } from "react-redux";
import { Button } from "../minor-components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCategories } from "../../redux/Actions/CategoryActions";
import { getCartLength } from "../../redux/Actions/CartAction";

export const Navbar = () => {
  let nevigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const buttonRef = useRef(null);
  const transitionRef = useRef(null);

  const [showSidebar, setshowSidebar] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const [isOpenOrderHistory, setIsOpenOrderHistory] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const [cart, setCart] = useState(0);
  const [notificationPopUp, setNotificationPopUp] = useState(false);

  const config = {
    headers: {
      "Authorization": localStorage.getItem('token')
    }
  }


  const { categories } = useSelector(
    (state) => state.categoryReducer
  )

  const { cartLength } = useSelector(
    (state) => state.cartReducer
  )

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getCartLength());
    getCart();
  }, [cart])

  useEffect(() => {
    getAnnouncementList();
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get("message");

    if (message) {
      // Display the message
      alert.show(message);
    }
    // Clear the query parameter to avoid showing the message again on subsequent refreshes
    const url = new URL(window.location.href);
    url.searchParams.delete("message");
    window.history.replaceState({}, document.title, url.toString());
  } , [])

  const handleLogout = () => {
    localStorage.removeItem("token");
    const message = "Logout Successfully";
    const url = new URL(window.location.href);
    url.searchParams.set("message", message);
    window.location.href = url.toString();
  };

  const getCart = async (e) => {
    try {
      axiosInstance.get('/api/v1/order/getcart', config)
        .then((res) => {
          if (res.data.success) {
            setCart(res.data.data.details.length)
          }
          else {
          }
        })
        .catch((error) => {
        })

    }
    catch (e) {
    }

  }

  const handleBrand = async (e) => {
    const brand = e.target.innerHTML.toLowerCase();
    try {
      nevigate(`/brand/${brand.toString()}`, { state: { brand: brand } });
      setshowSidebar(!showSidebar)
    }
    catch (e) {
    }
  }

  const getAnnouncementList = async () => {
    await axiosInstance.get('/api/v1/announcement/getannouncement')
      .then((res) => {
        let aboutUs = res.data.data;
        if (aboutUs.length !== 0) {
          setAnnouncement(aboutUs[0].announcement)
        }
      })
      .catch((err) => {

      })
  }


  const handleNavigate = () => {
    window.location.href = '/notifications'
    setNotificationPopUp(!notificationPopUp);
  }

  const handleSlideBar = () => {
    setshowSidebar(!showSidebar);
  }
  return (
    <>
      <div className="grid sticky top-0 z-30 bg-white lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-2  lg:px-16 md:px-12 xxs:px-7  items-center  pt-4">
        <div className="flex  items-center">
          <>
            <button className="w12 flex items-center cursor-pointer" onClick={handleSlideBar} >
              <svg fill="black" viewBox="0 0 100 80" width="25" height="25">
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
              </svg>
            </button>
            <div ref={transitionRef} style={{ transition: 'all 0.25s', WebkitTransition : 'all 0.25s'}} className={`top-0  w-64 bg-white  z-50 text-white absolute h-screen ${showSidebar ? '-left-64 translate-x-0' : 'translate-x-0 transition-transform duration-300 ease-in-out left-0'} `}>
              <div className="z-10 w-full">
                <div className="flex justify-end py-2 px-5">
                  <button className=" text-textColor" onClick={handleSlideBar} >
                      <FontAwesomeIcon icon="fa-solid fa-xmark" className="p-2 rounded-full bg-bgGrayLight"  size="md"/>
                  </button>
                </div>
                <div className="fixed w-full  h-[70%] px-5 left-2 top-20 flex flex-col  justify-between  rounded bg-transparent">
                    <div className="">
                      {!localStorage.getItem("token") ? (
                        <>
                          <Button goto='/sign-up' type="Sign Up"/>
                          <Button goto='/login' type="Login"/>
                        </>
                      ) : (
                        <button onClick={handleLogout} className="w-full p-3 border-2 text-xl text-textColor bg-primaryColor hover:bg-primaryColorHover rounded-full text-center" >
                          Logout
                        </button>
                      )}
                      <div className="pt-2 pb-1 text-lg font-bold text-textColor">
                        Shop
                      </div>
                      <div className="flex flex-wrap gap-1 w-56 overflow-y-auto max-h-32">
                        {categories.map((brnad) => (
                          <div onClick={handleBrand} className="my-1 flex flex-wrap cursor-pointer w-fit px-2 py-1  text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 rounded-full">
                            {brnad.brand.charAt(0).toUpperCase() + brnad.brand.slice(1)}
                          </div>
                        ))}
                      </div>
                    </div>
                    <ul className="text-textColor text-md">
                      <li className="pb-0.5 cursor-pointer hover:text-primaryColorHover" onClick={() => { setIsOpenOrderHistory(true) }}>
                        Order History
                      </li>
                      <li className="pb-0.5 cursor-pointer hover:text-primaryColorHover">
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li className="pb-0.5 cursor-pointer hover:text-primaryColorHover">
                        <Link to="/delivery">Delivery</Link>
                      </li>
                      <li className="pb-0.5 cursor-pointer hover:text-primaryColorHover">
                        <Link to="/blog">Blogs</Link>
                      </li>
                      <li className="pb-0.5 cursor-pointer hover:text-primaryColorHover">
                        <Link to="/faq">FAQ's</Link>
                      </li>
                      <li className="pb-0.5 cursor-pointer hover:text-primaryColorHover">
                        <Link to="/accounts">Account</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-0 absolute w-full text-center">
                    <div className="flex justify-center">
                      <img alt="missing" className="w-24 rounded-lg " src={NavLogo}></img>
                    </div>
                    <div className="pt-2 pb-5 text-lg font-normal text-textColor ">
                      Get Me Caked
                    </div>
                  </div>
                </div>
              </div>

          </>
          <Link to='/'>
            <img alt="missing" className="md:w-24 w-20 ml-3 rounded-lg" src={NavLogo} />
          </Link>
        </div>
        {/* <div className="md:flex justify-center items-center md:visible hidden">
          <div className="mr-[-30px] z-[5]">
            <IconBgRound svg={search} bg="bg-primaryColor" width="12" imgWidth={4} />
          </div>
          <input
            className="h-10 pl-10 bg-blue-50 rounded-full w-60 text-xs outline-0  hover:outline-0 focus:outline-none  "
            type="text"
            name="search"
            placeholder="product search..."
          />
        </div> */}
        <div className="flex justify-around items-center gap-4 w-full">
          <div className="flex gap-3">
            <Link to="/checkout">
              <IconBgRound svg={shoppingCart} bg="bg-primaryColor" width="12" imgWidth={5} isCart={true} totalCartItems={cartLength} />
            </Link>
            <button ref={buttonRef} onClick={handleNavigate} type="button" data-dropdown-toggle="notification-dropdown" className="p-2 w-9 md:w-12 relative text-gray-500 rounded-[50%] shadow-md flex justify-center items-center flex-shrink-0 bg-primaryColor">
              <span className="sr-only">View notifications</span>
              <img className={`w-4 md:w-5`} src={notificationBell} alt='bg-round' />
            </button>


          </div>
          <div className="lg:block hidden">
            {!localStorage.getItem("token") ? (
              <>
                <Button goto='/sign-up' type="Sign Up"/>
                <Button goto='/login' type="Login"/>
              </>
            ) : (
              <button onClick={handleLogout} className="w-24 p-3 border-2 text-xl bg-primaryColor hover:bg-primaryColorHover rounded-full text-center" >
                Logout
              </button>
            )}
          </div>
        </div>
        {announcement !== '' ?
          <div className="col-span-3 mt-4 bg-primaryColor justify-center flex overflow-x-hidden" style={{
            marginLeft: '-33px',
            marginRight: '-33px'
          }}>
            <marquee width="80%" direction="left">
              <span className="text-xl text-textColor">
                <h3>{announcement}</h3>
              </span>
            </marquee>
          </div>
          : null}
      </div>
      <div>
        <Modal open={isOpenOrderHistory} onClose={() => setIsOpenOrderHistory(false)} >
          <OrderHistory modal={setIsOpenOrderHistory} />
        </Modal>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} >
          <EarnDollars modal={setIsOpen} isAdd={true} />
        </Modal>
        <Modal open={isOpenHelp} onClose={() => setIsOpenHelp(false)} >
          <Help modal={setIsOpenHelp} isAdd={true} />
        </Modal>
      </div>
    </>
  );
};
