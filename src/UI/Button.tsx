import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style: string;
  disabled?: boolean;
  onchange?: () => void;
};

type ButtonStyles = {
  [key: string]: string;
};

const normalButton =
  "bg-yellow-400 rounded-md text-white px-2 py-2 md:px-6 md:py-3 font-roboto font-bold whitespace-nowrap uppercase";

const buttonStyles: ButtonStyles = {
  addCart: `bg-yellow-400 hover:bg-black hover:text-yellow-400 ${normalButton}`,
  circle: `rounded-3xl bg-teal-300 px-4 py-2 disabled:bg-red-700/40 disabled:cursor-not-allowed font-extrabold text-xl`,
  normal: normalButton,
  error: `${normalButton} text-4xl`,
};

function Button({ children, onClick, style, disabled, onchange }: ButtonProps) {
  const buttonStyle = buttonStyles[style] || buttonStyles.normal;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onchange) {
      onchange();
    }
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`${buttonStyle}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
