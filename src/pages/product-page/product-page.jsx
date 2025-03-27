import Productcard from "@/components/productCard/productcard";
import { getProducts } from "@/services/productServices";
import React, { useEffect, useState } from "react";



const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const getProductsAsync = async () => {
    try {
      const response = await getProducts();
      if (response.status == 200) {
        setProducts([...response.data]);
      } else {
      }
    } catch (err) {}
  };

  useEffect(() => {
    getProductsAsync();
  }, []);



  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p,i) => (
        <Productcard key={i} product={p}/>
      ))}
    </div>
  );
};

export default ProductPage;
