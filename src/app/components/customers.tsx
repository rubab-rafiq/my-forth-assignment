
import Image from "next/image";
import tick from "@/app/assets/tick.png";
import fullstar from "@/app/assets/f-star.png";

export default function Customers() {
    return (
        <div className="w-full min-h-screen rounded-[20px] relative">
            {/* Heading */}
            <h1 className="text-[#000000] absolute leading-[36px] left-[16px] font-bold text-[32px] w-[286px] h-[72px] mt-10 lg:pt-10 lg:w-[654px] 
            lg:text-[48px] lg:leading-[57.6px] lg:h-[58px] lg:left-[100px]">
                OUR HAPPY CUSTOMERS
            </h1>

            {/* Cards Section */}
            <div className="flex flex-wrap justify-center gap-[20px] mt-10 absolute top-[130px] left-[16px] lg:left-[100px] lg:top-[200px]">
                {/* Card 1 */}
                <div className="w-[358px] h-[186.19px] rounded-[20px] p-6 border-[#000000] border-opacity-10 border lg:w-[400px] lg:h-[240px] lg:p-8 mb-5 lg:mb-0 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col gap-[22px]">
                        {/* Stars */}
                        <div className="flex gap-[5.5px] lg:gap-[6.49px] ">
                            {[...Array(5)].map((_, i) => (
                                <Image
                                    key={i}
                                    src={fullstar}
                                    alt="star"
                                    className="w-[19.19px] h-[19.19px] lg:w-[22.58px] lg:h-[22.58px]"
                                />
                            ))}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-2">
                            <h3 className="flex items-center font-bold text-[16px] leading-[22px] lg:text-[20px] lg:leading-[24px]">
                                Sarah M.
                                <span className="ml-2 w-[15.44px] h-[15.44px] lg:w-[24px] lg:h-[24px]">
                                    <Image src={tick} alt="Tick" className="w-full h-full object-contain" />
                                </span>
                            </h3>
                            <p className="font-normal text-[14px] leading-[20px] opacity-60 lg:text-[16px] lg:leading-[22px]">
                                "I'm blown away by the quality and style of the clothes I received from Shop.co.
                                From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-[358px] h-[186.19px] rounded-[20px] p-6 border-[#000000] border-opacity-10 border lg:w-[400px] lg:h-[240px] lg:p-8 mb-5 lg:mb-0 hidden lg:block hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col gap-[22px]">
                        {/* Stars */}
                        <div className="flex gap-[5.5px] lg:gap-[6.49px]">
                            {[...Array(5)].map((_, i) => (
                                <Image
                                    key={i}
                                    src={fullstar}
                                    alt="star"
                                    className="w-[19.19px] h-[19.19px] lg:w-[22.58px] lg:h-[22.58px]"
                                />
                            ))}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-2">
                            <h3 className="flex items-center font-bold text-[16px] leading-[22px] lg:text-[20px] lg:leading-[24px]">
                                James L.
                                <span className="ml-2 w-[15.44px] h-[15.44px] lg:w-[24px] lg:h-[24px]">
                                    <Image src={tick} alt="Tick" className="w-full h-full object-contain" />
                                </span>
                            </h3>
                            <p className="font-normal text-[14px] leading-[20px] opacity-60 lg:text-[16px] lg:leading-[22px]">
                                "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co.
                                The selection of clothes is not only diverse but also on-point with the latest trends.”
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-[358px] h-[186.19px] rounded-[20px] p-6 border-[#000000] border-opacity-10 border lg:w-[400px] lg:h-[240px] lg:p-8 mb-5 lg:mb-0 hidden lg:block hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col gap-[22px]">
                        {/* Stars */}
                        <div className="flex gap-[5.5px] lg:gap-[6.49px]">
                            {[...Array(5)].map((_, i) => (
                                <Image
                                    key={i}
                                    src={fullstar}
                                    alt="star"
                                    className="w-[19.19px] h-[19.19px] lg:w-[22.58px] lg:h-[22.58px]"
                                />
                            ))}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-2">
                            <h3 className="flex items-center font-bold text-[16px] leading-[22px] lg:text-[20px] lg:leading-[24px]">
                                Emma W.
                                <span className="ml-2 w-[15.44px] h-[15.44px] lg:w-[24px] lg:h-[24px]">
                                    <Image src={tick} alt="Tick" className="w-full h-full object-contain" />
                                </span>
                            </h3>
                            <p className="font-normal text-[14px] leading-[20px] opacity-60 lg:text-[16px] lg:leading-[22px]">
                                "Shop.co has become my go-to for stylish, comfortable clothing that suits all my needs. Their customer service is unmatched!”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
