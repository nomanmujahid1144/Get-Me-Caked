import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLogo from "../../assets/logo.png";
import { Loader } from '../minor-components/Loader';
import { useAlert } from 'react-alert';
import  axiosInstance  from "../../constants/axiosInstance";
import validationId from '../../assets/validation_ID.png';
import io from 'socket.io-client';


export const SignUp = () => {
  const [govtIdImage, setGovtIdImage] = useState(null);
  const [govtImageToShow, setGovtImageToShow] = useState(null);
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    fullName: ""
  });
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const alert = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)


    const { email, password, phoneNumber, fullName } = credentials;
    const formData = new FormData();

    if (govtIdImage != null) {
      formData.append("govtIdImage", govtIdImage);
    }

    formData.append("email", email);
    formData.append("password", password);
    formData.append("phoneNumber", phoneNumber);
    formData.append("fullName", fullName);

    await axiosInstance.post("/api/v1/user/usersignup", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
    )
      .then((response) => {
        if (response.data.success) {
          setLoading(false)
          setGovtImageToShow(null)
          setGovtIdImage(null);
          // localStorage.setItem("token", response.data.token);
          alert.show("Thanks for registration, One of our staff will confirm via email if your information has been verified.Usually takes between five to ten minutes.")
          const socket = io(process.env.NODE_LOCAL_SERVER);
          socket.on('newUser', () => {
            localStorage.setItem('notification' , 2)
          });
          navigate("/login");
        }
      })
      .catch((err) => {
        alert.show("Email already exixts")
        setGovtImageToShow(null)
        setGovtIdImage(null);
        setLoading(false)
      })

  };




  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleGovtImage = async (event) => {
    setGovtImageToShow(URL.createObjectURL(event.target.files[0]))
    setGovtIdImage(event.target.files[0]);
  };

  return (
    <>
      {!loading ?
        <div className="h-auto flex  bg-emerald-50 flex-col items-center justify-center py-20  px-4 sm:px-6 lg:px-8">
          <div className="w-full lg:w-4/12  md:w-6/12 shadow-md rounded-3xl bg-bgGrayLight flex justify-center">
            <div floated={false} className="h-auto p-8 w-full">
              <div className="w-full text-textColor">
                <div className="w-full">
                  <img className="mx-auto  rounded-lg  w-32" src={NavLogo} alt="Workflow" />
                  <h2 className="mt-2 text-center text-2xl font-normal">
                    Account Sign Up
                  </h2>
                </div>
                <form className="mt-8" onSubmit={handleSubmit}>
                  <div className="rounded-md shadow-sm">
                    <div>
                      <div className="mb-2 mt-2 ">
                        <label className="font-bold">Full Name</label>
                      </div>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="fullName"
                        required
                        className="appearance-none rounded relative focus:ring-primaryColor block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md sm:text-sm"
                        placeholder="Full Name"
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <div className="mb-2 mt-2 ">
                        <label className="font-bold">Email</label>
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded relative focus:ring-primaryColor block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md sm:text-sm"
                        placeholder="Email"
                        onChange={onChange}
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
                        required
                        className="appearance-none rounded relative focus:ring-primaryColor block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md  sm:text-sm"
                        placeholder="Password"
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <div className="mb-2 mt-2 ">
                        <label className="font-bold">Contact Number</label>
                      </div>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        required
                        className="appearance-none rounded relative focus:ring-primaryColor block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md  sm:text-sm"
                        placeholder="Enter Contact Number"
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <div className="mb-2 mt-2 ">
                        <div className="group relative">
                          <label className="font-bold">Upload Gov't ID</label>
                          (<span class="text-primaryColor px-2 py-1 cursor-pointer font-bold">See Example</span>)
                          <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-64 
                              -translate-x-1/2 translate-y-[20%] opacity-0 ">
                            <img alt="missing" src={validationId}></img>
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-full">
                        <label for="dropzone-file" className="flex flex-col items-center justify-center w-64 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                          {govtImageToShow != null ?
                            <img alt="missing" className="object-cover w-64 h-64" src={govtImageToShow} />
                            :
                            <div className="flex flex-col items-center justify-center pt-5 pb-6 p-3">
                              <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                              <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                              <p className="text-xs text-gray-500 text-center">Please Upload an image with your valid Photo ID (PNG, JPG)</p>
                            </div>
                          }
                          <input id="dropzone-file" onChange={handleGovtImage} name="govtId" type="file" accept="image/*" class="hidden" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button type="submit" className="group relative w-full my-2 flex justify-center py-2 px-4 border border-transparent rounded-md text-textColor bg-primaryColor hover:bg-primaryColorHover">
                      Sign Up
                    </button>
                  </div>
                  <div className="flex w-full items-center justify-end">
                    <div className="text-sm">
                      Already have Credentials?
                      <a href="#" className="font-medium text-primaryColor hover:text-primaryColorHover pl-1">
                        <Link to="/login"> Sign In? </Link>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        :
        (
          <Loader />
        )}


    </>
  );
};
