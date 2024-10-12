import React from 'react';

export const OneDay = () => {
  return (
    <>
      <div className="container bg-[#367fc4] bg-opacity-30 p-4 rounded-[1rem] w-28 h-52 border-solid border-[#5096FF] border-2">
        <div className="flex flex-col items-center justify-center text-base">
          <p className="mb-5 text-lg">24°</p>
          <img src="weather.webp" alt="weather_icon" className="mb-5" />
          <p>12:00</p>
        </div>
      </div>
    </>
  );
}
