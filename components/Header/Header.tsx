"use client";
import { GTWalsheim } from "@/fonts/fonts";
import PaypeerLogo from "@/svg/paypeer-logo";
import ScrollDown from "@/svg/scroll-down";
import TextCurve from "@/svg/text-curve";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="min-h-[400px] md:min-h-[585px] w-full bg-grid-lines bg-no-repeat bg-cover relative bg-center mb-[104px]">
      <nav className="py-4 lg:py-8 border-b-2 border-black1 px-6 lg:px-[40px] xl:px-[85px] relative">
        <div className="flex justify-between items-center">
          <Link href="/">
            <PaypeerLogo className="w-[132px] h-[43px] xl:w-[192px] xl:h-[43px]" />
          </Link>
          <button
            className={`block md:hidden text-lg uppercase font-bold text-black1 ${GTWalsheim.className}`}
            onClick={() => setIsMenuOpen(true)}
          >
            Menu
          </button>
          <div className="hidden md:flex gap-[20px] lg:gap-[26px] items-center">
            <ul
              className={`list-none flex items-center gap-[20px] lg:gap-[42px] ${GTWalsheim.className}`}
            >
              <li className="font-normal text-[20px] leading-[102.6%] text-black1 hover:font-bold">
                <Link href="/">Home</Link>
              </li>
              <li className="font-normal text-[20px] leading-[102.6%] text-black1 hover:font-bold">
                <Link href="/">Explore</Link>
              </li>
              <li className="font-normal text-[20px] leading-[102.6%] text-black1 hover:font-bold">
                <Link href="/">How it works?</Link>
              </li>
            </ul>
            <div className="relative w-[203px] h-[60px] lg:w-[293px] lg:h-[60px]">
              <Image fill src={"/store.png"} objectFit="contain" alt="" />
            </div>
          </div>
        </div>
      </nav>
      <nav
        className={`flex md:hidden fixed top-0 left-0 h-full w-full bg-white z-[99] flex-col items-center justify-center gap-2 ${
          isMenuOpen ? "opacity-1" : "opacity-0"
        } ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        } transition-opacity`}
      >
        <ul
          className={`list-none flex flex-col items-center gap-[20px] ${GTWalsheim.className}`}
        >
          <li className="font-medium text-[24px] leading-[102.6%] text-black1">
            <Link onClick={() => setIsMenuOpen(false)} href="/">
              Home
            </Link>
          </li>
          <li className="font-medium text-[24px] leading-[102.6%] text-black1">
            <Link onClick={() => setIsMenuOpen(false)} href="/">
              Explore
            </Link>
          </li>
          <li className="font-medium text-[24px] leading-[102.6%] text-black1">
            <Link onClick={() => setIsMenuOpen(false)} href="/">
              How it works?
            </Link>
          </li>
        </ul>
        <div className="relative w-[203px] h-[60px] lg:w-[293px] lg:h-[60px]">
          <Image fill src={"/store.png"} objectFit="contain" alt="" />
        </div>
        <button
          onClick={() => setIsMenuOpen(false)}
          className={`block md:hidden text-lg uppercase font-bold text-black1 ${GTWalsheim.className} absolute right-4 top-6`}
        >
          Close
        </button>
      </nav>
      <section className="mt-[100px] md:mt-[121px]">
        <h1 className="text-[36px] sm:text-[40px] md:text-[52px] max-w-[591px] leading-[120%] mx-auto text-center font-semibold text-black1">
          Convert your Naira to Dollars with{" "}
          <span className="text-opacity-[0.67] text-black1 inline-block relative">
            AMMs
            <span className="absolute w-full left-1/2 -translate-x-1/2 bottom-[-15px]">
              <TextCurve className="w-full" />
            </span>
          </span>
        </h1>
      </section>
      <button className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <ScrollDown className="w-[70px] h-[70px] md:w-[91px] md:h-[91px]" />
      </button>
    </header>
  );
};

export default Header;
