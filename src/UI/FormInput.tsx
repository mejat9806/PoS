/* eslint-disable react-refresh/only-export-components */
import { forwardRef } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type FormInputTypes = {
  type: string;
  id: string;
  inputMode?: "numeric" | "text";
  defaultValue?: number;
  disabled?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  min?: number | string;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<never>>; // Include the error prop
};

const FormInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  FormInputTypes
> = (
  { type, id, defaultValue, disabled, min, onBlur, error, inputMode },
  ref,
) => {
  return (
    <input
      ref={ref}
      inputMode={inputMode}
      className={`disabled:bg-slate-300 disabled:cursor-not-allowed bg-slate-100 rounded-md focus:outline-none focus:ring focus:ring-yellow-300 p-2 placeholder-shown:capitalize ${
        error !== undefined ? "focus:ring-red-600" : ""
      }`}
      type={type}
      id={id}
      defaultValue={defaultValue}
      disabled={disabled}
      min={min}
      onBlur={onBlur}
    />
  );
};

export default forwardRef(FormInput);
//add error boundary
