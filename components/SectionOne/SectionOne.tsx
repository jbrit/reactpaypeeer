import Card from "@/svg/card";
import SquigglyArrow from "@/svg/squiggly-arrow";
import React from "react";

const SectionOne: React.FC = () => {
  return (
    <section className="flex flex-col gap-[20px] md:gap-[75px] mb-[80px] md:mb-[117px] px-4">
      <h2 className="text-center md:text-left md:w-[474px] mx-auto relative text-[32px] md:text-[43px] text-black1 leading-[130%] font-semibold">
        What makes <br className="hidden sm:block" />
        Paypeer{" "}
        <span className="text-opacity-[0.67] text-black1 inline-block">
          unique
        </span>
        <div className="absolute right-[7px] bottom-[0px] hidden md:block">
          <SquigglyArrow />
        </div>
      </h2>
      <ul className="list-none flex flex-wrap -mx-[17.5px]">
        {[
          {
            color: "green",
            title: "Virtual Card",
            subtitle:
              "Dollar or Naira card for ease of online payment without limit",
          },
          {
            color: "pink",
            title: "Easy Top-Up",
            subtitle: "Add funds without seconds via our PayStack Integration",
          },
          {
            color: "yellow",
            title: "AMMs feature",
            subtitle: "Automated Market Makers for easy of Swap automatically",
          },
        ].map(({ color, subtitle, title }) => (
          <li
            className="px-[17.5px] w-full md:w-1/2 xl:w-1/3 mb-[35px]"
            key={color}
          >
            <div className="w-full min-h-[340px] border-black1 border-[1px] pt-[51px] pb-[62px] px-4 sm:px-[42px] flex flex-col items-center">
              <Card fill={color} className="mb-[33px] w-[100px] h-[100px]" />
              <p
                className={`text-lg md:text-2xl text-black1 text-opacity-[0.87] font-semibold mt-1 leading-[2]`}
              >
                {title}
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-[20px] sm:leading-[24px] max-w-[288px] text-black1 text-opacity-[0.87] text-center font-normal">
                {subtitle}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionOne;
