import React from 'react';

export const Hero = ({ currentTemp, maxTemp, minTemp, weatherIcon }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:mb-7 md:mb-5 sm:mb-2">
        <img
          src={weatherIcon || "/weather.webp"}
          alt="weather_icon"
          className="lg:size-[10rem] md:size-[10rem] sm:size-[10rem] size-15"
        />
        <div className="flex flex-col items-center justify-center text-white">
          <p className="text-[3rem] lg:mb-4 md:mb-4 text-white font-semibold">{currentTemp}°</p>
          <p className="text-white">Precipitations</p>
          <p className="text-sm text-white">Max: {maxTemp}° | Min: {minTemp}°</p>
        </div>
      </div>
    </>
  );
};
