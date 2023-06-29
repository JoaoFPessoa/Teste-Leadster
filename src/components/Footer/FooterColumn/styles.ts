import { styled } from "styled-components";

export const Container = styled.div`
  h3 {
    padding: 2rem 0;
  }
  ul {
    list-style: none;
  }
  li {
    margin: 1rem 0;
    padding: 0.2rem;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
  }
  @media (max-width: 481px) {
    h3 {
      font-size: 14px;
    }
    li {
      font-size: 12px;
    }
  }
`;
