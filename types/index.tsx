import { MouseEventHandler } from "react";

export interface CustomButtonprops {
  title: String;
  containerStyles?: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
