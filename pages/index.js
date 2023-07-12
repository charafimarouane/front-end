import Bar from '@/components/Bar';
import Bestsellers from '@/components/Bestsellers';
import Discount from '@/components/Discount';
import Featured from '@/components/Featured'
import Kids from '@/components/Kids';
import Layout from '@/components/Layout';
import Men from '@/components/Men';
import Offer from '@/components/Offer';
import Women from '@/components/Women';
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'

{/* <Newproducts newProducts={newProducts} /> */}
export default function Home({featuredProduct, newProducts}) {

  return (
      <Layout>
        <div className='container mx-auto font-sans'>
            <Featured product={newProducts}/>
            <Bestsellers/>
            <Women/>
            <Men/>
            <Kids/>
            <Discount/>
            <Bar/>
            <Offer/>
        </div>
      </Layout>
      
      
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
