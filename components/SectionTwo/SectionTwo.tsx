import Image from "next/image";
import React from "react";

const SectionTwo: React.FC = () => {
  return (
    <section
      id="section-two"
      className="flex flex-col md:flex-row items-center gap-5 sm:gap-9 md:gap-[100px] mb-[85px] px-4 overflow-x-hidden"
    >
      <h2 className="text-[32px] md:text-[48px] text-center sm:text-left text-black1 leading-[130%] font-semibold flex-grow">
        Paypeer App <br className="hidden sm:block" />
        <span className="text-opacity-[0.67] text-black1 inline-block">
          Screenshots
        </span>
      </h2>
      <div className="overflow-x-auto min-w-[735px]">
        <div className="flex justify-start gap-4">
          {["swap", "card", "dashboard"].map((item) => (
            <div key={item} className="relative w-[229px] h-[461px]">
              <Image alt="" fill src={`/${item}.png`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
