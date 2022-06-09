import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";

const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
`;

const darkTheme = {
  color: "var(--dark-text-color)",
  bg: "var(--dark-content-area-background)",
  elementBG: "var(--dark-header-background)",
};
const lightTheme = {
  color: "var(--light-text-color)",
  bg: "var(--light-content-area-background)",
  elementBG: "var(--light-header-background)",
};

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const toggleTheme = () =>
    setTheme((state) => (state === "dark" ? "light" : "dark"));

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppWrapper>
        <Header theme={theme} toggleTheme={toggleTheme} />
        {/* <ContentArea /> */}
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
