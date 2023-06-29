import { styled } from "styled-components";

export const Container = styled.div`
  background: #fbfbfd;
  padding: 2rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
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
    border-radius: 80px;
    z-index: 3;
    left: -90px !important;
    transform: rotate(-43deg) !important;
    margin-top: 400px !important;
    width: 600px !important;
    border-radius: 80px !important;
  }
`;
export const Content = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  }
  .lowerContent {
    display: flex;
    align-items: center;
    span {
      border: none;
      font-size: 12px;
    }
    span:first-of-type {
      padding: 0;
      padding-right: 5px;
      border-right: 2px solid grey;
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
