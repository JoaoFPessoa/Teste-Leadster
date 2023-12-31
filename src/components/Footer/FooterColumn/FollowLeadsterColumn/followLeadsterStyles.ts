import { styled } from "styled-components";

export const Container = styled.div`
  a {
    cursor: pointer;
    margin: 5px;
    height: 35px;
  }
  h3 {
    padding: 2rem 0;
  }
  img {
    background: #f2f2f2;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 8px;
    margin-bottom: 1rem;
    padding: 5px;

    &:hover {
      transition: 0.5s;
      background: var(--secondary);
    }
  }
  span {
    font-size: 14px;
    display: block;
    margin-bottom: 8px;
  }
  @media (max-width: 481px) {
    h3 {
      font-size: 14px;
    }
    span {
      font-size: 12px;
    }
  }
`;
export const ImagesContainer = styled.div`
  display: flex;
  @media (max-width: 481px) {
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 14px;
    }
    span {
      font-size: 12px;
    }
  }
`;
