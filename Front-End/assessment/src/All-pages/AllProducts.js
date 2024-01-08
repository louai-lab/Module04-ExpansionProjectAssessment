import React, { useState } from "react";
import "./AllProducts.css";
import { Link } from "react-router-dom";

function AllProducts() {
  const initialProducts = [
    {
      id: 1,
      title: "Product 1 Title",
      description: "Product 1 Description goes here.",
      category: "Product 1 Category",
      price: "$50.00",
      supplier: "Product 1 Supplier",
    },
    {
      id: 2,
      title: "Product 2 Title",
      description: "Product 2 Description goes here.",
      category: "Product 2 Category",
      price: "$75.00",
      supplier: "Product 2 Supplier",
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  return (
    <div>
      <h1>All Products</h1>
      <section className="test">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div key={product.id} className="single">
              <h1>Title: {product.title}</h1>
              <h1>Description: {product.description}</h1>
              <h1>Category: {product.category}</h1>
              <h1>Price: {product.price}</h1>
              <h1>Supplier: {product.supplier}</h1>
              <hr />
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default AllProducts;
