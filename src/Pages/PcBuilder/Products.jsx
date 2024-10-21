import { useContext, useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.Products));
  }, []);

  return (
    <div className="grow py-8 px-3">
      <h2 className="font-medium text-xl">Results</h2>
      <p className="text-sm">
        Check each product page for other buying options.
      </p>

      <div className="flex flex-col gap-2 mt-5">
        {products.map(product => <Product key={product.id} product={product}  />)}
      </div>
    </div>
  );
};

export default Products;
