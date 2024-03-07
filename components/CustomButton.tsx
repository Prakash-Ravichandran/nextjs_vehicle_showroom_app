// "use client";

import { CustomButtonprops } from "../types";

export const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonprops) => {
  return (
    <>
      <button disabled={false} type={"button"} className={`custom-btn`}>
        <span className="custom-btn__text">Book Now</span>
      </button>
    </>
  );
};
