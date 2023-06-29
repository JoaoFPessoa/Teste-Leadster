import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;

  /* @media (min-width: 865px) and (max-width: 1200px) { */
  @media (max-width: 1200px) {
    flex-direction: column;
    div:first-of-type {
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 480px) {
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  button {
    margin-right: 8px;
    font-size: 15px;
    @media (max-width: 480px) {
      width: 120px;
    }
  }
  @media (max-width: 865px) {
    align-items: center;
    justify-content: center;
  }
`;

export const OrdinationContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
  }
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
