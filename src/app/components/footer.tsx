

import Image from "next/image"
import envelop from "@/app/assets/env.png"
import twitter from "@/app/assets/footerimage/twitter.png";
import instagram from "@/app/assets/footerimage/insta.png";
import facebook from "@/app/assets/footerimage/fb.png";
import github from "@/app/assets/footerimage/github.png";
import img1 from "@/app/assets/footerimage/img1.png";
import  img2 from "@/app/assets/footerimage/img2.png";
import img3 from "@/app/assets/footerimage/img3.png";
import img4 from "@/app/assets/footerimage/img4.png";
import img5 from "@/app/assets/footerimage/img5.png";


export default function Footer() {
    return (
        <div>
            <div className="w-[358px] h-[293px] left-[16px] top-[3780px] absolute rounded-[20px] bg-[#000000]
           lg:top-[3581px] lg:absolute lg:w-[1240px] lg:h-[180px] lg:flex lg:justify-between lg:left-[100px] lg:px-20">
                <h1 className=" mt-9 h-[105px] w-[297px] text-[32px] text-[#ffffff] leading-[35px] font-bold pl-4 lg:w-[551px] lg:h-[94px] lg:text-[40px] lg:leading-[45px]">
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </h1>

                <div className="flex flex-col md:flex-col lg:flex-col justify-center items-center mr-8 mt-7">
                    <div className="w-[311px] md:w-[600px]  mb-2 ml-8 md:ml-0 lg:ml-0 relative 
                    lg:h-[48px] lg:w-[349px] hover:scale-105 transition-transform duration-200">
                        
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="pl-14 lg:pl-[80px] pr-4 py-2 w-full text-black rounded-full border border-gray-300 
                             focus:outline-none focus:ring-2"
                        />
                        <Image
                            src={envelop}
                            alt="Envelope Icon"
                            className="h-[30px] w-[30px] absolute left-4 top-1/2 transform -translate-y-1/2 ml-1 lg:ml-5 items-center"
                        />
                    </div>

                    <button className="bg-white text-black px-1 py-2 w-[311px] md:w-[600px] lg:w-[349px] mb-2 ml-8 md:ml-0
                         lg:ml-0 rounded-full font-semibold hover:scale-x-110 border-2 ">
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>



      
      <footer className="bg-gray-200 py-10">
  <div className="container mx-auto px-6 sm:px-12 lg:px-16">
    <div className="flex flex-col md:flex-row lg:flex-row items-start justify-between gap-8 lg:gap-0 ">
      {/* About Shop.co */}
      <div className="hover:bg-gray-300 p-4 rounded-lg transition duration-300">
        <h3 className="font-extrabold text-4xl mb-4 text-black hover:text-red-600 hover:scale-105 ">
          SHOP.CO
        </h3>
        <p className="text-gray-600 mb-4">
          We have clothes that suit your style and which you are proud to wear. From women to men.
        </p>
        <div className="flex space-x-4">
          <Image
            className="w-10 h-10 border-2 border-transparent rounded-full hover:border-red-500 hover:scale-110 transition duration-300"
            src={twitter}
            alt="Twitter"
            height={50}
            width={50}
          />
          <Image
            className="w-10 h-10 border-2 border-transparent rounded-full hover:border-red-500 hover:scale-110 transition duration-300"
            src={facebook}
            alt="Facebook"
            height={50}
            width={50}
          />
          <Image
            className="w-10 h-10 border-2 border-transparent rounded-full hover:border-red-500 hover:scale-110 transition duration-300"
            src={instagram}
            alt="Instagram"
            height={50}
            width={50}
          />
          <Image
            className="w-10 h-10 border-2 border-transparent rounded-full hover:border-red-500 hover:scale-110 transition duration-300"
            src={github}
            alt="GitHub"
            height={50}
            width={50}
          />
        </div>
        </div>

      {/* Links: Company, Help, FAQ, Resources */}
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-8 lg:w-3/4">
     
        <div className="hover:bg-gray-300 p-4 rounded-lg transition duration-300">
        <h3 className="font-bold text-lg mb-4 text-black hover:text-blue-600 hover:scale-105">
          COMPANY
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:underline hover:text-pink-500 transition duration-200">
            <a href="#">About</a>
          </li>
          <li className="hover:underline hover:text-pink-500 transition duration-200">
            <a href="#">Features</a>
          </li>
          <li className="hover:underline hover:text-pink-500 transition duration-200">
            <a href="#">Works</a>
          </li>
          <li className="hover:underline hover:text-pink-500 transition duration-200">
            <a href="#">Career</a>
          </li>
        </ul>
      </div>
        {/* Help */}

        <div className="hover:bg-gray-300 p-4 rounded-lg transition duration-300">
        <h3 className="font-bold text-lg mb-4 text-black hover:text-blue-600 hover:scale-105">
          HELP
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:underline hover:text-pink-500 transition duration-200">
            <a href="#">Customer Support</a>
          </li>
          <li className="hover:underline hover:text-pink-500 transition duration-200">
            <a href="#">Delivery Details</a>
          </li>
          <li className="hover:underline hover:text-pink-500 transition duration-200">
            <a href="#">Terms & Conditions</a>
          </li>
          <li className="hover:underline hover:text-pink-500 transition duration-200">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
  {/* faq */}
      <div className="hover:bg-gray-300 p-4 rounded-lg transition duration-300">
        <h3 className="font-bold text-lg mb-4 text-black hover:text-blue-600 hover:scale-105">
          FAQ
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:underline hover:text-pink-500 transition duration-200">
            <a href="#">Account</a>
          </li>
          <li className="hover:underline hover:text-pink-500 transition duration-200">
            <a href="#">Manage Deliveries</a>
          </li>
          <li className="hover:underline hover:text-pink-500 transition duration-200">
            <a href="#">Orders</a>
          </li>
          <li className="hover:underline hover:text-pink-500 transition duration-200">
            <a href="#">Payments</a>
          </li>
        </ul>
      </div>
      {/* resources */}
      <div className="hover:bg-gray-300 p-4 rounded-lg transition duration-300">
        <h3 className="font-bold text-lg mb-4 text-black hover:text-blue-600 hover:scale-105">
          RESOURCES
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:underline hover:text-pink-500 transition duration-200">
            <a href="#">Free Books</a>
          </li>
          <li className="hover:underline hover:text-pink-500 transition duration-200">
            <a href="#">Development Tutorial</a>
          </li>
          <li className="hover:underline hover:text-pink-500 transition duration-200">
            <a href="#">How to - Blog</a>
          </li>
          <li className="hover:underline hover:text-pink-500 transition duration-200">
            <a href="#">Youtube Playlist</a>
          </li>
        </ul>
      </div>
      </div>
    
</div>
    <div className="border-2 border-b-gray-300 w-11/12 mx-auto mt-8"></div>

    <div className="mt-8 text-left text-gray-700 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 hover:text-green-600 font-bold">
      <p className="lg:w-auto hover:scale-y-150">Shop.co © 2000-2023, All Rights Reserved</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Image
          className="w-14 h-10 cursor-pointer hover:scale-125 border-2 border-transparent hover:border-green-500 rounded-md transition duration-300"
          src={img1}
          alt="visa"
          height={50}
          width={50}
        />
        <Image
          className="w-14 h-10 cursor-pointer hover:scale-125 border-2 border-transparent hover:border-green-500 rounded-md transition duration-300"
          src={img2}
          alt="card"
          height={50}
          width={50}
        />
        <Image
          className="w-14 h-10   cursor-pointer hover:scale-125 border-2 border-transparent hover:border-green-500 rounded-md transition duration-300"
          src={img3}
          alt="paypal"
          height={50}
          width={50}
        />
        <Image
          className="w-14 h-10 cursor-pointer hover:scale-125 border-2 border-transparent hover:border-green-500 rounded-md transition duration-300"
          src={img4}
          alt="applepay"
          height={50}
          width={50}
        />
        <Image
          className="w-14 h-10 cursor-pointer hover:scale-125 border-2 border-transparent hover:border-green-500 rounded-md transition duration-300"
          src={img5}
          alt="gpay"
          height={50}
          width={50}
        />
      </div>
    </div>
  </div>
</footer>
        </div>
    )
}
                  

