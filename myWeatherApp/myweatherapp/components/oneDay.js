import React from "react";

export const OneDay = ({ forecast }) => {
  const temperature = Math.round(forecast.main.temp);
  const time = new Date(forecast.dt * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const weatherIcon = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

  return (
    <div className="container bg-[#367fc4] bg-opacity-30 p-4 rounded-[1rem] w-28 h-52 border-solid border-[#5096FF] border-2 mx-6">
      <div className="flex flex-col items-center justify-center text-base">
        <p className="mb-5 text-lg">{temperature}°</p>
        <img src={weatherIcon} alt="weather_icon" className="mb-5" />
        <p>{time}</p>
      </div>
    </div>
  );
};
