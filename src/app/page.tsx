import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#354a4a] w-full h-screen flex flex-col items-center justify-center">
      <div className="absolute w-24 h-24 bg-white rounded-full animate-bounce top-32 left-24"></div>
      <h1 className="font-light text-white text-7xl">Brandon Moy</h1>
      <div className="relative flex justify-center w-full pt-4">
        <span className="absolute text-2xl font-bold text-white opacity-0 animate-[cycle_20s_linear_infinite]">
          Software Engineer
        </span>
        <span className="absolute text-2xl font-bold text-white opacity-0 animate-[cycle_20s_linear_infinite_4s]">
          CSS Artist
        </span>
        <span className="absolute text-2xl font-bold text-white opacity-0 animate-[cycle_20s_linear_infinite_8s]">
          Front-End Developer
        </span>
        <span className="absolute text-2xl font-bold text-white opacity-0 animate-[cycle_20s_linear_infinite_12s]">
          Programmer
        </span>
        <span className="absolute text-2xl font-bold text-white opacity-0 animate-[cycle_20s_linear_infinite_16s]">
          Web Developer
        </span>
      </div>
    </div>
  );
}
