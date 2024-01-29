import toast from "react-hot-toast";
import Spinner from "../UI/Spinner";
import { ProductData } from "./BBQ";
import Error from "../UI/Error";
import { useData } from "../data/useData";
import MenuItemCard from "../UI/MenuItemCard";

function Side() {
  const { error, isLoading, productData } = useData();
  if (isLoading) {
    return <Spinner />;
  }
  const sideData: ProductData[] = (productData || []).filter(
    (product) => product.category === "sides",
  );
  console.log(sideData);

  if (error) {
    toast.error("Something when wrong");
    return <Error>Fetching Pizza data fail </Error>;
  }
  return (
    <div>
      <h1 className="md:text-9xl text-5xl font-roboto font-extrabold uppercase mb-6  ">
        Sides
      </h1>
      <div className="flex justify-center ">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 w-fit gap-9  flex flex-col">
          {sideData.map((side) => (
            <MenuItemCard item={side} key={side.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Side;
