import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { NextDays } from '../components/nextDays';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="lg:w-[43,75rem] lg:h-[54.38rem] md:w-[40rem] md:h-[53rem] sm:w-[35rem] sm:h-[45rem] flex flex-col items-center justify-center border-dashed border-4 border-white bg-white/10 backdrop-blur-lg rounded-[3vh]">
        <Header />
        <Hero />
        <NextDays />
      </div>
    </div>
  );
}
