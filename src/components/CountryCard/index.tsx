import styled from "styled-components";

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

  & > div:nth-child(1) {
    background: ${(props) => `url(${props.flag}) no-repeat center`};
    background-size: cover;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

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

const Name = styled.h2``;

const Label = styled.span`
  font-weight: 500;
`;

const Info = styled.span``;

function CountryCard({ name, flag, region, population, capital }: IProps) {
  return (
    <Card flag={flag}>
      <div title={`National flag of ${name}`}></div>
      <div>
        <Name>{name}</Name>
        <p>
          <Label>Population</Label>: <Info>{population}</Info>
        </p>
        <p>
          <Label>Region</Label>: <Info>{region}</Info>
        </p>
        <p>
          <Label>Capital</Label>: <Info>{capital}</Info>
        </p>
      </div>
    </Card>
  );
}

export default CountryCard;
