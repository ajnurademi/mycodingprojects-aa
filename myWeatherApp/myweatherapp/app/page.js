"use client"; 

import { useEffect, useState } from 'react';
import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { NextDays } from '../components/nextDays';

export default function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [currentTemp, setCurrentTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [rainProcent, setRainProcent] = useState(null);
  const [humidityProcent, setHumidityProcent] = useState(null);
  const [windProcent, setWindProcent] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const query = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`);
      const response = await query.json();

      if (response && response.list && response.list.length > 0) {
        const currentWeather = response.list[0];
        setCurrentTemp(Math.round(currentWeather.main.temp));
        setMaxTemp(Math.round(currentWeather.main.temp_max));
        setMinTemp(Math.round(currentWeather.main.temp_min));

        const iconCode = currentWeather.weather[0].icon;
        setWeatherIcon(`http://openweathermap.org/img/wn/${iconCode}@4x.png`);

        setRainProcent(Math.round(currentWeather.pop * 100)); 
        setHumidityProcent(Math.round(currentWeather.main.humidity)); 
        setWindProcent(Math.round(currentWeather.wind.speed)); 
      }
      console.log('Response from API:', response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (lat && lon) {
      fetchWeatherData(lat, lon);
    }
  }, [lat, lon]);

  const handleSearch = (latitude, longitude) => {
    setLat(latitude);
    setLon(longitude);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="lg:w-[43.75rem] lg:h-[54.38rem] md:w-[40rem] md:h-[53rem] sm:w-[35rem] sm:h-[30rem] flex flex-col items-center justify-center border-dashed border-4 border-white bg-white/10 backdrop-blur-lg rounded-[3vh]">
        <Header onSearch={handleSearch} />
        <Hero currentTemp={currentTemp} maxTemp={maxTemp} minTemp={minTemp} weatherIcon={weatherIcon} />
        <NextDays rainProcent={rainProcent} humidityProcent={humidityProcent} windProcent={windProcent} />
      </div>
    </div>
  );
}
