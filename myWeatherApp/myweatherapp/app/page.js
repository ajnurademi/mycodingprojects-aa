import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { NextDays } from '../components/nextDays';

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600">
        <div className="md:w-[40vh] md:h-[60vh] lg:w-[60vh] lg:h-[80vh] flex flex-col items-center justify-center border-dashed border-4 border-white bg-white/10 backdrop-blur-lg rounded-[3vh]">
          <Header />
          <Hero />
          <NextDays />
        </div>
      </div>
    </>
  );
}
