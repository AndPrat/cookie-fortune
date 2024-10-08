import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  actionOnClick?: () => void;
}

const Button = ({
  className,
  actionOnClick,
  disabled,
  children,
  ...props
}: Partial<ButtonProps>): React.ReactElement => {
  return (
    <button
      className={className}
      onClick={actionOnClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
