import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { useBasket } from '../context/basket-provider'


const Productcard = ({product}) => {
  const { setBasket } = useBasket()


  return (
    <Card className="w-full flex flex-col justify-between">
    <CardHeader>
      <CardTitle className="min-h-[64px]">{product.title}</CardTitle>
      <CardDescription  className="mt-7 flex items-center min-h-[530px]"><img src={product.image}></img></CardDescription>
    </CardHeader>
    <CardContent>
  
    </CardContent>
    <CardFooter className="flex justify-between items-end">
      <span className='font-bold'>{product.price} $ </span>
      <Button className="cursor-pointer" onClick={()=>setBasket(product)}>Sepete Ekle</Button>
    </CardFooter>
  </Card>
  )
}

export default Productcard;