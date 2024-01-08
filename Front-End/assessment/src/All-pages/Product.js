import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    const fetchProductData = async () => {
      
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const simulatedProductData = {
        id: parseInt(productId, 10),
        title: `${productId} `,
        description: `${productId}`,
        category: `${productId}`,
        price: `$${(50 + parseInt(productId, 10) * 10).toFixed(2)}`,
        supplier: ` ${productId}`,
      };

      setProduct(simulatedProductData);
    };

    fetchProductData();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <h1>Title: {product.title}</h1>
      <h1>Description: {product.description}</h1>
      <h1>Category: {product.category}</h1>
      <h1>Price: {product.price}</h1>
      <h1>Supplier: {product.supplier}</h1>
    </div>
  );
}

export default Product;
