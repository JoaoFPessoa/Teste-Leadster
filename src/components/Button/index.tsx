import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonVariant, ButtonWrapper } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: ButtonVariant;
  children?: ReactNode;
  width?: string;
  padding?: string;
}

export default function Button({
  title,
  variant = "primary",
  children,
  width,
  padding,
  onClick,
}: ButtonProps) {
  return (
    <ButtonWrapper
      onClick={onClick}
      title={title}
      variant={variant}
      width={width}
      padding={padding}
    >
      {children ?? title}
    </ButtonWrapper>
  );
}
