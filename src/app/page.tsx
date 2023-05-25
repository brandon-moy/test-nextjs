import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#354a4a] w-full h-screen flex flex-col items-center justify-center">
      <div className="absolute w-24 h-24 bg-white rounded-full animate-bounce top-32 left-24"></div>
      <h1 id="header-name" className="font-light text-white text-7xl">
        Brandon Moy
      </h1>
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
      <div className="absolute bottom-0 left-[360px] border-b-[300px] border-r-[130px] border-l-[130px] border-b-mountain border-l-transparent border-r-transparent">
        <div className="absolute bottom-[-98px] left-[-42.5px] border-b-[100px] border-b-snow border-r-[42.5px] border-l-[42.5px] border-l-transparent border-r-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-[490px] border-b-[300px] border-r-[100px] origin-top-right skew-x-[18deg] border-b-mshadow border-r-transparent">
        <div className="absolute bottom-[-87.5px] border-b-[100px] border-b-sshadow border-r-[30px] border-r-transparent origin-top-right skew-y-[-18deg]"></div>
      </div>
      <div className="absolute bottom-0 left-[120px] border-b-[350px] border-r-[180px] border-l-[180px] border-b-mountain border-l-transparent border-r-transparent">
        <div className="absolute bottom-[-98px] left-[-50px] border-b-[100px] border-b-snow border-r-[50px] border-l-[50px] border-l-transparent border-r-transparent"></div>
        <div className="absolute bottom-[-130px] left-[-45px] border-t-[40px] border-t-snow border-r-[25px] border-l-[25px] border-r-transparent border-l-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-[300px] border-b-[350px] border-r-[140px] origin-top-right skew-x-[18deg] border-b-mshadow border-r-transparent">
        <div className="absolute bottom-[-87px] border-b-[100px] border-b-sshadow border-r-[35px] border-r-transparent origin-top-right skew-y-[-18deg]"></div>
      </div>
      <div className="absolute bottom-0 left-[60px] border-b-[150px] border-r-[130px] border-l-[130px] border-b-mountain border-l-transparent border-r-transparent">
        <div className="absolute bottom-[-98px] left-[-85px] border-b-[100px] border-b-snow border-r-[85px] border-l-[85px] border-l-transparent border-r-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-[190px] border-b-[150px] border-r-[100px] origin-top-right skew-x-[18deg] border-b-mshadow border-r-transparent">
        <div className="absolute bottom-[-80px] border-b-[100px] border-b-sshadow border-r-[55px] border-r-transparent origin-top-right skew-y-[-18deg]"></div>
      </div>
      <div className="absolute bottom-0 left-[600px] border-b-[150px] border-r-[180px] border-l-[180px] border-b-mountain border-l-transparent border-r-transparent">
        <div className="absolute bottom-[-80px] left-[-96px] border-b-[80px] border-b-snow border-r-[95px] border-l-[95px] border-l-transparent border-r-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-[780px] border-b-[150px] border-r-[135px] origin-top-right skew-x-[18deg] border-b-mshadow border-r-transparent">
        <div className="absolute bottom-[-62.5px] border-b-[80px] border-b-sshadow border-r-[55px] border-r-transparent origin-top-right skew-y-[-18deg]"></div>
      </div>
      <div className="absolute bottom-0 left-[920px] border-b-[350px] border-r-[180px] border-l-[180px] border-b-mountain border-l-transparent border-r-transparent">
        <div className="absolute bottom-[-98px] left-[-50px] border-b-[100px] border-b-snow border-r-[50px] border-l-[50px] border-l-transparent border-r-transparent"></div>
        <div className="absolute bottom-[-130px] left-[-45px] border-t-[40px] border-t-snow border-r-[25px] border-l-[25px] border-r-transparent border-l-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-[1100px] border-b-[350px] border-r-[140px] origin-top-right skew-x-[18deg] border-b-mshadow border-r-transparent">
        <div className="absolute bottom-[-87px] border-b-[100px] border-b-sshadow border-r-[35px] border-r-transparent origin-top-right skew-y-[-18deg]"></div>
      </div>
    </div>
  );
}
