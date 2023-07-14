import { createContext, useEffect, useState } from "react";

export const FavContext = createContext({});

export function FavContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [favProducts, setFavProducts] = useState([]);

  useEffect(() => {
    if (favProducts?.length > 0) {
      ls?.setItem("favoris", JSON.stringify(favProducts));
    }else{
        ls?.removeItem("favoris")
    }
  }, [favProducts, ls]);

  useEffect(() => {
    if (ls && ls.getItem("favoris")) {
      setFavProducts(JSON.parse(ls.getItem("favoris")));
    }
  }, [ls]);

  function addProduct(productId) {
    setFavProducts((prev) => [...prev, productId]);
  }

  function removeProduct(productId) {
    setFavProducts((prev) => prev.filter((value) => value !== productId));
  }

  function clear() {
    setFavProducts([]);
    ls?.removeItem("favoris")
  }

  return (
    <FavContext.Provider
      value={{ favProducts, addProduct, removeProduct, clear }}
    >
      {children}
    </FavContext.Provider>
  );
}

