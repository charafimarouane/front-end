
import CardProduct from "./Cardproduct";

export default function Bestsellers({product}){
     
    return(
        <>
            <h1 className="md:text-[42px] text-[32px] font-medium text-center md:mb-12 mb-4">Best Sellers</h1>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 mb-[150px] items-center">
                
                    <CardProduct
                    // key={prod._id}
                    _id={product._id}
                    title={product.title}
                    description={product.description}
                    images={product.images}
                    price={product.price}
                  />
                    <CardProduct
                    // key={prod._id}
                    _id={product._id}
                    title={product.title}
                    description={product.description}
                    images={product.images}
                    price={product.price}
                  />
                    <CardProduct
                    // key={prod._id}
                    _id={product._id}
                    title={product.title}
                    description={product.description}
                    images={product.images}
                    price={product.price}
                  />
                    <CardProduct
                    // key={prod._id}
                    _id={product._id}
                    title={product.title}
                    description={product.description}
                    images={product.images}
                    price={product.price}
                  />
                  
            </div>
        </>
    )
}
