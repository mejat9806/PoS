import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  style: string;
};
type ButtonStyles = {
  [key: string]: string;
};
const normalButton = "bg-yellow-400";
const buttonStyles: ButtonStyles = {
  addCart: "bg-yellow-400 hover:bg-black hover:text-yellow-400 ",
  normal: normalButton,
  error: `${normalButton} text-4xl`,
};
function Button({ children, onClick, style }: ButtonProps) {
  const buttonStyle = buttonStyles[style] || buttonStyles.normal;

  return (
    <button
      onClick={onClick}
      className={`${buttonStyle}  rounded-md text-white px-2 py-2 md:px-6 md:py-3 font-roboto font-bold whitespace-nowrap uppercase`}
    >
      {children}
    </button>
  );
}

export default Button;
