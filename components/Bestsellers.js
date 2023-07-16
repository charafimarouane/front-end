
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

// export async function getServerSideProps(){
//     await mongooseConnect();
//     const newProducts = await Product.find({}, null, {sort: {'_id':-1}})
//     console.log(newProducts);
//     const latestProducts = await Product.find()
//   .sort({ createdAt: -1 })
//   .limit(4)
//   .lean();

// console.log(latestProducts);
//     return{
//       props: {
//         newProducts: JSON.parse(JSON.stringify(newProducts)),
//         latestProducts: JSON.parse(JSON.stringify(latestProducts)),
//       }
//     };
//   }