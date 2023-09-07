
import { Link } from "react-router-dom";
import NavLogo from '../../assets/logo.png'
import googlePlay from '../../assets/google.png'
import IOSStore from '../../assets/IOS.png'

export const Footer = () => {
    return (
        <>
            <footer className="bg-primaryColor bg-footerBackgroundImage text-textColorWhite">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className='flex flex-col items-center mb-6 md:mb-0'>
                            <Link to="/">
                                <img className='mb-8 rounded-lg  w-32' src={NavLogo} alt='footer-logo' />
                            </Link>
                            <a target="_black" href="https://play.google.com/apps?pli=1" className="cursor-pointer">
                                <img className='w-40 h-30' src={googlePlay} alt='google-play' />
                            </a>
                            <a target="_black" href="https://www.apple.com/app-store/" className="cursor-pointer">
                                <img className='w-40 h-30' src={IOSStore} alt='IOS-Store' />
                            </a>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:gap-3 sm:grid-cols-2 md:grid-cols-3">
                            <div>
                                <h2 className="mb-6 uppercase">
                                    Quick Links
                                </h2>
                                <ul className=" font-normal">
                                    <li className="mb-2">
                                        <Link to='/about-us'>About Us</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to='/delivery'>Delivery</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to='/faq'>Faq</Link>
                                    </li>
                                    {localStorage.getItem('token') ?
                                        null
                                        :
                                        <>
                                            <li className="mb-2">
                                                <Link to='/sign-up'>Sign Up</Link>
                                            </li>
                                            <li className="mb-2">
                                                <Link to='/login'>Login</Link>
                                            </li>
                                        </>
                                    }
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 uppercase">
                                    More
                                </h2>
                                <ul className="font-normal">
                                    <li className="mb-2">
                                        <Link to='/blog'>Blogs</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to=''>Press</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to=''>Careers</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to='/contact-us'>Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 uppercase ">
                                    HOURS
                                </h2>
                                <ul className="font-normal flex justify-between gap-0 md:gap-2">
                                    <div>
                                        <li>Sunday</li>
                                        <li>Monday</li>
                                        <li>Tuesday</li>
                                        <li>Wednesday</li>
                                        <li>Thursday</li>
                                        <li>Friday</li>
                                        <li>saturday</li>
                                    </div>
                                    <div>
                                        <li>9:00am - 9:00pm</li>
                                        <li>9:00am - 9:00pm</li>
                                        <li>9:00am - 9:00pm</li>
                                        <li>9:00am - 9:00pm</li>
                                        <li>9:00am - 9:00pm</li>
                                        <li>9:00am - 9:00pm</li>
                                        <li>9:00am - 9:00pm</li>
                                    </div>
                                    {/* <li className="mb-2">
                                        Sunday    <span className="pl-3">9:00am - 9:00pm</span>
                                    </li>
                                    <li className="mb-2">
                                        Monday    <span className="pl-3">9:00am - 9:00pm</span>
                                    </li>
                                    <li className="mb-2">
                                        Tuesday    <span className="pl-3">9:00am - 9:00pm</span>
                                    </li>
                                    <li className="mb-2">
                                        Wednesday    <span className="pl-3">9:00am - 9:00pm</span>
                                    </li>
                                    <li className="mb-2">
                                        Thursday    <span className="pl-3">9:00am - 9:00pm</span>
                                    </li>
                                    <li className="mb-2">
                                        Friday    <span className="pl-3">9:00am - 9:00pm</span>
                                    </li>
                                    <li className="mb-2">
                                        Saturday    <span className="pl-3">9:00am - 9:00pm</span>
                                    </li>
                                    <li className="mb-2">
                                        Sunday    <span className="pl-3">9:00am - 9:00pm</span>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-textColorWhite sm:mx-auto lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-textColorWhite sm:text-center ">
                            © 2023 Get Me Caked. All rights reserved.
                        </span>
                        <div className="list-none flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <li>
                                <Link to="">Privacy Policy</Link> 
                            </li>
                            <li>
                                <Link to="">Terms & conditions</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}