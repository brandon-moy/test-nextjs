import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="w-full h-screen pt-16 bg-main">
      <Image
        width="100"
        height="100"
        alt="Picture of Brandon Moy"
        src="/brandon-moy.jpg"
      ></Image>
      <h1>hello</h1>
    </div>
  );
}
