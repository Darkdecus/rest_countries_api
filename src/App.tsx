import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";

const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bg};
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
  return (
    <ThemeProvider theme={lightTheme}>
      <AppWrapper>
        <Header />
        {/* <ContentArea /> */}
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
