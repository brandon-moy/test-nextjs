import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="italic">Hello</h1>
      <p>lets google</p>
    </div>
  );
}
