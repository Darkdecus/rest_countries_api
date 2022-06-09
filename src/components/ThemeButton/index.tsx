import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button``;

function ThemeButton() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  const toggleTheme = () =>
    setTheme((state) => (state === "dark" ? "light" : "dark"));

  return (
    <Button type="button" id="themeButton" onClick={toggleTheme}>
      Light Mode
    </Button>
  );
}

export default ThemeButton;
