import { ReactNode } from "react";
import { ButtonVariant, ButtonWrapper } from "./styles";

type ButtonProps = {
  title: string;
  variant?: ButtonVariant;
  children?: ReactNode;
  width?: string;
  padding?: string;
};

export default function Button({
  title,
  variant = "primary",
  children,
  width,
  padding,
}: ButtonProps) {
  return (
    <ButtonWrapper
      title={title}
      variant={variant}
      width={width}
      padding={padding}
    >
      {children ?? title}
    </ButtonWrapper>
  );
}
