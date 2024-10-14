"use client";
import React, { useState } from 'react';

export const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Suchwert:', searchValue); 
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
          <h1 className="font-medium text-white ml-2">Location</h1>
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
