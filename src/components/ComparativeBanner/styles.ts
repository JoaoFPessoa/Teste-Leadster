import { styled } from "styled-components";

export const Container = styled.div`
  background: #fbfbfd;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: hidden;
  img {
    width: 500px;
    height: 500px;
    z-index: 4;
  }

  ._home_shape {
    position: absolute;
    background-color: #f2f9ff !important;
    height: 900px;
    display: block;
    z-index: 3;
    left: -90px !important;
    transform: rotate(-43deg) !important;
    margin-top: 450px !important;
    width: 600px !important;
    border-radius: 80px !important;
    overflow: hidden;
  }
`;
export const Content = styled.div`
  position: relative;
  z-index: 8;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 481px) {
    padding: 0 1rem;
  }
  h2 {
    font-weight: 500;
  }
  span {
    text-align: left;
    padding: 1rem 0;
    border-bottom: 1.4px solid var(--border-color);
  }
`;

export const Rating = styled.div`
  padding: 1rem 0;

  img {
    height: 50px;
    width: 150px;
    margin-left: 1rem;
  }
  .upperContent {
    display: flex;
    margin-bottom: 8px;
  }
  .lowerContent {
    display: flex;
    align-items: center;

    border: none;
    font-size: 12px;
    span {
      padding: 0;
      padding-right: 5px;
    }
    span {
      border-bottom: none;
    }
    .noCardImage {
      width: 15px;
      height: 15px;
      margin: 0 5px;
    }
    .ratingImage {
      width: 80px;
      height: 15px;
      margin: 0 5px;
    }
  }
`;
