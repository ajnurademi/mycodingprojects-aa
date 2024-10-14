"use client"; 

import { useEffect } from 'react';
import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { NextDays } from '../components/nextDays';

export default function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY; 

  useEffect(() => {
    const getData = async () => {
      try {
        const query = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${API_KEY}`);
        const response = await query.json();
        console.log('Response from API:', response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []); 

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="lg:w-[43.75rem] lg:h-[54.38rem] md:w-[40rem] md:h-[53rem] sm:w-[35rem] sm:h-[30rem] flex flex-col items-center justify-center border-dashed border-4 border-white bg-white/10 backdrop-blur-lg rounded-[3vh]">
        <Header />
        <Hero />
        <NextDays />
      </div>
    </div>
  );
}
