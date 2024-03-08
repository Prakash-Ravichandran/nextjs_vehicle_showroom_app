"use client";

import { CustomButtonprops } from "../types";

export const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonprops) => {
  return (
    <>
      <button
        disabled={false}
        type={"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
      >
        <span className="custom-btn__text">{title}</span>
      </button>
    </>
  );
};
