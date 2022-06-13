import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface IProps {
  setRegion: Dispatch<SetStateAction<string>>;
}

const Wrapper = styled.select`
  position: relative;
  z-index: 0;
  background-color: inherit;
  color: ${(props) => props.theme.color};
  width: 100%;
  height: 3rem;
  padding: 1rem 0.15rem 1rem 2rem;
  border: transparent;
  border-radius: 5px;
  box-shadow: var(--box-shadow);

  @media screen and (min-width: 300px) {
    width: 50%;
    font-size: 0.8rem;
    justify-self: flex-start;
  }

  @media screen and (min-width: 600px) {
    width: 15%;
  }

  &::after {
    content: "^";
    position: absolute;
    top: 0;
    right: 0;
    color: inherit;
    background-color: inherit;
    z-index: 1;
  }
`;

const Option = styled.option`
  border: none;
  box-shadow: none;
  &:nth-of-type(1) {
    visibility: hidden;
  }
`;

function Filters(props: IProps) {
  return (
    <Wrapper
      name="region"
      id="region"
      onChange={(e) => props.setRegion(e.target.value)}
      defaultValue={"Filter by Region"}
    >
      <Option>Filter by Region</Option>
      <Option value={"Africa"}>Africa</Option>
      <Option value={"Americas"}>America</Option>
      <Option value={"Asia"}>Asia</Option>
      <Option value={"Europe"}>Europe</Option>
      <Option value={"Ocenia"}>Ocenia</Option>
    </Wrapper>
  );
}

export default Filters;
