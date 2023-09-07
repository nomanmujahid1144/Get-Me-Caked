import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "./Footer";
import { useAlert } from 'react-alert';
import { useState } from "react";
import { useNavigate } from 'react-router';
import axiosInstance from "../../constants/axiosInstance";


export const ContactUS = () => {

    const [getmessage, setMessage] = useState({
            username: "",
            phone: "",
            email: "",
            message: "",
        });
      let navigate = useNavigate();
      let alert = useAlert();

    const handleSubmit =async  (e) => {
        e.preventDefault();
        const { username, phone, email, message } = getmessage;
        
        await axiosInstance.post(`/api/v1/user/sendcontactmail`, {username, phone, email, message } ,{
            headers: {
            "Content-Type": "application/json",
            }
        }).then((res) => {
            alert.show('Email Send to Admin')
            setMessage({
                username: "",
                phone: "",
                email: "",
                message: "",
            })
        })
    }
    const onChange = (e) => {
        setMessage({ ...getmessage, [e.target.name]: e.target.value });
    };
    return (
        <>
            <section className="relative z-10 overflow-hidden bg-white p-20 text-textColor">
                <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap lg:justify-between">
                    <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                    <div className="mb-12 max-w-[570px] lg:mb-0">
                        <span className="text-primary mb-4 block text-base font-semibold">
                        Contact Us
                        </span>
                        <h2 className="text-dark mb-6 text-2xl text-primaryColor font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                        Contact with CAKE
                        </h2>
                        <p className="text-body-color mb-9 text-base leading-relaxed ">
                        We are always open to lending a helping hand or guiding advice to our customers. If you would like to schedule a consultation, have questions about or our products, or are looking for general information, you can fill out the form below and a representative will contact you as soon as possible. Thank You!
                        </p>
                        <div className="mb-8 flex w-full max-w-[370px]">
                        <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                            <FontAwesomeIcon className="text-primaryColor" icon="fa-solid fa-map-location" />
                        </div>
                        <div className="w-full">
                            <h4 className="text-dark mb-1 text-xl font-bold">
                            Our Location
                            </h4>
                            <p className="text-body-color text-base">
                                8001 Archibald Ave, Rancho Cucamonga  <br />
                                CA , New York, USA                
                            </p>
                        </div>
                        </div>
                        <div className="mb-8 flex w-full max-w-[370px]">
                        <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                            <FontAwesomeIcon className="text-primaryColor" icon="fa-solid fa-envelope" />
                        </div>
                        <div className="w-full">
                            <h4 className="text-dark mb-1 text-xl font-bold">
                            Email Address
                            </h4>
                                <p className="text-body-color text-base">
                                    <a href = "mailto: skrtdomain@gmail.com">skrtdomain@gmail.com</a>
                                </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                    <div className="relative rounded-lg bg-bgGrayLight p-8 shadow-lg sm:p-12">
                        <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <input
                            type="text"
                            placeholder="Your Name"
                            name="username"
                            value={getmessage.username}  
                            onChange={onChange}
                            className="appearance-none rounded relative focus:ring-primaryColor block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md sm:text-sm"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                            type="number"
                            placeholder="Your Phone No"
                            name="phone"
                            value={getmessage.phone}  
                            onChange={onChange}
                            className="appearance-none rounded relative focus:ring-primaryColor block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md sm:text-sm"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            value={getmessage.email}  
                            onChange={onChange}
                            className="appearance-none rounded relative focus:ring-primaryColor block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md sm:text-sm"
                            />
                        </div>
                        <div className="mb-6">
                            <textarea
                            rows={6}
                            placeholder="Your Message"
                            name="message"
                            value={getmessage.message}  
                            onChange={onChange}
                            className="appearance-none rounded relative focus:ring-primaryColor block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md sm:text-sm"
                            defaultValue={""}
                            />
                        </div>
                        <div>
                            <button
                            type="submit"
                            className="bg-primaryColor hover:bg-primaryColorHover border-primary w-full rounded-full border p-3 text-textColor transition hover:bg-opacity-90"
                            >
                            Send Message
                            </button>
                        </div>
                        </form>
                        <div>
                        <span className="absolute -right-10 top-[90px] z-[-1]">
                            <svg
                            width={34}
                            height={134}
                            viewBox="0 0 34 134"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle
                                cx="31.9993"
                                cy={132}
                                r="1.66667"
                                transform="rotate(180 31.9993 132)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy="117.333"
                                r="1.66667"
                                transform="rotate(180 31.9993 117.333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy="102.667"
                                r="1.66667"
                                transform="rotate(180 31.9993 102.667)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy={88}
                                r="1.66667"
                                transform="rotate(180 31.9993 88)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy="73.3333"
                                r="1.66667"
                                transform="rotate(180 31.9993 73.3333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy={45}
                                r="1.66667"
                                transform="rotate(180 31.9993 45)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy={16}
                                r="1.66667"
                                transform="rotate(180 31.9993 16)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy={59}
                                r="1.66667"
                                transform="rotate(180 31.9993 59)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy="30.6666"
                                r="1.66667"
                                transform="rotate(180 31.9993 30.6666)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy="1.66665"
                                r="1.66667"
                                transform="rotate(180 31.9993 1.66665)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy={132}
                                r="1.66667"
                                transform="rotate(180 17.3333 132)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy="117.333"
                                r="1.66667"
                                transform="rotate(180 17.3333 117.333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy="102.667"
                                r="1.66667"
                                transform="rotate(180 17.3333 102.667)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy={88}
                                r="1.66667"
                                transform="rotate(180 17.3333 88)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy="73.3333"
                                r="1.66667"
                                transform="rotate(180 17.3333 73.3333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy={45}
                                r="1.66667"
                                transform="rotate(180 17.3333 45)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy={16}
                                r="1.66667"
                                transform="rotate(180 17.3333 16)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy={59}
                                r="1.66667"
                                transform="rotate(180 17.3333 59)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy="30.6666"
                                r="1.66667"
                                transform="rotate(180 17.3333 30.6666)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy="1.66665"
                                r="1.66667"
                                transform="rotate(180 17.3333 1.66665)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy={132}
                                r="1.66667"
                                transform="rotate(180 2.66536 132)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy="117.333"
                                r="1.66667"
                                transform="rotate(180 2.66536 117.333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy="102.667"
                                r="1.66667"
                                transform="rotate(180 2.66536 102.667)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy={88}
                                r="1.66667"
                                transform="rotate(180 2.66536 88)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy="73.3333"
                                r="1.66667"
                                transform="rotate(180 2.66536 73.3333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy={45}
                                r="1.66667"
                                transform="rotate(180 2.66536 45)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy={16}
                                r="1.66667"
                                transform="rotate(180 2.66536 16)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy={59}
                                r="1.66667"
                                transform="rotate(180 2.66536 59)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy="30.6666"
                                r="1.66667"
                                transform="rotate(180 2.66536 30.6666)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy="1.66665"
                                r="1.66667"
                                transform="rotate(180 2.66536 1.66665)"
                                fill="#13C296"
                            />
                            </svg>
                        </span>
                        <span className="absolute -left-7 -bottom-7 z-[-1]">
                            <svg
                            width={107}
                            height={134}
                            viewBox="0 0 107 134"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle
                                cx="104.999"
                                cy={132}
                                r="1.66667"
                                transform="rotate(180 104.999 132)"
                                fill="#13C296"
                            />
                            <circle
                                cx="104.999"
                                cy="117.333"
                                r="1.66667"
                                transform="rotate(180 104.999 117.333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="104.999"
                                cy="102.667"
                                r="1.66667"
                                transform="rotate(180 104.999 102.667)"
                                fill="#13C296"
                            />
                            <circle
                                cx="104.999"
                                cy={88}
                                r="1.66667"
                                transform="rotate(180 104.999 88)"
                                fill="#13C296"
                            />
                            <circle
                                cx="104.999"
                                cy="73.3333"
                                r="1.66667"
                                transform="rotate(180 104.999 73.3333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="104.999"
                                cy={45}
                                r="1.66667"
                                transform="rotate(180 104.999 45)"
                                fill="#13C296"
                            />
                            <circle
                                cx="104.999"
                                cy={16}
                                r="1.66667"
                                transform="rotate(180 104.999 16)"
                                fill="#13C296"
                            />
                            <circle
                                cx="104.999"
                                cy={59}
                                r="1.66667"
                                transform="rotate(180 104.999 59)"
                                fill="#13C296"
                            />
                            <circle
                                cx="104.999"
                                cy="30.6666"
                                r="1.66667"
                                transform="rotate(180 104.999 30.6666)"
                                fill="#13C296"
                            />
                            <circle
                                cx="104.999"
                                cy="1.66665"
                                r="1.66667"
                                transform="rotate(180 104.999 1.66665)"
                                fill="#13C296"
                            />
                            <circle
                                cx="90.3333"
                                cy={132}
                                r="1.66667"
                                transform="rotate(180 90.3333 132)"
                                fill="#13C296"
                            />
                            <circle
                                cx="90.3333"
                                cy="117.333"
                                r="1.66667"
                                transform="rotate(180 90.3333 117.333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="90.3333"
                                cy="102.667"
                                r="1.66667"
                                transform="rotate(180 90.3333 102.667)"
                                fill="#13C296"
                            />
                            <circle
                                cx="90.3333"
                                cy={88}
                                r="1.66667"
                                transform="rotate(180 90.3333 88)"
                                fill="#13C296"
                            />
                            <circle
                                cx="90.3333"
                                cy="73.3333"
                                r="1.66667"
                                transform="rotate(180 90.3333 73.3333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="90.3333"
                                cy={45}
                                r="1.66667"
                                transform="rotate(180 90.3333 45)"
                                fill="#13C296"
                            />
                            <circle
                                cx="90.3333"
                                cy={16}
                                r="1.66667"
                                transform="rotate(180 90.3333 16)"
                                fill="#13C296"
                            />
                            <circle
                                cx="90.3333"
                                cy={59}
                                r="1.66667"
                                transform="rotate(180 90.3333 59)"
                                fill="#13C296"
                            />
                            <circle
                                cx="90.3333"
                                cy="30.6666"
                                r="1.66667"
                                transform="rotate(180 90.3333 30.6666)"
                                fill="#13C296"
                            />
                            <circle
                                cx="90.3333"
                                cy="1.66665"
                                r="1.66667"
                                transform="rotate(180 90.3333 1.66665)"
                                fill="#13C296"
                            />
                            <circle
                                cx="75.6654"
                                cy={132}
                                r="1.66667"
                                transform="rotate(180 75.6654 132)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy={132}
                                r="1.66667"
                                transform="rotate(180 31.9993 132)"
                                fill="#13C296"
                            />
                            <circle
                                cx="75.6654"
                                cy="117.333"
                                r="1.66667"
                                transform="rotate(180 75.6654 117.333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy="117.333"
                                r="1.66667"
                                transform="rotate(180 31.9993 117.333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="75.6654"
                                cy="102.667"
                                r="1.66667"
                                transform="rotate(180 75.6654 102.667)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy="102.667"
                                r="1.66667"
                                transform="rotate(180 31.9993 102.667)"
                                fill="#13C296"
                            />
                            <circle
                                cx="75.6654"
                                cy={88}
                                r="1.66667"
                                transform="rotate(180 75.6654 88)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy={88}
                                r="1.66667"
                                transform="rotate(180 31.9993 88)"
                                fill="#13C296"
                            />
                            <circle
                                cx="75.6654"
                                cy="73.3333"
                                r="1.66667"
                                transform="rotate(180 75.6654 73.3333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy="73.3333"
                                r="1.66667"
                                transform="rotate(180 31.9993 73.3333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="75.6654"
                                cy={45}
                                r="1.66667"
                                transform="rotate(180 75.6654 45)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy={45}
                                r="1.66667"
                                transform="rotate(180 31.9993 45)"
                                fill="#13C296"
                            />
                            <circle
                                cx="75.6654"
                                cy={16}
                                r="1.66667"
                                transform="rotate(180 75.6654 16)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy={16}
                                r="1.66667"
                                transform="rotate(180 31.9993 16)"
                                fill="#13C296"
                            />
                            <circle
                                cx="75.6654"
                                cy={59}
                                r="1.66667"
                                transform="rotate(180 75.6654 59)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy={59}
                                r="1.66667"
                                transform="rotate(180 31.9993 59)"
                                fill="#13C296"
                            />
                            <circle
                                cx="75.6654"
                                cy="30.6666"
                                r="1.66667"
                                transform="rotate(180 75.6654 30.6666)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy="30.6666"
                                r="1.66667"
                                transform="rotate(180 31.9993 30.6666)"
                                fill="#13C296"
                            />
                            <circle
                                cx="75.6654"
                                cy="1.66665"
                                r="1.66667"
                                transform="rotate(180 75.6654 1.66665)"
                                fill="#13C296"
                            />
                            <circle
                                cx="31.9993"
                                cy="1.66665"
                                r="1.66667"
                                transform="rotate(180 31.9993 1.66665)"
                                fill="#13C296"
                            />
                            <circle
                                cx="60.9993"
                                cy={132}
                                r="1.66667"
                                transform="rotate(180 60.9993 132)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy={132}
                                r="1.66667"
                                transform="rotate(180 17.3333 132)"
                                fill="#13C296"
                            />
                            <circle
                                cx="60.9993"
                                cy="117.333"
                                r="1.66667"
                                transform="rotate(180 60.9993 117.333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy="117.333"
                                r="1.66667"
                                transform="rotate(180 17.3333 117.333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="60.9993"
                                cy="102.667"
                                r="1.66667"
                                transform="rotate(180 60.9993 102.667)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy="102.667"
                                r="1.66667"
                                transform="rotate(180 17.3333 102.667)"
                                fill="#13C296"
                            />
                            <circle
                                cx="60.9993"
                                cy={88}
                                r="1.66667"
                                transform="rotate(180 60.9993 88)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy={88}
                                r="1.66667"
                                transform="rotate(180 17.3333 88)"
                                fill="#13C296"
                            />
                            <circle
                                cx="60.9993"
                                cy="73.3333"
                                r="1.66667"
                                transform="rotate(180 60.9993 73.3333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy="73.3333"
                                r="1.66667"
                                transform="rotate(180 17.3333 73.3333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="60.9993"
                                cy={45}
                                r="1.66667"
                                transform="rotate(180 60.9993 45)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy={45}
                                r="1.66667"
                                transform="rotate(180 17.3333 45)"
                                fill="#13C296"
                            />
                            <circle
                                cx="60.9993"
                                cy={16}
                                r="1.66667"
                                transform="rotate(180 60.9993 16)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy={16}
                                r="1.66667"
                                transform="rotate(180 17.3333 16)"
                                fill="#13C296"
                            />
                            <circle
                                cx="60.9993"
                                cy={59}
                                r="1.66667"
                                transform="rotate(180 60.9993 59)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy={59}
                                r="1.66667"
                                transform="rotate(180 17.3333 59)"
                                fill="#13C296"
                            />
                            <circle
                                cx="60.9993"
                                cy="30.6666"
                                r="1.66667"
                                transform="rotate(180 60.9993 30.6666)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy="30.6666"
                                r="1.66667"
                                transform="rotate(180 17.3333 30.6666)"
                                fill="#13C296"
                            />
                            <circle
                                cx="60.9993"
                                cy="1.66665"
                                r="1.66667"
                                transform="rotate(180 60.9993 1.66665)"
                                fill="#13C296"
                            />
                            <circle
                                cx="17.3333"
                                cy="1.66665"
                                r="1.66667"
                                transform="rotate(180 17.3333 1.66665)"
                                fill="#13C296"
                            />
                            <circle
                                cx="46.3333"
                                cy={132}
                                r="1.66667"
                                transform="rotate(180 46.3333 132)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy={132}
                                r="1.66667"
                                transform="rotate(180 2.66536 132)"
                                fill="#13C296"
                            />
                            <circle
                                cx="46.3333"
                                cy="117.333"
                                r="1.66667"
                                transform="rotate(180 46.3333 117.333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy="117.333"
                                r="1.66667"
                                transform="rotate(180 2.66536 117.333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="46.3333"
                                cy="102.667"
                                r="1.66667"
                                transform="rotate(180 46.3333 102.667)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy="102.667"
                                r="1.66667"
                                transform="rotate(180 2.66536 102.667)"
                                fill="#13C296"
                            />
                            <circle
                                cx="46.3333"
                                cy={88}
                                r="1.66667"
                                transform="rotate(180 46.3333 88)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy={88}
                                r="1.66667"
                                transform="rotate(180 2.66536 88)"
                                fill="#13C296"
                            />
                            <circle
                                cx="46.3333"
                                cy="73.3333"
                                r="1.66667"
                                transform="rotate(180 46.3333 73.3333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy="73.3333"
                                r="1.66667"
                                transform="rotate(180 2.66536 73.3333)"
                                fill="#13C296"
                            />
                            <circle
                                cx="46.3333"
                                cy={45}
                                r="1.66667"
                                transform="rotate(180 46.3333 45)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy={45}
                                r="1.66667"
                                transform="rotate(180 2.66536 45)"
                                fill="#13C296"
                            />
                            <circle
                                cx="46.3333"
                                cy={16}
                                r="1.66667"
                                transform="rotate(180 46.3333 16)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy={16}
                                r="1.66667"
                                transform="rotate(180 2.66536 16)"
                                fill="#13C296"
                            />
                            <circle
                                cx="46.3333"
                                cy={59}
                                r="1.66667"
                                transform="rotate(180 46.3333 59)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy={59}
                                r="1.66667"
                                transform="rotate(180 2.66536 59)"
                                fill="#13C296"
                            />
                            <circle
                                cx="46.3333"
                                cy="30.6666"
                                r="1.66667"
                                transform="rotate(180 46.3333 30.6666)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy="30.6666"
                                r="1.66667"
                                transform="rotate(180 2.66536 30.6666)"
                                fill="#13C296"
                            />
                            <circle
                                cx="46.3333"
                                cy="1.66665"
                                r="1.66667"
                                transform="rotate(180 46.3333 1.66665)"
                                fill="#13C296"
                            />
                            <circle
                                cx="2.66536"
                                cy="1.66665"
                                r="1.66667"
                                transform="rotate(180 2.66536 1.66665)"
                                fill="#13C296"
                            />
                            </svg>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <Footer />
        </>

    )
}