import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import CountryInfoText from "../CountryInfoText";
import Flag from "../Flag";
import { BsArrowLeft } from "react-icons/bs";

interface IProps {
  country: {
    [key: string]: any;
  };
  setCountry: Dispatch<SetStateAction<null>>;
}

const OuterWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  gap: 50px;
`;

const InnerWrapper = styled.section`
  @media screen and (min-width: 300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    & > div:nth-child(1) {
      height: 15rem;
      width: 100%;
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      & > h2 {
        width: 100%;
        text-align: left;
      }

      & > div {
        width: 100%;
        display: flex;
        gap: 50px;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }
  }
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 50% 45%;
    column-gap: 5%;
    height: 25rem;
    & > div:nth-child(1) {
      height: 100%;
      width: 100%;
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

const ReturnBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: inherit;
  color: inherit;
  box-shadow: 0px 0px 5px 0px hsl(0deg 0% 56%);
  width: 100px;
  height: 35px;
  font-size: 1.5rem;
  margin: 2rem 0;
`;

const getLanguages = (languages: { [key: string]: string }): string =>
  Object.values(languages).join(", ");

const getCurrencies = (currencies: {
  [key: string]: { name: string };
}): string => {
  let list = [];
  for (const key in currencies) {
    if (Object.prototype.hasOwnProperty.call(currencies, key)) {
      list.push(currencies[key].name);
    }
  }
  return list.join(", ");
};

function DetailedView({ country, setCountry }: IProps) {
  return (
    <OuterWrapper>
      <ReturnBtn type="button" onClick={() => setCountry(null)}>
        <BsArrowLeft />
      </ReturnBtn>
      <InnerWrapper>
        <Flag
          flag={country?.flags?.svg}
          title={`National flag of ${country?.name?.common}`}
        />
        <div>
          <h2>{country?.name?.common}</h2>
          <div>
            <div>
              <CountryInfoText
                label="Native Name"
                value={
                  country?.name?.nativeName[
                    Object.keys(country?.name?.nativeName)[0]
                  ].official
                }
              />
              <CountryInfoText label="Population" value={country?.population} />
              <CountryInfoText label="Region" value={country?.region} />
              <CountryInfoText label="Sub Region" value={country?.subregion} />
              <CountryInfoText label="Capital" value={country?.capital} />
            </div>
            <div>
              <CountryInfoText
                label="Top Level Domains"
                value={country?.capital}
              />
              <CountryInfoText
                label="Currencies"
                value={getCurrencies(country?.currencies)}
              />
              <CountryInfoText
                label="Languages"
                value={getLanguages(country?.languages)}
              />
            </div>
          </div>
        </div>
      </InnerWrapper>
    </OuterWrapper>
  );
}

export default DetailedView;
