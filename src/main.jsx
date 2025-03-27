import { ThemeProvider } from "@/components/context/theme-provider";
import { BasketProvider } from "./components/context/basket-provider";
import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import "./index.css";
import Layout from "./components/layout/layout";
import { BrowserRouter } from "react-router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BasketProvider>

      <Layout>
        <Router />
      </Layout>
      
    </BasketProvider>
  </ThemeProvider>
  </BrowserRouter>
  
);
