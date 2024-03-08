"use client";

import { CustomButton } from "@/components/CustomButton";

export const Hero = () => {
  const handleScroll = () => {
    console.log("function");
  };

  return (
    <>
      <div className="hero">
        <div className="flex-1 pt-36 padding-x">
          <h1 className="hero__title">
            Find a book or rent a car quickly and easily !
          </h1>
          <p className="hero__subtitle">
            Strealine you car rental experience without effortless booking
            Process.
          </p>
          <CustomButton
            title="Explore cars"
            containerStyles={"bg-primary-blue text-white rounded-full"}
            handleClick={handleScroll}
          />
        </div>
      </div>
    </>
  );
};
