import Image from "next/image";

export default function Pic() {
  return (
    <div className="flex items-center justify-center sm:basis-full lg:basis-1/4">
      <Image
        width="500"
        height="500"
        alt="Picture of Brandon Moy"
        src="/brandon-moy.jpg"
        className="border border-4 rounded-full lg:ml-12 sm:w-1/6 lg:w-full border-bold aspect-square"
        priority
      ></Image>
    </div>
  );
}
