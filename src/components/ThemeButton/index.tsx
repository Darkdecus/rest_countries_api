import React, { PropsWithoutRef } from "react";
import styled from "styled-components";
import { BsMoon, BsMoonFill } from "react-icons/bs";

const Button = styled.button`
  background-color: inherit;
  border: none;
  color: inherit;
  font-weight: 300;
`;

function ThemeButton(
  props: PropsWithoutRef<React.ButtonHTMLAttributes<HTMLButtonElement>> & {
    theme: "dark" | "light";
  }
) {
  return (
    <Button type="button" id="themeButton" {...props}>
      {props.theme === "light" ? <BsMoon /> : <BsMoonFill />} &nbsp;{" "}
      {props.theme === "dark" ? "Light" : "Dark"} Mode
    </Button>
  );
}

export default ThemeButton;
