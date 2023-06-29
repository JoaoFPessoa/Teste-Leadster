import { styled } from "styled-components";

export const Container = styled.article`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 20px;
  /* width: calc(33.99%); */
  width: 32%;
  position: relative;
  height: 100%;
  @media (max-width: 768px) {
    width: 48%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }

  h4 {
    padding: 1rem 2.5rem;
  }
  .thumbnail {
    width: 100%;
  }

  &:hover {
    transform: scale(1.04);
    color: var(--primary);
    transition: 0.2s;
    .thumbnailContent {
      background: var(--primary);
      background-size: cover;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
    }
    .thumbnail {
      opacity: 0.6;
    }
  }

  button {
    position: absolute;
    width: 100%;
    height: 100%;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    z-index: 2;
    cursor: pointer;

    img {
      width: 80px;
      height: 80px;
    }
  }
`;
