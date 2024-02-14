import { useSearchParams } from "react-router-dom";
import Button from "./Button";

type optionsType = {
  value: string;
  label: string;
};

type FilterPropsType = {
  filterField: string;
  options: optionsType[];
};

function Filter({ filterField, options }: FilterPropsType) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;
  function handleClick(value: string) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", "1");
    setSearchParams(searchParams);
  }
  return (
    <div>
      {options.map((options) => (
        <Button
          style="filterTab"
          kindOfButton="filter"
          onClick={() => handleClick(options.value)}
          active={options.value === currentFilter}
          disabled={options.value === currentFilter}
        >
          {options.label}
        </Button>
      ))}
    </div>
  );
}

export default Filter;
