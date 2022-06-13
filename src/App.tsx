import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import CountryList from "./components/CountryList";
import DetailedView from "./components/DetailedView";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
`;

const Main = styled.main`
  margin-top: 5px;
  background-color: inherit;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0.25rem 1.25rem;
  height: 100%;

  @media screen and (min-width: 600px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const darkTheme = {
  color: "var(--dark-text-color)",
  bg: "var(--dark-content-area-background)",
  elementBG: "var(--dark-header-background)",
  // inputBG: "var(--dark-header-background)",
};
const lightTheme = {
  color: "var(--light-text-color)",
  bg: "var(--light-content-area-background)",
  elementBG: "var(--light-header-background)",
  inputColor: "hsl(0, 0%, 52%)",
};

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [region, setRegion] = useState<string>("");
  const [country, setCountry] = useState<{} | null>(null);
  const [query, setQuery] = useState<string>("");
  const toggleTheme = () =>
    setTheme((state) => (state === "dark" ? "light" : "dark"));

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppWrapper>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Main>
          {!country ? (
            <>
              <SearchForm
                query={query}
                setQuery={setQuery}
                setRegion={setRegion}
              />
              <CountryList
                country={query}
                region={region}
                setCountry={setCountry}
              />
            </>
          ) : (
            <DetailedView country={country} setCountry={setCountry} />
          )}
        </Main>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
