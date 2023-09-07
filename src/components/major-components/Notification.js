import React, { useState } from "react";
import { Footer } from "../major-components/Footer";
import { Loader } from "../minor-components/Loader";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const Notifications = () => {

    const navigate = useNavigate();

    const loading = useSelector(
        (state) => state.ProgressBarReducer
    );

    useEffect(() => {
        localStorage.getItem('token') ?
            navigate('/notifications')

        : navigate('/login');
    } , [])

  return (
    <>
        {!loading ? (
              <>
                <div className="h-screen grid place-items-center">
                    <div className="lg:w-2/5 sm:w-3/5 w-11/12 my-auto dark:bg-gray-800 rounded-xl mx-auto p-3 ">
                        <div className="inline-flex items-center justify-between w-full">
                            <h3 className="font-bold text-xl sm:text-2xl text-gray-800 dark:text-white">
                                Notifications
                            </h3>
                        </div>
                        <p className="mt-8 font-medium text-gray-500 text-sm sm:text-base dark:text-white">
                        Today
                        </p>
                        <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
                            <div className=" inline-flex items-center justify-between w-full">
                                <div className="inline-flex items-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/763/763812.png"
                                    alt="Training Icon"
                                    className="w-6 h-6 mr-3"
                                />
                                <h3 className="font-bold text-base text-gray-800">Training</h3>
                                </div>
                                <p className="text-xs text-gray-500">2 min ago</p>
                            </div>
                            <p className="mt-1 text-sm">
                                Hey! Do you remember about choosing your training regime?
                            </p>
                        </div>
                        <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
                        <div className=" inline-flex items-center justify-between w-full">
                            <div className="inline-flex items-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/893/893257.png"
                                    alt="Messages Icon"
                                    className="w-6 h-6 mr-3"
                                />
                                <h3 className="font-bold text-base text-gray-800">Messages</h3>
                            </div>
                            <p className="text-xs text-gray-500">1 hour ago</p>
                        </div>
                        <p className="mt-1 text-sm">You have a new message</p>
                        </div>
                        <p className="mt-8 font-medium text-gray-500 dark:text-white text-sm sm:text-base">
                        Yesterday
                        </p>
                        <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
                        <div className=" inline-flex items-center justify-between w-full">
                            <div className="inline-flex items-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/6863/6863272.png"
                                    alt="Form Icon"
                                    className="w-6 h-6 mr-3"
                                />
                            <h3 className="font-bold text-base text-gray-800">Forms</h3>
                            </div>
                            <p className="text-xs text-gray-500">12:47</p>
                        </div>
                        <p className="mt-1 text-sm">
                            Remember about filling out the COVID-19 from before the next appointment
                            tomorrow
                        </p>
                        </div>
                        <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
                        <div className=" inline-flex items-center justify-between w-full">
                            <div className="inline-flex items-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/763/763812.png"
                                    alt="Training Icon"
                                    className="w-6 h-6 mr-3"
                                />
                            <h3 className="font-bold text-base text-gray-800">Training</h3>
                            </div>
                            <p className="text-xs text-gray-500">12:43</p>
                        </div>
                        <p className="mt-1 text-sm">
                            We're glad you've decided to use our training system! Let's now set a
                            complete of things
                        </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        ) : (
            <Loader />
        )}
    </>
  );
};
