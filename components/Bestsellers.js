
import CardProduct from "./Cardproduct";

export default function Bestsellers({product}){
     
    return(
        <>
            <h1 className="text-[42px] font-medium text-center mb-12">Best Sellers</h1>
            <div className="grid grid-cols-4 gap-7 mb-[150px] container ">
                
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
