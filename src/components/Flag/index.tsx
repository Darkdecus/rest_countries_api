import styled from "styled-components";

export default styled.div`
  background: ${(props: { flag: string }) =>
    `url(${props.flag}) no-repeat center`};
  background-size: cover;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;
