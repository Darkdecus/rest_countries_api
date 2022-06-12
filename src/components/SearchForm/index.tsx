import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

import Filters from "../Filters";

interface IProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  setRegion: Dispatch<SetStateAction<string>>;
}

const Search = styled.input`
  background-color: inherit;
  color: inherit;
  border-radius: 5px;
  border: transparent;
  height: 100%;
  padding: 0.25rem 0;

  &:outline {
    border: transparent;
  }
`;

const SearchIcon = styled.span`
  background-color: inherit;
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
  height: 100%;
`;

const SearchWrapper = styled.div`
  @media screen and (min-width: 300px) {
    padding: 1rem 0.5rem;
    margin: 1.5rem 0 1rem 0;
    display: grid;
    grid-template-columns: 1fr 5fr;
    width: 100%;
    height: 3.5rem;
    color: ${(props) => props.theme.inputColor || "inherit"};
    border-radius: 5px;
    box-shadow: var(--box-shadow);
  }

  @media screen and (min-width: 600px) {
    margin-right: auto;
    width: 30%;
  }
`;

const Form = styled.form`
  @media screen and (min-width: 300px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    color: ${(props) => props.theme.inputColor || "inherit"};
    border-radius: 5px;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`;

function SearchForm({ query, setQuery, setRegion }: IProps) {
  const formRef = useRef<HTMLFormElement>(null);
  // const [region, setRegion] = useState<string>("");
  // const [query, setQuery] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value.trimStart());

  return (
    <Form name="searchForm" id="searchForm" ref={formRef}>
      <SearchWrapper>
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
        <Search
          value={query}
          name="search"
          id="search"
          placeholder="Search for a country..."
          onChange={onChange}
        />
      </SearchWrapper>
      <Filters setRegion={setRegion} />
    </Form>
  );
}

export default SearchForm;
