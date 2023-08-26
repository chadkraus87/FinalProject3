import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  return (
    <ProductContext.Provider value={{ selectedProductId, setSelectedProductId }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
