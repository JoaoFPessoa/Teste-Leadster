import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-top: 1px solid var(--border-color);
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
  a {
    color: var(--secondary);
    cursor: pointer;
  }
`;
