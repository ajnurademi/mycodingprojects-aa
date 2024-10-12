import React from 'react';

export const Hero = () => {
  return (
    <>
        <div className=" flex flex-col items-center justify-center lg:mb-7 md:mb-5 sm:mb-2">
          <img src="weather.webp" alt="weather_icon" className="lg:size-[15rem] md:size-[15rem] sm:size-[10rem] " />
          <div className="flex flex-col items-center justify-center text-white">
            <p className="text-[3rem] lg:mb-4 md:mb-4 text-white font-semibold ">28°</p>
            <p className="text-white">Participations</p>
            <p className="text-sm text-white ">Max: 25° | Min: 20°</p>
          </div>
        </div>
    </>
  );
};
