import Card from "@/svg/card";
import SquigglyArrow from "@/svg/squiggly-arrow";
import React from "react";

const SectionOne: React.FC = () => {
  return (
    <section className="flex flex-col gap-[75px] mb-[117px]">
      <h2 className="w-[474px] mx-auto relative text-[43px] text-black1 leading-[130%] font-semibold">
        What makes <br />
        Paypeer{" "}
        <span className="text-opacity-[0.67] text-black1 inline-block">
          unique
        </span>
        <div className="absolute right-[7px] bottom-[0px]">
          <SquigglyArrow />
        </div>
      </h2>
      <ul className="list-none flex flex-wrap -mx-[35px]">
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
          <li className="px-[17.5px] w-1/3" key={color}>
            <div className="w-full min-h-[340px] border-black1 border-[1px] pt-[51px] pb-[62px] px-[42px] flex flex-col items-center">
              <Card fill={color} className="mb-[33px]" />
              <p
                className={`text-2xl text-black1 text-opacity-[0.87] font-semibold mt-1 leading-[2]`}
              >
                {title}
              </p>
              <p className="text-lg leading-[24px] max-w-[288px] text-black1 text-opacity-[0.87] text-center font-normal">
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
