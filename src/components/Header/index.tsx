import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import ThemeButton from "../ThemeButton";

const Bar = styled.header`
  width: 100%;
  height: 5rem;
  background-color: ${(props) => props.theme.elementBG};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 0.75rem 1rem;
  box-shadow: var(--box-shadow);

  @media screen and (min-width: 600px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const Caption = styled.h1`
  @media only screen and (min-width: 300px) {
    font-size: 1rem;
    color: inherit;
  }

  @media screen and (min-width: 600px) {
    font-size: 1.25rem;
  }
`;

function Header({
  theme,
  toggleTheme,
}: {
  theme: "dark" | "light";
  toggleTheme: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Bar>
      <Caption>Where in the world?</Caption>
      <ThemeButton theme={theme} onClick={toggleTheme} />
    </Bar>
  );
}

export default Header;
