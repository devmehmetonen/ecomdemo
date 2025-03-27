import { useBasket } from "@/components/context/basket-provider";
import {Minus, Plus, Trash2 } from "lucide-react"
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BasketPage = () => {
  const { basket,deleteProduct,setProductCount } = useBasket();
  return (
    <div>
      <h2 className="font-bold mb-[16px]">Sepetiniz</h2>
      <div class="grid md:grid-cols-[67%_33%] gap-x-[24px]">
        <div className="max-h-[760px] overflow-auto">
          {basket.map((product) => (
            <Card className="w-full h-[240px] mb-[16px] flex flex-row items-center">
              <div className="w-[60%]">
                <CardHeader>
                  <CardTitle className="min-h-[16px]">
                    {product.title} x {product.count}
                  </CardTitle>
                  <CardDescription className="mt-7 flex items-center">
                    <img className="h-[150px]" src={product.image}></img>
                  </CardDescription>
                </CardHeader>
                <CardContent></CardContent>
              </div>
              <div className="">
                <CardFooter className="flex justify-between items-end">
                  <span onClick={()=>setProductCount(product.id,product.count+1)} className="font-bold mr-[8px] cursor-pointer">
                    <Plus />
                  </span>
                  <span className="font-bold mr-[8px]">
                   {product.count} Adet
                  </span>
                  <span onClick={()=>{
                    if(product.count == 1){
                      deleteProduct(product.id)
                    }else{
                      setProductCount(product.id,product.count-1)}} 
                    }
                   className="font-bold mr-[16px] cursor-pointer">
                  <Minus />
                  </span>
                  <span className="font-bold">
                    {product.price * product.count} ${" "} 
                  </span>
                  <span onClick={()=>deleteProduct(product.id)} className="ml-[16px] cursor-pointer"><Trash2 /></span>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
        <div>
          <Card className="w-full h-[240px] mb-[16px]">
            <CardHeader>
              <CardTitle className="min-h-[16px]">Sipariş Özeti</CardTitle>
              <CardDescription className="mt-2 flex flex-col">
                <div className="flex justify-between">
                  <span className="text-[16px] mb-[4px] font-semibold">
                    Toplam:
                  </span>
                  <span>
                    {(basket.reduce((sum, li) => sum + li.price * li.count, 0)).toFixed(2)} $
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[16px] mb-[4px] font-semibold">
                    Kdv:
                  </span>
                  <span>
                    {(basket.reduce((sum, li) => sum + li.price * li.count, 0) *
                      0.2).toFixed(2)}{" "}
                    $
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[16px] mb-[4px] font-semibold">
                    Toplam KDV Dahil:
                  </span>
                  <span>
                    {(basket.reduce((sum, li) => sum + li.price * li.count, 0) *
                      1.2).toFixed(2)}{" "}
                    $
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[16px] mb-[4px] font-semibold">
                    Kargo:
                  </span>
                  <span className="font-semibold">Bedava</span>
                </div>
              </CardDescription>
            </CardHeader>

            <CardFooter className="flex justify-end items-end">
              <Button className="cursor-pointer">Satın Al</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
