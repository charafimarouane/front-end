import CartContextProvider from "@/components/CartContext"
import  FavContextProvider  from "@/components/FavContext"
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
  
      <CartContextProvider>
        <FavContextProvider>
          <Component {...pageProps} />
        </FavContextProvider>
      </CartContextProvider>
      
    </>
  )
}
