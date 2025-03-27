import React from "react";
import { ModeToggle } from "../menu/menu";
import { ShoppingBasket } from "lucide-react";
import { useBasket } from "../context/basket-provider";
import { Link } from "react-router";

const Layout = ({ children }) => {
  const { basket } = useBasket();

  return (
    <div>
      <div className="w-full h-[60px] bg-slate-400 dark:bg-slate-900 flex justify-between items-center p-4 fixed shadow-lg">
        <Link to='/'>
        <h2 className="font-semibold">Fake Store</h2>
        </Link>
        <div className="flex items-center">
          <div className="mr-[16px] relative cursor-pointer">
            {basket.length > 0 && (
              <div className="top-[-5px] right-[-5px] absolute bg-red-700 w-[16px] h-[16px] rounded-full flex items-center justify-center font-semibold text-white text-xs">
                {basket.length}
              </div>
            )}
            <Link to="basket">
              {" "}
              <ShoppingBasket />
            </Link>
          </div>

          <ModeToggle />
        </div>
      </div>
      <div className="max-w-7xl m-auto pt-[100px] px-[32px]">{children}</div>
    </div>
  );
};

export default Layout;
