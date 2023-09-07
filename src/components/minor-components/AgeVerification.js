import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png'
import { Loader } from './Loader';

const AgeVerification = () => {
    const [onVerify, setOnVerify] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const ageVerified = localStorage.getItem('ageVerified');
        setOnVerify(ageVerified ? ageVerified : false)
        setLoading(true)
    }, [])

    const handleNotVerifyAge = (event) => {
        event.preventDefault();
        setOnVerify(false);
        setShowContent(true);
    };
    const handleVerifyAge = (event) => {
        event.preventDefault();
        setOnVerify(true);
        localStorage.setItem('ageVerified' , true)
    };

  return (
      <>
          {loading ? 
              <>
                  {!onVerify ?
                            <div className="modal fixed z-50 bg-AgeBackgroundImage left-0 top-0 flex h-full w-full items-center justify-center" >
                                <div className="modal-overlay absolute h-full w-full backdrop-blur-sm"></div>
                                <div className="modal-container z-50 mx-auto flex items-center justify-center h-fit md:max-h-fit  rounded bg-white shadow-lg w-8/12 md:max-w-fit ">
                                {!showContent ? 
                                  <div className="modal-content px-6 py-4">
                                      <div className='text-center'>
                                            <img src={logo} className='md:h-32 h-16 mx-auto rounded-full' alt='logo missing'></img>
                                            <p className="text-lg md:text-2xl font-bold md:mt-3">Age Verification</p>
                                            <p className="text-lg md:text-2xl text-myBg md:my-3">By Entering the site, you accept our use of cookies</p>
                                            <p className="text-lg md:text-4xl font-bold">Are your over the Age of 18?</p>
                                        </div>
                                        <div className="text-center  flex-wrap flex justify-center pt-2 gap-4">
                                            <button onClick={handleNotVerifyAge} className="modal-action-button bg-orange-800 hover:bg-orange-700 text-white  py-2 px-2 md:py-3 md:px-3 rounded-full">No, I'm not over 18</button>
                                            <button onClick={handleVerifyAge} className="modal-action-button bg-primaryColor hover:bg-primaryColorHover text-white py-2 px-2 md:py-3 md:px-3 rounded-full">Yes, I'm over 18</button>
                                        </div>
                                    </div>
                                    :
                                        <div className="modal-content px-6 py-4 text-left">
                                            <div className="flex items-center justify-center text-center pb-3">
                                                <p className="text-3xl font-bold">Sorry, you are not allowed to access the website content due to age restrictions :(</p>
                                            </div>
                                        </div>
                                    }
                                    
                                
                                </div>
                            </div>
                    : null}
                </>
        : (< Loader />)}
          
      </>
  );
};

export default AgeVerification;
