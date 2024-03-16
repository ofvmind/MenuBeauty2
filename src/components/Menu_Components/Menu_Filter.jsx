import { useMemo } from "react";

export const useMenuFilter = (products, query) => {
  const searchedProducts = useMemo(() => {
    return products.filter(product => {
      const regex = new RegExp(query, 'gi');

      return product.title.match(regex);
    });
  }, [products, query]);

  return searchedProducts;
};