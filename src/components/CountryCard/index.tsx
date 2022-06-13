import styled from "styled-components";
import CountryInfoText from "../CountryInfoText";
import CountryName from "../CountryName";
import Flag from "../Flag";

interface IProps {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
}

const Card = styled.article.attrs((props: { flag: string }) => ({
  flag: props.flag,
}))`
  display: grid;
  grid-template-rows: 50% 50%;
  row-gap: 15px;
  border-radius: 5px;
  height: 17.7rem;
  width: 15rem;
  box-shadow: var(--box-shadow);
  cursor: pointer;

  /* & > div:nth-child(1) {
    background: ${(props) => `url(${props.flag}) no-repeat center`};
    background-size: cover;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  } */

  & > div:nth-child(2) {
    padding: 0.5rem;
    & > h2 {
      margin: 0.5rem 0 0.75rem 0;
      font-size: 1.15rem;
    }

    & > p {
      margin: 0.25rem 0;
      font-size: 0.75rem;
    }
  }
`;

function CountryCard({ name, flag, region, population, capital }: IProps) {
  return (
    <Card flag={flag}>
      <Flag flag={flag} title={`National flag of ${name}`} />
      <div>
        <CountryName>{name}</CountryName>
        <CountryInfoText label="Population" value={population} />
        <CountryInfoText label="Region" value={region} />
        <CountryInfoText label="Capital" value={capital} />
      </div>
    </Card>
  );
}

export default CountryCard;
