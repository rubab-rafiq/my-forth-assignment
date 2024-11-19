import Image from "next/image";
import shirt from "@/app/assets/newarrivals/shirt.png";
import paint from "@/app/assets/newarrivals/paint.png";
import shirt2 from "@/app/assets/newarrivals/shirt2.png";
import shirt3 from "@/app/assets/newarrivals/shirt3.png";
import halfstar from "@/app/assets/h-star.png";
import fullstar from "@/app/assets/f-star.png";
export default function NewArrivals() {
    return (
      <div className="relative py-8 ">
        <div className="font-bold text-[32px] text-center leading-[38.4px] text-[#000000]">
          NEW ARRIVALS
        </div>
        <div className="flex justify-evenly py-5">
        <div className="w-[198px] h-[200.01px] lg:w-[295px] lg:h-[298px] hover:shadow-lg">
            <Image src={shirt} alt=""  className="lg:rounded-[20px] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"/>
            <p className="font-bold text-[16px] leading-[21.6px] h-[22px] w-[190px] mt-1 lg:mt-1.5 lg:text-[20px] lg:h-[27px] lg:w-[235px] lg:leading-[27px] ">
                T-shirt with Tape Details
                </p>
                <div className="w-[127px] h-[16px] flex gap-2.5 mt-1 lg:w-[150px] lg:h-[19px] lg:gap-3.5 lg:mt-1.5">
                <div className="w-[87px] h-[15.47px] flex gap-1 lg:w-[104px] lg:h-[18.49px] lg:gap-[5.31px] ">
                    <Image src={fullstar} alt="star" className="w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]"/>
                    <Image src={fullstar} alt="star" className="w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]"/>
                    <Image src={fullstar} alt="star" className="w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]"/>
                    <Image src={fullstar} alt="star" className="w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]"/>
                    <Image src={halfstar} alt="star" className="w-[7.36px] h-[13.99px]  lg:w-[8.79px] lg:h-[16.72px]"/>
                    </div>
                   <p className="font-normal text-[12px] leading-[16.2px] text-[#000000] lg:text-[14px]">4.5/<span className="text-[#000000] opacity-60">5</span></p>
                </div>
                <p className="text-[20px] mt-1 font-bold leading-[27px] lg:text-[24px] lg:leading-[32.4px] lg:mt-1.5">$120</p>
        </div> 


        <div className="w-[198px] h-[200.01px] mt-1 lg:w-[295px] lg:h-[298px] lg:mt-1.5">
            <Image src={paint} alt="" className="rounded-[13.42px] lg:rounded-[20px] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"/>
            <p className="font-bold text-[16px] leading-[21.6px] h-[22px] w-[120px] lg:mt-1.5 lg:text-[20px] lg:h-[27px] lg:w-[150px] lg:leading-[27px]">
            Skinny Fit Jeans
            </p>
            <div className="w-[127px] h-[16px] flex gap-2.5 mt-1 lg:w-[150px] lg:h-[19px] lg:gap-3.5">
                    <div className="w-[87px] h-[15.47px] flex gap-1  lg:w-[104px] lg:h-[18.49px] lg:gap-[5.31px] ">
                    <Image src={fullstar} alt="star" className="w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px] "/>
                    <Image src={fullstar} alt="star" className="w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]"/>
                    <Image src={fullstar} alt="star" className="w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]"/>
                    <Image src={fullstar} alt="star" className="w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]"/>
                    <Image src={halfstar} alt="star" className="w-[7.36px] h-[13.99px] lg:w-[8.79px] lg:h-[16.72px]"/>
                    </div>
                    <p className="font-normal text-[12px] leading-[16.2px] text-[#000000] lg:text-[14px]">4.5/<span className="text-[#000000] opacity-60">5</span></p>
                    </div>
                    <p className="text-[20px] mt-1 font-bold leading-[27px] lg:text-[24px] 
                    lg:leading-[32.4px] lg:mt-1.5 ">$240  <span className="text-[#000000] ml-2 opacity-40 line-through "> $260 </span>
                    <button className="bg-[#FF3333] bg-opacity-10 rounded-[62px] text-[#FF3333]
                    h-[28px] w-[58px] text-[12px] mt-1.5 leading-[16.2px] font-medium ml-2 px-2 py-2 ">
                 -20%</button> </p>
                  
        </div>


        <div className="hidden lg:block lg:w-[295px] lg:h-[298px] ">
            <Image src={shirt2} alt="" className=" lg:rounded-[20px] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"/>
            <p className="lg:text-[20px] lg:h-[27px] lg:w-[151px] lg:leading-[27px] font-bold mt-1.5 ">
         Checkered Shirt
        </p>
        <div className="w-[150px] h-[19px] flex gap-3.5 mt-1.5">
                    <div className="w-[104px] h-[18.49px] gap-[5.31px] flex">
                    <Image src={fullstar} alt="star" className="w-[18.49px] h-[18.49px]"/>
                    <Image src={fullstar} alt="star" className="w-[18.49px] h-[18.49px]"/>
                    <Image src={fullstar} alt="star" className="w-[18.49px] h-[18.49px]"/>
                    <Image src={fullstar} alt="star" className="w-[18.49px] h-[18.49px]"/>
                    <Image src={halfstar} alt="star" className="w-[8.79px] h-[16.72px]"/>
                    </div>
                    <p className="font-normal text-[14px] leading-[18.9px] text-[#000000] ">4.5/<span className="text-[#000000] opacity-60">5</span></p>
                    </div>
                    <p className="text-[20px] mt-1 font-bold leading-[27px] lg:text-[24px]
                     lg:leading-[32.4px] lg:mt-1.5 ">$180</p>
        </div>


        <div className="hidden lg:block  lg:w-[295px] lg:h-[298px]">
            <Image src={shirt3} alt=""  className=" lg:rounded-[20px] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"/>
            <p className="lg:text-[20px] lg:h-[27px] lg:w-[209px] lg:leading-[27px] font-bold mt-1.5">
         Sleeve Striped T-Shirt
        </p>
        <div className="w-[150px] h-[19px] flex gap-3.5 mt-1.5">
                    <div className="w-[104px] h-[18.49px] gap-[5.31px] flex">
                    <Image src={fullstar} alt="star" className="w-[18.49px] h-[18.49px]"/>
                    <Image src={fullstar} alt="star" className="w-[18.49px] h-[18.49px]"/>
                    <Image src={fullstar} alt="star" className="w-[18.49px] h-[18.49px]"/>
                    <Image src={fullstar} alt="star" className="w-[18.49px] h-[18.49px]"/>
                    <Image src={halfstar} alt="star" className="w-[8.79px] h-[16.72px]"/>
                    </div>
                    <p className="font-normal text-[14px] leading-[18.9px] text-[#000000]">4.5/<span className="text-[#000000] opacity-60">5</span></p>
                    </div>
                    <p className="text-[20px] mt-1 font-bold leading-[27px] lg:text-[24px] 
                    lg:leading-[32.4px] lg:mt-1.5 ">$130  <span className="text-[#000000] ml-2 opacity-40 line-through "> $160 </span> 
                   <button className="bg-[#FF3333] bg-opacity-10 rounded-[62px] text-[#FF3333]
                    h-[28px] w-[58px] text-[12px] mt-1.5 leading-[16.2px] font-medium ml-2 px-2 py-2">
                  -30%</button> </p>
                   </div>
                  </div>
                  <div className="flex justify-center items-center mt-[120px] my-[90px] ">
          <div className="border border-[#000000] border-opacity-10 w-[358px] h-[46px]  rounded-[62px] flex 
          items-center justify-center lg:h-[52px] lg:w-[218px]  hover:bg-[#FF5733] hover:text-white transition-all duration-300 ease-in-out px-6 py-2">
            <button className="text-[14px] font-medium leading-[18.9px] lg:text-[16px] lg:leading-[21.6px] 
             bg-transparent  hover:bg-[#FF5733] hover:text-white transition-all duration-300 ease-in-out px-6 py-2">
          View All
       </button>

        </div>
     </div>
     <div className="w-[358px]  border-[#000000] border-opacity-10 border lg:w-[1240px] m-auto">
       <hr />
     </div>
         </div>


    );
  }
  