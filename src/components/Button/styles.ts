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
        border-radius: 50px;
        color: white;
        transition: 0.5s ease;

        &:hover {
          color: var(--primary);
          background-color: white;
        }
      `;
    // case 'secondary':
    //   return css`
    //     background-color: var(--white);
    //     color: white;
    //   `
    // case 'onboarding':
    //   return css`
    //     background-color: var(--black-300);
    //     color: var(--white);
    //   `
    // case 'error':
    //   return css`
    //     background-color: var(--red);
    //     color: var(--white);
    //   `;
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
  width: ${(props) => (props.width ? props.width : "")};
  padding: ${(props) => (props.padding ? props.padding : "0.5rem")};
`;
