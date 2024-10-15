"use client";
import React, { useState } from 'react';

export const Header = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [locationName, setLocationName] = useState('Location'); 

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      console.log('Suchwert:', searchValue);
      const geoQuery = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=1&appid=${process.env.NEXT_PUBLIC_API_KEY}`);
      const geoResponse = await geoQuery.json();

      if (geoResponse.length > 0) {
        const { lat, lon, name } = geoResponse[0]; 
        console.log('Geocodierte Koordinaten:', lat, lon);
        setLocationName(name); 
        onSearch(lat, lon); 
      } else {
        console.error('Keine Ergebnisse für diese Stadt gefunden');
        setLocationName('Location'); 
      }
    }
  };

  return (
    <>
      <div className="container lg:h-[3.13rem] md:h-[2.50rem] sm:h-[2rem] flex justify-between items-center lg:px-8 lg:py-2 lg:mt-6 md:px-6 md:py-1 md:mt-5 sm:px-6 sm:py-1 sm:mt-5">
        <div className="flex items-center">
          <img
            src="/location.svg"
            alt="location_icon"
            className="h-6 w-auto text-white"
          />
          <h1 className="font-medium text-white ml-2">{locationName}</h1> 
        </div>
        <div className="relative flex items-center">
          {showSearch && (
            <div className="max-w-xs min-w-[8rem] mr-2">
              <div className="relative">
                <input
                  className="rounded-md pl-2 pr-16 py-1 text-sm"
                  placeholder="e.x. London"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          )}
          <img
            src="/search.svg"
            alt="search_icon"
            className="h-6 w-auto cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          />
        </div>
      </div>
    </>
  );
};
