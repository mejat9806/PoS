import { SortType } from "./OrderTableOperation";

type selectPropTypes = {
  options: SortType[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
};

function Select({ options, onChange, value }: selectPropTypes) {
  return (
    <select value={value} onChange={onChange} className="p-3">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
