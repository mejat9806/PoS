import Cart from "../UI/Cart";
import Order from "../UI/Order";

function HomePage() {
  return (
    <div className="grid  grid-cols-2">
      <Order />
      <Cart />
    </div>
  );
}

export default HomePage;
