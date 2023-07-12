import { createContext, useEffect, useState } from "react";

export const FavContext = createContext({})

export default function FavContextProvider({children}){
    const ls = typeof window !== 'undefined'? window.localStorage : null 
    const [favProducts , setFavProducts] = useState([])

    useEffect(()=>{
        if (favProducts?.length > 0) {
            ls.setItem('favoris', JSON.stringify(favProducts))   
        }
    },[favProducts])

    useEffect(()=>{
        if (ls && ls.getItem('favoris')) {
            setFavProducts(JSON.parse(localStorage.getItem('favoris')))
        }
    },[])

    function addToFavoris(productId){
        setFavProducts(prev => [...prev, productId])
    }

    function removeFavoris(productId) {
        setFavProducts(prev => {
          const pos = prev.indexOf(productId);
          if (pos !== -1) {
            return prev.filter((value,index) => index !== pos);
          }
          return prev;
        });
      }
      function clearFavoris() {
        setFavProducts([]);
      }

    return(
        <FavContext.Provider value={{favProducts, setFavProducts, addToFavoris, removeFavoris, clearFavoris}}>
            {children}
        </FavContext.Provider>
    )
}