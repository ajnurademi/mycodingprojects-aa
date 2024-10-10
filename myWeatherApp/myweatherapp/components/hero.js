import React from 'react';

export const Hero = () => {
  return (
    <>
        <div className=" flex flex-col items-center justify-center">
          <img src="" alt="weather_icon" className="mb-4" />
          <div className="flex flex-col items-center justify-center text-white">
            <p className="text-[4vh] mb-1 text-white font-semibold ">28°</p>
            <p className="text-white">Participations</p>
            <p className="text-sm text-white ">Max: 25° | Min: 20°</p>
          </div>
        </div>
    </>
  );
};
