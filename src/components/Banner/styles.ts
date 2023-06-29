import { styled } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
  background: #f9fcff;
  h1 {
    background-image: linear-gradient(to right, #2c84fb, #1f76f0) !important;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    padding: 0 2rem;
    padding-bottom: 1.3rem;
    border-bottom: 2px solid #d3d3d3;
    .assetHeader {
      margin-left: -40px;
      margin-bottom: 25px;
    }
  }
  h2 {
    margin-top: 1rem;
  }
  .subtitle {
    padding: 1rem;
    font-size: 13.5px;
  }
`;

export const Tag = styled.span`
  color: var(--primary);
  border: 3px solid var(--primary);
  padding: 0.5rem;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  border-top-right-radius: 80px;
  border-top-left-radius: 80px;
  border-bottom-right-radius: 80px;
  border-bottom-left-radius: 10px;
`;
