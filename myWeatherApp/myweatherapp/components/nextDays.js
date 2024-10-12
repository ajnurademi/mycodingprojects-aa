import React from "react";
import { OneDay } from "../components/oneDay"

export const NextDays = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-center items-center text-white font-medium text-sm p-4 my-5 mx-4 bg-[#1b4074] rounded-2xl">
          <section className="mx-4 flex justify-center items-center">
            <img src="/rain.svg" alt="rain_icon" className="mx-2" />
            <p>6%</p>
          </section>
          <section className="mx-4 flex justify-center items-center">
            <img src="/humidity.svg" alt="rain_icon" className="mx-2" />
            <p>6%</p>
          </section>
          <section className="mx-4 flex justify-center items-center">
            <img src="/wind.svg" alt="rain_icon" className="mx-2" />
            <p>6%</p>
          </section>
        </div>
      </div>

      <div className="container">
        <div className="text-white font-medium text-sm p-4 my-5 mx-4 bg-[#1b4074] rounded-2xl ">
          <h1 className="text-left mb-6">Next Forecast</h1>
          <div className="flex justify-center item">
            <OneDay />
          </div>
        </div>
      </div>
    </>
  );
};
