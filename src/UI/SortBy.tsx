import { useSearchParams } from "react-router-dom";
import { SortType } from "./OrderTableOperation";
import Select from "./Select";
type optionsType = {
  options: SortType[];
};
function SortBy({ options }: optionsType) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBY = searchParams.get("sortBy") || "";
  function handlechange(e: React.ChangeEvent<HTMLSelectElement>) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return <Select options={options} onChange={handlechange} value={sortBY} />;
}

export default SortBy;
