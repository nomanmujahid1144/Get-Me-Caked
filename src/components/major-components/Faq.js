import React, { useEffect, useState } from 'react'
import { Footer } from "./Footer";
import axiosInstance from "../../constants/axiosInstance";
import faq from "../../assets/Payment_ImageHeader.jpg";
import { Loader } from '../minor-components/Loader';

export const FAQPage = () => {

  const [loading, setLoading] = useState(false)
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    getFAQS();
  }, []);


  const getFAQS = async () => {
    setLoading(true)
    await axiosInstance.get('/api/v1/faq/getfaqs')
      .then((res) => {
        let aboutUs = res.data.data;
        if (aboutUs.length !== 0) {
          setFaqs(aboutUs[0].faqs)
        }
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      })
  }


  return (
    <>
      {!loading ? (
        <>
          <div className="py-20 text-center">
            <div className="w-[100%] my-3  bg-no-repeat bg-center  bg-cover  flex  items-center gap-2">
              <img alt='missing' src={faq} className=' object-contain' />
            </div>
            <div>
              <div className="p-3">
                <section className="bg-white dark:bg-gray-900">
                  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    {faq?.length !== 0 ?
                      <>
                        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                          Frequently asked questions
                        </h2>
                        <div className=" pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700">
                          <div>
                            {faqs.map((faq, index) => (
                              <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                  <svg
                                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  {faq.Question}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                  {faq.Answer}
                                </p>
                              </div>
                            ))}

                          </div>
                        </div>
                      </>
                      : null}
                  </div>
                </section>
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

