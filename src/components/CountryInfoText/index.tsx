import styled from "styled-components";

const Label = styled.span`
  font-weight: 500;
`;

interface IProps {
  label: string;
  value: string | number;
}

function CountryInfoText({ label, value }: IProps) {
  return (
    <p>
      <Label>{label}</Label>: {value}
    </p>
  );
}

export default CountryInfoText;
