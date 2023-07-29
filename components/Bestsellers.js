import CardProduct from "./Cardproduct";

export default function Bestsellers({product}){
     
    return(
        <div className="md:mb-24 mb-8">
            <h1 className="md:text-[42px] text-[32px] font-medium text-center mb-12 ">Best Sellers</h1>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-2  ">
                
                    <CardProduct
                    _id={product._id}
                    title={product.title}
                    description={product.description}
                    images={product.images}
                    price={product.price}
                  />
                    <CardProduct
                    _id={product._id}
                    title={product.title}
                    description={product.description}
                    images={product.images}
                    price={product.price}
                  />
                    <CardProduct
                    _id={product._id}
                    title={product.title}
                    description={product.description}
                    images={product.images}
                    price={product.price}
                  />
                    <CardProduct
                    _id={product._id}
                    title={product.title}
                    description={product.description}
                    images={product.images}
                    price={product.price}
                  />
                  
            </div>
        </div>
    )
}
