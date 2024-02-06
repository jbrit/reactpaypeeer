"use client";
import Image from "next/image";
import React from "react";
import Modal from "../Modal/Modal";

const SectionThree: React.FC = () => {
  let [isOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section className="flex items-center min-h-[450px] md:min-h-[536px] bg-grid-lines-2 bg-no-repeat bg-cover bg-center">
      <Modal isOpen={isOpen} closeModal={closeModal} />
      <div className="flex-grow px-5">
        <div className="flex-col items-center justify-center max-w-[560px] mx-auto">
          <h2 className="mb-4 md:mb-2 text-[32px] md:text-[42px] text-black1 leading-[130%] font-semibold flex-grow">
            Get started by{" "}
            <span className="text-opacity-[0.67] text-black1 inline-block">
              downloading
            </span>
            <span> the app</span>
          </h2>
          <button
            onClick={openModal}
            className="relative w-[250px] sm:w-[293px] h-[60px]"
          >
            <Image fill src={"/store.png"} objectFit="contain" alt="" />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block md:w-2/5 xl:w-1/3  min-h-[536px] self-stretch">
        <Image src="/enter-amount.png" alt="" objectFit="cover" fill />
      </div>
    </section>
  );
};

export default SectionThree;
