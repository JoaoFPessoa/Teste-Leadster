import { css, styled } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "onboarding" | "error";

type ButtonWrapperProps = {
  variant: ButtonVariant;
  width?: string;
  padding?: string;
};
const getButtonVariant = (variant?: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return css`
        background-color: var(--primary);
        border: 1px solid var(--primary);
        color: white;
        &:hover {
          color: var(--primary);
          background-color: white;
        }
      `;
    case "secondary":
      return css`
        border: 1px solid var(--border-color);
        background-color: white;
        color: "";

        &:hover {
          color: var(--primary);
          border: 1px solid var(--primary);
        }
        &:focus {
          background: var(--primary);
          color: white;
        }
      `;
    default:
      return css`
        background-color: var(--primary);
        color: var(--black-100);
      `;
  }
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  ${(props) => getButtonVariant(props.variant)};
  cursor: pointer;
  border-radius: 50px;
  transition: 0.5s ease;
  width: ${(props) => (props.width ? props.width : "")};
  padding: ${(props) => (props.padding ? props.padding : "0.5rem")};
`;
