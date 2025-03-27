import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import SpinnerWithText from "./components/ui/spinner-with-text";

const ProductPage = lazy(() => import("./pages/product-page/product-page"));
const BasketPage = lazy(() => import("./pages/basket-page/basket-page"));

const Router = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <Suspense fallback={<SpinnerWithText />}>
            <ProductPage />
          </Suspense>
        }
      />
      <Route
        path="/basket"
        element={
          <Suspense fallback={<SpinnerWithText />}>
            <BasketPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
