import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
`;
export const ButtonsContainer = styled.div`
  button {
    margin-right: 8px;
  }
`;

export const OrdinationContainer = styled.div`
  display: flex;
  align-items: center;
  h3 {
    font-size: 16px;
    margin-right: 8px;
  }
  select {
    border-radius: 8px;
    background: white;
    padding: 4px;
  }
`;
