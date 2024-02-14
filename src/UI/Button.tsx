import { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: string;
  disabled?: boolean;
  onchange?: () => void;
  type?: "submit" | "reset" | "button";
  icon?: React.ReactNode;
  sold_out?: boolean;
  active: boolean;
  kindOfButton?: "filter" | "sorting";
};

type ButtonStyles = {
  [key: string]: string;
};

const normalButton =
  "rounded-md px-2 py-2 md:px-6 md:py-3 font-roboto font-bold whitespace-nowrap uppercase ";

const buttonStyles: ButtonStyles = {
  addCart: `bg-yellow-300 hover:bg-black hover:text-yellow-400 ${normalButton} transition-all duration-150 md:w-[100]`,
  soldOut: `bg-red-300  ${normalButton} transition-all duration-150 md:w-[100]`,
  dropMenuBtn: `bg-slate-50  hover:text-yellow-400 font-roboto font-bold transition-all duration-150  border-2 ${normalButton} hover:bg-black w-full `,
  addCartMain: `bg-green-300 text-black hover:bg-green-600 hover:text-yellow-400 ${normalButton} transition-all duration-150 w-full mx-5  disabled:bg-gray-700/40 disabled:cursor-not-allowed disabled:hover:text-gray-800`,
  circle: `rounded-3xl bg-teal-300 px-4 py-2 disabled:bg-gray-700/40 disabled:cursor-not-allowed    font-extrabold text-xl `,
  delete: `rounded-full bg-red-500 px-4  disabled:bg-gray-700/40 disabled:cursor-not-allowed font-extrabold text-sm h-10`,
  deleteItemButton: ` rounded-md bg-red-300 px-4  ${normalButton} hover:text-red-600 hover:bg-black`,
  normal: `${normalButton} bg-yellow-300 rounded-md hover:bg-black hover:text-yellow-300 transition-all duration-150`,
  threeDots: "px-0  py-4 rounded-full hover:bg-gray-100",
  error: `${normalButton} text-4xl`,
  filterTab: `text-md px-2 py-1  border-2  border-gray-300 rounded-md bg-white font-roboto font-bold whitespace-nowrap uppercase hover:bg-yellow-300 hover:border-black hover:text-black h-fit `,
};

function Button({
  children,
  onClick,
  style,
  disabled,
  onchange,
  type,
  sold_out,
  active,
  kindOfButton,
}: ButtonProps) {
  const buttonStyle = style
    ? buttonStyles[style] || buttonStyles.normal
    : buttonStyles.normal;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onchange) {
      onchange();
    }
    if (onClick) {
      onClick(e);
    }
  };
  const additionalClasses = "bg-yellow-300 text-black";

  if (kindOfButton) {
    return (
      <button
        type={type}
        onClick={handleClick}
        className={`${buttonStyle} ${active ? additionalClasses : "text-gray-600"}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${buttonStyle} ${
        sold_out ? "bg-red disabled:cursor-not-allowed" : ""
      } active:${active ? "bg-yellow-300 text-black" : ""} disabled:${disabled ? "bg-slate-600" : ""} `}
      disabled={disabled || sold_out}
    >
      {children}
    </button>
  );
}

export default Button;
