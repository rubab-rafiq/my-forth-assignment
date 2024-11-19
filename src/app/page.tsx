

"use client";
import { useState } from "react"; // Import useState for state management
import Image from "next/image";
import x from "@/app/assets/x.png";
import humburger from "@/app/assets/humburger.png";
import icon from "@/app/assets/icon.png";
import searchicon from "@/app/assets/searchicon.png";
import icon2 from "@/app/assets/icon2.png";
import hero from "@/app/assets/hero.png";
import star from "@/app/assets/star.png";
import versace from "@/app/assets/Vector (2).png";
import zara from "@/app/assets/zara-logo-1 1.png";
import gucci from "@/app/assets/gucci-logo-1 1.png";
import prada from "@/app/assets/prada-logo-1 1.png";
import calvinklein from "@/app/assets/Group.png";
import NewArrivals from "./components/new-arrivals";
import TopSelling from "./components/selling";
import Style from "./components/style";
import Customers from "./components/customers";
import Footer from "./components/footer";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu visibility

  return (
    <>
      <div className="w-full min-h-screen bg-[#ffffff] mx-auto relative lg:relative">
        {/* Top Announcement Bar */}
        <div className="bg-[#000000] text-[#ffffff] py-2 px-4 flex justify-between items-center">
          <p className="font-normal text-[12px] text-center mx-auto">
            Sign up and get 20% off on your first order.
            <span className="font-medium underline cursor-pointer ml-2">
              Sign Up Now
            </span>
          </p>
          <div className="hidden lg:block w-[20px] h-[20px] mr-[90px]">
            <Image src={x} alt="Close Icon hover:shadow-lg " />
          </div>
        </div>

        {/* Header Section */}
        <div className="flex items-center justify-between px-4 lg:px-12 py-6">
          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <Image
              src={humburger}
              alt="Hamburger Icon"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
            />
          </div>

          {/* Logo */}
          <div className="font-bold text-[25.2px] lg:text-[32px] leading-[30.24px]">
            SHOP.CO
          </div>

          {/* Navigation Links */}
          <ul className="hidden lg:flex gap-8 items-center font-normal text-[16px]">
            <li className="flex items-center gap-2 hover:underline hover:text-pink-500 transition duration-200">
              Shop
              <Image src={icon} alt="Icon" className="w-4 h-4" />
            </li>
            <li className="hover:underline hover:text-pink-500 transition duration-400">On Sale</li>
            <li className="hover:underline hover:text-pink-500 transition duration-400">New Arrivals</li>
            <li className="hover:underline hover:text-pink-500 transition duration-400">Brands</li>
          </ul>

          {/* Search Bar */}
          <div className="hidden lg:flex w-[477px] h-[48px] px-4 py-3 gap-3 bg-[#F0F0F0] rounded-full items-center hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
            <Image src={searchicon} alt="Search Icon" />
            <p className="text-[#655e5e]">Search for products...</p>
          </div>
        

          {/* Extra Icon for Mobile */}
          <div className="flex items-center gap-4">
            <Image src={searchicon} alt="Icon 2" className="w-6 h-6 lg:hidden" />
            <Image src={icon2} alt="Icon 2" className="w-14 h-6 " />
          </div>
        </div>



        {/* Mobile Menu */}
        {menuOpen && (
          <div className="bg-[#242323] absolute top-25 left-0 w-full shadow-lg">
            <ul className="flex flex-col items-center py-4 space-y-4 font-medium ">
              <li className="text-[#ece1e1] hover:text-orange-300">Shop</li>
              <li className="text-[#ffffff] hover:text-orange-300">On Sale</li>
              <li className="text-[#ffffff] hover:text-orange-300">New Arrivals</li>
              <li className="text-[#ffffff] hover:text-orange-300">Brands</li>
            </ul>
          </div>
        )}

        {/* Hero Section */}
        <div className="bg-[#F2F0F1] w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Text Section */}
          <div className="flex flex-col items-start justify-center px-6 py-8 lg:px-16 lg:py-20">
            <h1 className="text-[#000000] font-bold text-[36px] leading-[42px] mb-4 lg:text-[64px] lg:leading-[70px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-[#000000] text-opacity-60 text-[16px] leading-[24px] mb-6">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="w-full lg:w-[210px] h-[52px] rounded-full bg-[#000000] text-[#ffffff] font-medium text-[16px] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
              Shop Now
            </button>
           
            
            <div className="grid grid-cols-2 gap-6 mt-8 lg:grid-cols-3">
            <div>
            <p className="font-bold text-[24px] lg:text-[40px]">200+</p>
            <p className="text-[#000000] text-opacity-60 text-[12px] lg:text-[16px]">
              International Brands
            </p>
           </div>
           <div>
          <p className="font-bold text-[24px] lg:text-[40px]">2,000+</p>
         <p className="text-[#000000] text-opacity-60 text-[12px] lg:text-[16px]">
          High-Quality Products
          </p>
         </div>
        <div className="col-span-2 text-center lg:col-span-1">
        <p className="font-bold text-[24px] lg:text-[40px]">30,000+</p>
       <p className="text-[#000000] text-opacity-60 text-[12px] lg:text-[16px]">
        Happy Customers
       </p>
      </div>
       </div>

          </div> 

          {/* Column 2: Image Section */}
          <div className="relative flex items-center justify-center group">
  {/* Hero Image */}
  <Image
    src={hero}
    alt="Hero Image"
    className="w-[390px] h-[448px] lg:w-[500px] transition-all duration-300 ease-in-out group-hover:scale-105"
  />
  
  {/* First Star Icon */}
  <span className="absolute w-[76px] h-[76px] top-[20%] right-[20%] group-hover:scale-110 transition-all duration-300 ease-in-out">
    <Image src={star} alt="Star Icon" />
  </span>

  {/* Second Star Icon */}
  <span className="absolute w-[44px] h-[44px] bottom-[50%] left-[20%] group-hover:scale-110 transition-all duration-300 ease-in-out">
    <Image src={star} alt="Star Icon" />
  </span>
</div>

        </div>


  <div className="h-[146px] w-auto bg-[#000000] grid grid-cols-3 gap-4 justify-center items-center 
  lg:h-[122px] lg:grid-cols-5 lg:gap-6">
  
  {/* Versace Logo */}
  <div className="w-[116.74px] h-[23.25px] lg:w-[166.48px] lg:h-[33.16px] mx-auto group relative">
    <Image 
      src={versace} 
      alt="Versace" 
      className="transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:filter group-hover:brightness-125"
    />
  </div>
  
  {/* Zara Logo */}
  <div className="w-[63.81px] h-[26.65px] lg:w-[91px] lg:h-[38px] mx-auto group relative">
    <Image 
      src={zara} 
      alt="Zara" 
      className="transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:filter group-hover:brightness-125"
    />
  </div>
  
  {/* Gucci Logo */}
  <div className="w-[109.39px] h-[25.24px] lg:w-[156px] lg:h-[36px] mx-auto group relative">
    <Image 
      src={gucci} 
      alt="Gucci" 
      className="transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:filter group-hover:brightness-125"
    />
  </div>

  {/* Prada and Calvin Klein Logos */}
  <div className="col-span-3 grid grid-cols-2 gap-4 justify-between items-center lg:col-span-2">
    
    {/* Prada Logo */}
    <div className="w-[127px] h-[21px] lg:w-[149px] lg:h-[32px] mx-auto group relative">
      <Image 
        src={prada} 
        alt="Prada" 
        className="transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:filter group-hover:brightness-125"
      />
    </div>

    {/* Calvin Klein Logo */}
    <div className="w-[134.84px] h-[21.75px] lg:w-[206.79px] lg:h-[33.35px] mx-auto group relative">
      <Image 
        src={calvinklein} 
        alt="Calvin Klein" 
        className="transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:filter group-hover:brightness-125"
      />
    </div>
    
  </div>

</div>
    <NewArrivals/>
    <TopSelling/>
    <Style/>
    <Customers/>
    <Footer/>
     </div>
    </>
  );
}
