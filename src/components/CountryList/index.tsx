import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { useCountries } from "../../hooks/useCountries";
import CountryCard from "../CountryCard";

interface IProps {
  country: string;
  region: string;
  setCountry: Dispatch<SetStateAction<any>>;
}

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 0.15rem;
  list-style: none;

  @media screen and (min-width: 600px) {
    justify-content: space-between;
  }

  & > li {
    border-radius: 5px;
  }
`;

function CountryList(props: IProps) {
  const { setCountry, ...otherProps } = props;
  const { isError, isLoading, countries } = useCountries(otherProps);

  return (
    <List>
      {isLoading ? (
        <p>Loading</p>
      ) : isError ? (
        <p>Something went wrong</p>
      ) : (
        countries.map((country) => (
          <li
            key={`${country.name.common}-${Math.round(Math.random() * 1e5)}`}
            onClick={() => setCountry(country)}
          >
            <CountryCard
              name={country.name.common}
              flag={country.flags.svg}
              region={country.region}
              population={country.population}
              capital={country.capital}
            />
          </li>
        ))
      )}
    </List>
  );
}

export default CountryList;
