import React from "react";
import { OneDay } from "../components/oneDay";

export const NextDays = ({
  rainProcent,
  humidityProcent,
  windProcent,
  forecasts,
}) => {
  return (
    <>
      <div className="container">
        <div className="flex justify-center items-center text-white font-medium text-sm bg-[#1b4074] rounded-2xl lg:p-4 lg:my-5 lg:mx-4 md:p-4 md:my-2 md:mx-4 sm:p-4 sm:mx-4 ">
          <section className="lg:mx-4 md:mx-3 flex justify-center items-center">
            <img src="/rain.svg" alt="rain_icon" className="mx-2" />
            <p>{rainProcent !== null ? `${rainProcent}%` : "N/A"}</p>
          </section>
          <section className="lg:mx-4 md:mx-3 flex justify-center items-center">
            <img src="/humidity.svg" alt="humidity_icon" className="mx-2" />
            <p>{humidityProcent !== null ? `${humidityProcent}%` : "N/A"}</p>
          </section>
          <section className="lg:mx-4 md:mx-3 flex justify-center items-center">
            <img src="/wind.svg" alt="wind_icon" className="mx-2" />
            <p>{windProcent !== null ? `${windProcent} m/s` : "N/A"}</p>
          </section>
        </div>
      </div>

      <div className="container">
        <div className="text-white font-medium text-sm p-4 my-5 mx-4 bg-[#1b4074] rounded-2xl">
          <h1 className="text-left mb-6">Next Forecasts</h1>
          <div className="flex justify-center item">
            {forecasts.map((forecast, index) => (
              <OneDay key={index} forecast={forecast} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
