import Featured from '@/components/Featured'
import Header from '@/components/Header'
import Newproducts from '@/components/NewProducts';
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'


export default function Home({featuredProduct, newProducts}) {

  return (
    <div>
      <Header/>
      <Featured product={featuredProduct}/>
      <Newproducts newProducts={newProducts} />
    </div>
       )
}

export async function getServerSideProps(){
  const featuredProductId = '6487f380bb3637478b2a69d0';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId)
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}})
  
  return{
    props: {
      featuredProduct:JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    }
  };
}
