import { useState } from "react";
import React from "react";
import  axiosInstance  from "../../constants/axiosInstance";
import NavLogo from "../../assets/logo.png";
import { useAlert } from 'react-alert'
// import { Navbar } from "./Navbar";
// import { Footer } from "./Footer";

export const ResetPassword = () => {

  const [forgetEmail , setForgetEmail] = useState({
    email : ''
  })
  
  const alert = useAlert();


  const handleSubmit = async (e) => {
    e.preventDefault()
    const {email} = forgetEmail;

    await axiosInstance.patch('/api/v1/user/forgetpassword' , {email})
          .then((res) => {
            alert.show("Email send to this mail.")
          })
          .catch((err) => {
            alert.show("Oops! Email not found.")
          })
  }

  
  const onChange = (e) => {
    setForgetEmail({ ...forgetEmail, [e.target.name]: e.target.value });
  };
  

  return (
    <>
    {/* <div>
      <Navbar />
    </div> */}
    <div className="h-screen flex bg-emerald-50 items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full lg:w-4/12  md:w-6/12 shadow-md rounded-3xl bg-bgGrayLight flex justify-center">
        <div floated={false} className="h-auto p-12 w-full">
          <div className="w-full text-textColor">
            <div className="w-full">
              <img
                className="mx-auto  rounded-lg  w-32"
                src={NavLogo}
                alt="Workflow"
              />
              <h2 className="mt-2 text-center text-xl font-normal">
                Reset Your Password
                <p className="text-sm my-2 font-normal text-gray-400">You can Reset your Password here.</p>
              </h2>
              
            </div>
            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm">
                <div>
                  <div className="mb-2 ml-1 ">
                    <label className="font-bold">Email</label>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={onChange}
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded relative focus:ring-primaryColor block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md  sm:text-sm"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div>
                <button type="submit" className="group relative w-full my-2 flex justify-center py-2 px-4 border border-transparent rounded-md text-textColor bg-primaryColor hover:bg-primaryColorHover">
                  Submit
                </button>
              </div>
            </form>


          </div>
        </div>
      </div>
    </div>
    {/* <div>
      <Footer />
    </div> */}
    </>
  );
};

