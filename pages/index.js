import Featured from '@/components/Featured'
import Header from '@/components/Header'
import Newproducts from '@/components/NewProducts';
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'


export default function Home({product}) {
  console.log(product);
  return (
    <div>
      <Header/>
      <Featured product={product}/>
      <Newproducts/>
    </div>
       )
}

export async function getServerSideProps({props}){
  const featuredProductId = '6487f380bb3637478b2a69d0';
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return{
    props:{product: JSON.parse(JSON.stringify(product))},
  };
}
