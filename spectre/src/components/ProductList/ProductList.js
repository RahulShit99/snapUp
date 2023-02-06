import React, { useState } from 'react';
import "./ProductList.scss";
import Product from "../Product/Product";

const ProductList = ({ products }) => {
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSortClick = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  let sortedProducts = [...products];
  sortedProducts.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <div className='product-lists grid bg-whitesmoke my-3'>
      <div className="sort-container">
        <button onClick={handleSortClick}>
          Sort by price ({sortOrder === 'asc' ? 'ascending' : 'descending'})
        </button>
      </div>
      {
        sortedProducts.map(product => {
          let discountedPrice = (product.price) - (product.price * (product.discountPercentage / 100));

          return (
            <Product key={product.id} product={{ ...product, discountedPrice }} />
          )
        })
      }
    </div>
  )
};

export default ProductList;
