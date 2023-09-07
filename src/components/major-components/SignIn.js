import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "../../assets/logo.png";
import {Loader} from '../minor-components/Loader'
import { useAlert } from 'react-alert'
import { useState } from "react";
import { useNavigate } from 'react-router';
import  axiosInstance  from "../../constants/axiosInstance";
// import io from 'socket.io-client';
// import { useEffect } from "react";

export const SignIn = () => {

  const [credentials, setcredentials] = useState({
    email: "",
    password: ""
  });
  const [loading , setLoading] = useState(false)
  let navigate = useNavigate();
  let alert = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const { email, password } = credentials;
    
    await axiosInstance.post(`/api/v1/user/userLogin`, {email, password } ,{
        headers: {
          "Content-Type": "application/json",
        }
      }
    )
    .then((response) => {
      if (response.data.success) {
        if(response.data.data.result.verified === false){
          alert.show("Your Profile is under Process, Please wait")
          setLoading(false)
        }else if(response.data.data.result.deactivate === 2){
          alert.show("Your Account has been deactivated.Please Contact Admin")
          setLoading(false)
        }else{
          localStorage.setItem("token", response.data.data.token);
          navigate("/");
          alert.show("Login Successfully")
        }
      }
    })
    .catch((err) =>{
      alert.show("Incorrect Username or Password")
      setLoading(false)
    })
  };

  

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
    {!loading ? (
    <div className="h-screen flex bg-emerald-50 items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full lg:w-4/12  md:w-6/12 shadow-md rounded-3xl bg-bgGrayLight flex justify-center">
        <div floated={false} className="h-auto p-8 w-full">
          <div className="w-full text-textColor">
            <div className="w-full">
              <img
                className="mx-auto rounded-lg  w-32"
                src={NavLogo}
                alt="Workflow"
              />
              <h2 className="mt-2 text-center text-2xl font-normal">
                Sign In your Account
              </h2>
            </div>
            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm">
                <div>
                  <div className="mb-2 mt-2 ">
                    <label className="font-bold">Email</label>
                  </div>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={credentials.email}
                    onChange={onChange}
                    required
                    className="appearance-none rounded relative focus:ring-primaryColor block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md sm:text-sm"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <div className="mb-2 mt-2 ">
                    <label className="font-bold">Password</label>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={credentials.password}
                    onChange={onChange}
                    required
                    className="appearance-none rounded relative focus:ring-primaryColor block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md  sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primaryColor focus:bg-primaryColorHover border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-textColor">
                  Remember me
                </label>
              </div>

              <div className="text-sm my-4">
                <a href="#" className="font-medium text-primaryColor hover:text-primaryColorHover">
                 <Link to="/reset-password" > Forgot Password? </Link>
                </a>
              </div>
            </div>
              <div>
                <button type="submit"
                  className="group relative w-full my-2 flex justify-center py-2 px-4 border border-transparent rounded-md text-textColor bg-primaryColor hover:bg-primaryColorHover">
                  Login
                </button>
              </div>
              <div className="flex w-full my-4 items-center justify-start">
                <div className="font-medium ">
                  Don't have an account?
                   <Link to="/sign-up" className="font-medium text-primaryColor hover:text-primaryColorHover"> Sign Up? </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    ) :(
       <Loader />
    )}
    </>
  );
};

// export default SignIn;
