import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const scaleIn = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);

    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;
const scaleOut = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0);

    }
`;

type OverlayProps = {
  isClosing?: boolean;
};

export const Overlay = styled.div<OverlayProps>`
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s;

  ${({ isClosing }) =>
    isClosing &&
    css`
      animation: ${fadeOut} 0.2s forwards;
    `}
`;
export const Container = styled.div<OverlayProps>`
  background: #fff;
  border-radius: 4px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  animation: ${scaleIn} 0.2s;
  @media (max-width: 481px) {
    padding: 0;
    h1 {
      font-size: 15px !important;
      padding-top: 1rem;
    }
  }

  h1 {
    span {
      color: var(--primary);
    }
  }

  ${({ isClosing }) =>
    isClosing &&
    css`
      animation: ${scaleOut} 0.2s forwards;
    `};
  > h1 {
    font-size: 22px;
  }
  .modal-body {
    margin-top: 32px;
  }
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  h4 {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border-color);
  }
  p {
    max-width: 400px;
    font-weight: 500;
    padding: 1rem 0;
  }
`;

type ButtonProps = {
  variant: "green" | "blue" | "yellow";
};

export const FooterButtonsContainer = styled.div`
  padding-top: 0.5rem;
`;
export const ModalButton = styled.button<ButtonProps>`
  padding: 0.5rem 0.8rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: ${({ variant }) =>
    variant === "blue"
      ? "#7dd3fc"
      : variant === "green"
      ? "#a7f3d0"
      : "#fef3c7"};
  color: ${({ variant }) =>
    variant === "blue"
      ? "var(--primary)"
      : variant === "green"
      ? "#047857"
      : "#854d0e"};
  margin-right: 8px;
`;
