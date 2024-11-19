


import Image from "next/image";
import casual from "@/app/assets/style/casual.png";
import formal from "@/app/assets/style/formal.png";
import party from "@/app/assets/style/party.png";
import gym from "@/app/assets/style/gym.png";

export default function Style() {
  return (
    <div className="w-full min-h-screen rounded-[20px] bg-[#F0F0F0] mx-5 flex flex-col items-center pb-10">
      <h1 className="text-[#000000] leading-[36px] font-bold text-[32px] text-center mt-10 lg:w-[687px] lg:text-[48px] lg:leading-[57.6px] lg:h-[58px]">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 justify-items-center">
        {/* Casual Image */}
        <div className="relative w-[310px] h-[190px] lg:w-[484px] lg:h-[289px] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
          <Image
            src={casual}
            alt="casual"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Formal Image */}
        <div className="relative w-[310px] h-[190px] lg:w-[584px] lg:h-[289px] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
          <Image
            src={formal}
            alt="formal"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Party Image */}
        <div className="relative w-[310px] h-[190px] lg:w-[584px] lg:h-[289px] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
          <Image
            src={party}
            alt="party"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Gym Image */}
        <div className="relative w-[310px] h-[190px] lg:w-[484px] lg:h-[289px] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
          <Image
            src={gym}
            alt="gym"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
