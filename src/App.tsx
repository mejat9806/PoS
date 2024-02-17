import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./UI/Spinner";
import HomePage from "./page/HomePage";
import AppLayout from "./page/AppLayout";
import BBQ from "./page/BBQ";
import Burger from "./page/Burger";
import Drink from "./page/Drink";
import Pizza from "./page/Pizza";
import Side from "./page/Side";
import PageNotFound from "./page/PageNotFound";
import Order from "./page/Order";
import OrderDetail from "./page/OrderDetail";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import SpecialMenu from "./page/SpecialMenu";
import MainLayOut from "./page/MainLayOut";
import Setting from "./page/Setting";
import CreateOrder from "./page/CreateOrder";

function App() {
  return (
    <BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route element={<MainLayOut />}>
              <Route path="bbq" element={<BBQ />} />
              <Route path="burger" element={<Burger />} />
              <Route path="drink" element={<Drink />} />
              <Route path="pizza" element={<Pizza />} />
              <Route path="special" element={<SpecialMenu />} />
              <Route path="side" element={<Side />} />
            </Route>
            <Route path="setting" element={<Setting />} />
            <Route path="order" element={<Order />} />

            <Route path="createorder" element={<CreateOrder />} />
            <Route path="order/:id" element={<OrderDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
            opacity: "100",
            border: "1px solid black",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
