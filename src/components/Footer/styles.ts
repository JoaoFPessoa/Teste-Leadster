import { styled } from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  header {
    display: flex;
    flex-direction: column;
    span {
      font-size: 14px;
      padding: 0.5rem;
      font-weight: 400;
    }
  }
`;

export const ColumnsContainer = styled.div`
  padding: 2rem 15rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
