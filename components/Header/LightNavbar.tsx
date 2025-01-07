
"use client";
import Link from "next/link";
import { useState } from "react"; 
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

import Image from "next/image";

export default function LightNavbar() {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <>
      <nav className="sticky top-0 z-50 h-auto w-full bg-[#FAFAFA] lg:bg-white">
        <div className="flex items-center justify-between mt-3 ml-9 mr-9 lg:mt-0">
          {/* logo */}
          <div className="w-[50vw] sm:w-[46vw] md:w-[40vw] lg:w-[20vw] xl:w-[15vw]">
            <Image
              src="/images/navbar-brand-logo.svg"
              alt="logo"
              width={2}
              height={2}
              layout="responsive"
            />
          </div>

          {/* icons */}
          <div className="w-[7vw] sm:w-[6.5vw] md:w-[5.5vw] lg:hidden" onClick={toggleMenu}>
            <Image
              src="/images/hamburger-menu.svg"
              alt="menu icon"
              width={2}
              height={2}
              layout="responsive"
            />
          </div>

          {/* Full menu for lg and above */}
          <div className="hidden lg:flex lg:items-center font-semibold lg:gap-36 xl:font-bold xl:gap-[33vw] ">
            <ul
              className={`${mont.className} flex gap-5 items-center text-[1.4vw] text-[#737373] xl:gap-4 xl:text-[1vw] 2xl:gap-5`}
            >
            <Link href="/"><li className=" cursor-pointer hover:text-[#23A6F0] ">Home</li></Link> 
            <Link href="/Shop"><li className="cursor-pointer hover:text-[#23A6F0]">Shop</li></Link>  
            <Link href="/About"><li className="cursor-pointer hover:text-[#23A6F0]">About</li></Link>
            <Link href="/Contact"><li className="cursor-pointer hover:text-[#23A6F0]">Contact</li></Link>
            <Link href="/Pricing"><li className="cursor-pointer hover:text-[#23A6F0]">Pricing</li></Link>
            <Link href="/Team"><li className="cursor-pointer hover:text-[#23A6F0]">Team</li></Link>
            </ul>

            <div className="flex items-center gap-2">
              {/* Login/Register button */}
              <div className="w-[14vw] xl:w-[10.2vw]">
                <Image
                  src="/images/login-register.svg"
                  alt="login-register-button"
                  width={30}
                  height={30}
                  layout="responsive"
                />
              </div>

              {/* Icons */}
              <div className="flex items-center gap-2">
                <div className="w-[3.5vw] xl:w-[2.2vw]">
                  <Image
                    src="/images/search-icon.svg"
                    alt="search"
                    width={2}
                    height={2}
                    layout="responsive"
                  />
                </div>
                <div className="w-[4vw] xl:w-[2.6vw]">
                  <Image
                    src="/images/cart-icon.svg"
                    alt="cart"
                    width={2}
                    height={2}
                    layout="responsive"
                  />
                </div>
                <div className="w-[4vw] xl:w-[2.8vw]">
                  <Image 
                    src="/images/wishlist-icon.svg"
                    alt="wishlist"
                    width={2}
                    height={2}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conditional rendering for the navigation menu (visible only below lg) */}
        {menuOpen && (
          <div className=" fixed top-0 w-full h-full bg-[#FAFAFA] pt-[6vw] mt-[15vw]
          sm:mt-[13vw] md:mt-[11vw] lg:hidden z-40">
            <ul
              className={`${mont.className} flex flex-col gap-[30px] items-center text-[6.2vw] 
               text-[#737373] sm:text-[5.4vw] md:text-[4.5vw]`}
            >
            <Link href="/"><li className="cursor-pointer hover:text-[#23A6F0]">Home</li></Link> 
            <Link href="/Shop"><li className="cursor-pointer hover:text-[#23A6F0]">Shop</li></Link> 
            <Link href="/About"><li className="cursor-pointer hover:text-[#23A6F0]">About</li></Link> 
            <Link href="/Contact"><li className="cursor-pointer hover:text-[#23A6F0]">Contact</li></Link> 
            <Link href="/Pricing"><li className="cursor-pointer hover:text-[#23A6F0]">Pricing</li></Link> 
            <Link href="/Team"><li className="cursor-pointer hover:text-[#23A6F0]">Team</li></Link>
            </ul>

            {/* login/register button */}
            <div className="w-[65vw] m-auto mt-4 sm:w-[60vw] md:w-[45vw]">
              <Image
                src="/images/login-register.svg"
                alt="login-register-button"
                width={30}
                height={30}
                layout="responsive"
              />
            </div>

            <div className="flex flex-col items-center mb-6">
              {/* search icon */}
              <div className="w-[13vw] sm:w-[11vw] md:w-[8.5vw]">
                <Image
                  src="/images/search-icon.svg"
                  alt="search"
                  width={2}
                  height={2}
                  layout="responsive"
                />
              </div>

              {/* cart icon */}
              <div className="w-[15.5vw] sm:w-[13vw] md:w-[10vw]">
                <Image
                  src="/images/cart-icon.svg"
                  alt="cart"
                  width={6}
                  height={6}
                  layout="responsive"
                />
              </div>

              {/* like icon */}
              <div className="w-[15.5vw] sm:w-[13vw] md:w-[10vw]">
                <Image
                  src="/images/wishlist-icon.svg"
                  alt="wishlist"
                  width={6}
                  height={6}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
   

    {/* // chatgpt code  */}

  
    
    </>
  );
}







