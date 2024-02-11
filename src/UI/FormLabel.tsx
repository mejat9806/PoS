import React from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type FormLabel = {
  label: string;
  children: React.ReactElement<HTMLInputElement>;
  error?:
    | string
    | FieldError
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
};
function FormLabel({ label, children, error }: FormLabel) {
  return (
    <div className="grid grid-cols-2 mb-10 mt-3 items-center content-end  relative text-start gap-5">
      {label && (
        <label
          htmlFor={children.props.id}
          className="text-lg font-roboto font-bold capitalize"
        >
          {label}
        </label>
      )}
      {children}
      {error && (
        <span className="absolute right-0 -bottom-6 text-red-500 font-extrabold">{`${error}`}</span>
      )}
    </div>
  );
}

export default FormLabel;
