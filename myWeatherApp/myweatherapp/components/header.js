export const Header = () => {
  return (
    <>
      <div className="lg:w-full lg:h-[5vh] flex justify-between items-center px-8 py-2">
        <div className="flex items-center"> 
          <img 
            src="/location.svg" 
            alt="location_icon" 
            className="h-6 w-auto text-white" 
          />
          <h1 className="font-medium text-white ml-2">Location</h1> 
        </div>
        <img 
          src="/search.svg" 
          alt="search_icon" 
          className="h-6 w-auto" 
        />
      </div>
    </>
  );
}
