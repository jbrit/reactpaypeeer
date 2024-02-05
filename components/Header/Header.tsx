import { GTWalsheim } from "@/fonts/fonts";
import PaypeerLogo from "@/svg/paypeer-logo";
import ScrollDown from "@/svg/scroll-down";
import TextCurve from "@/svg/text-curve";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="min-h-[585px] w-full bg-grid-lines bg-no-repeat bg-cover relative bg-center mb-[94px]">
      <nav className="py-8 border-b-2 border-black1 px-[85px]">
        <div className="flex justify-between items-center">
          <Link href="/">
            <PaypeerLogo />
          </Link>
          <div className="flex gap-[26px] items-center">
            <ul
              className={`list-none flex items-center gap-[42px] ${GTWalsheim.className}`}
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
            <div className="relative w-[293px] h-[60px]">
              <Image fill src={"/store.png"} alt="" />
            </div>
          </div>
        </div>
      </nav>
      <section className="mt-[121px]">
        <h1 className="text-[52px] max-w-[591px] leading-[120%] mx-auto text-center font-semibold text-black1">
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
        <ScrollDown />
      </button>
    </header>
  );
};

export default Header;
