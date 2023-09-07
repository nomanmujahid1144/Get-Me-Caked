import React from "react";
import { useParams } from "react-router-dom";
import { Footer } from "./Footer";
import { Filters } from "../minor-components/Filters";


export const SingleProduct = () => {
  const { brandName } = useParams();

  return (
    <>
    
      <div className="bg-hero-img2 w-[100%] h-[60vh]  bg-no-repeat bg-center  bg-cover px-28  flex  items-center gap-4">
        <div className='w-auto h-80 rounded flex flex-col justify-end text-center'>
          <h1 className='text-4xl text-textColor font-bold '>
            {brandName.replace(/(^\w|\s\w)(\S*)/g, (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase())}
          </h1>
        </div>
      </div>
      <div>
        <Filters />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
