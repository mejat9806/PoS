import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Spinner from "./UI/Spinner";
import AppLayout from "./page/AppLayout";
import MainLayOut from "./page/MainLayOut";
const HomePage = lazy(() => import("./page/HomePage"));
const BBQ = lazy(() => import("./page/BBQ"));
const Burger = lazy(() => import("./page/Burger"));
const Drink = lazy(() => import("./page/Drink"));
const Pizza = lazy(() => import("./page/Pizza"));
const SpecialMenu = lazy(() => import("./page/SpecialMenu"));
const Side = lazy(() => import("./page/Side"));
const Setting = lazy(() => import("./page/Side"));
const PageNotFound = lazy(() => import("./page/PageNotFound"));
const Order = lazy(() => import("./page/Order"));
const CreateOrder = lazy(() => import("./page/Order"));
const OrderDetail = lazy(() => import("./page/OrderDetail"));

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
