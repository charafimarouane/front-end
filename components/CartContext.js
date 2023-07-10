import axios from "axios";
import { createContext,useEffect,useState } from "react";

export const CartContext = createContext({})

export default function CartContextProvider({children}){
    //chack if we are on client side
    const ls = typeof window !== 'undefined' ? window.localStorage : null ;
    const [cartProducts, setCartProducts] = useState([])
    // const [products, setProducts] = useState([])
    //
    useEffect(()=>{
        if (cartProducts?.length > 0) {
            ls.setItem('cart', JSON.stringify(cartProducts) )
            
        }
    },[cartProducts])

    useEffect(()=>{
        if (ls && ls.getItem('cart')) {
            setCartProducts(JSON.parse(localStorage.getItem('cart')))
        }
    },[])
    
    function addProduct(productId, size, color, quantity){
        const newProduct = {
            productId,
            size,
            color,
            quantity}
        setCartProducts(prev => [...prev, newProduct] )
    }   
    
    function removeProduct(productId, size, color, quantity) {
        setCartProducts(prev => {
          const updatedCart = [...prev];
          const index = updatedCart.findIndex(item => item.productId === productId && item.size === size && item.color === color && item.quantity === quantity);
          if (index !== -1) {
            updatedCart.splice(index, 1);
          }
          return updatedCart;
        });
      }
    
    function clearCart(){
        if (ls) {
            ls.removeItem('cart');
          }
    }
    
    return(
        <CartContext.Provider value={{cartProducts,setCartProducts,addProduct,removeProduct,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}