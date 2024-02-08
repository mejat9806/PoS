import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

type FormLabel = {
  label: string;
  children: ReactNode;
};
function FormLabel({ label, children }: FormLabel) {
  return (
    <div className="grid grid-cols-2 mb-3 items-center content-end">
      <label className="text-lg font-roboto font-bold"> {label}</label>

      {children}
    </div>
  );
}

export default FormLabel;
