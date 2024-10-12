import React from "react";
import { OneDay } from "../components/oneDay"

export const NextDays = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-center items-center text-white font-medium text-sm bg-[#1b4074] rounded-2xl lg:p-4 lg:my-5 lg:mx-4 md:p-4 md:my-2 md:mx-1 sm:p-4 sm:mx-4 ">
          <section className="lg:mx-4 md:mx-3 flex justify-center items-center">
            <img src="/rain.svg" alt="rain_icon" className="mx-2" />
            <p>6%</p>
          </section>
          <section className="lg:mx-4 md:mx-3 flex justify-center items-center">
            <img src="/humidity.svg" alt="rain_icon" className="mx-2" />
            <p>6%</p>
          </section>
          <section className="lg:mx-4 md:mx-3 flex justify-center items-center">
            <img src="/wind.svg" alt="rain_icon" className="mx-2" />
            <p>6%</p>
          </section>
        </div>
      </div>

      <div className="container">
        <div className="text-white font-medium text-sm p-4 my-5 mx-4 bg-[#1b4074] rounded-2xl">
          <h1 className="text-left mb-6">Next Forecast</h1>
          <div className="flex justify-center item">
            <OneDay />
          </div>
        </div>
      </div>
    </>
  );
};
