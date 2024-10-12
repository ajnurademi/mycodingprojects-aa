import React from 'react';

export const Hero = () => {
  return (
    <>
        <div className=" flex flex-col items-center justify-center my-6">
          <img src="weather.webp" alt="weather_icon" className="mb-4 size-60" />
          <div className="flex flex-col items-center justify-center text-white">
            <p className="text-[4vh] mb-4 text-white font-semibold">28°</p>
            <p className="text-white">Participations</p>
            <p className="text-sm text-white ">Max: 25° | Min: 20°</p>
          </div>
        </div>
    </>
  );
};
