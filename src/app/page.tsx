import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#354a4a] w-full h-screen flex flex-col items-center justify-center">
      <h1 className="font-light text-white text-7xl">Brandon Moy</h1>
      <div className="relative flex justify-center w-full pt-4">
        <span className="absolute text-2xl font-bold text-white opacity-0 animate-cycle animation-delay-none">
          Software Engineer
        </span>
        <span className="absolute text-2xl font-bold text-white opacity-0 animate-cycle animation-delay-4000">
          CSS Artist
        </span>
        <span className="absolute text-2xl font-bold text-white opacity-0 animate-cycle animation-delay-8000">
          Front-End Developer
        </span>
        <span className="absolute text-2xl font-bold text-white opacity-0 animate-cycle animation-delay-12000">
          Programmer
        </span>
        <span className="absolute text-2xl font-bold text-white opacity-0 animate-cycle animation-delay-16000">
          Web Developer
        </span>
      </div>
    </div>
  );
}
