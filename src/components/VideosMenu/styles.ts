import { styled } from "styled-components";

export const Container = styled.div`
  padding: 4rem 20rem;
`;

export const CardWrapper = styled.div`
  padding: 2rem 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const PaginationContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  h3 {
    margin-bottom: 3px;
  }
  button {
    font-size: 22px;
    padding: 8px 14px;
    font-weight: 500;
    background: none;
    border: none;
    color: var(--text);
    border: 1px solid white;
    border-radius: 8px;
    cursor: pointer;
    &:hover,
    &:focus {
      transition: 0.3s;
      border: 1px solid var(--primary);
      color: var(--primary);
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }
`;
