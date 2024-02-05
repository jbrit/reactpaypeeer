import Image from "next/image";

const SectionTwo = () => {
  return (
    <section className="flex items-center gap-[100px]">
      <h2 className="text-[48px] text-black1 leading-[130%] font-semibold flex-grow">
        Paypeer App <br />
        <span className="text-opacity-[0.67] text-black1 inline-block">
          Screenshots
        </span>
      </h2>
      <div className="overflow-x-auto flex-grow flex gap-4">
        {["swap", "card", "dashboard"].map((item) => (
          <div key={item} className="relative w-[229px] h-[461px]">
            <Image alt="" fill src={`/${item}.png`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;
