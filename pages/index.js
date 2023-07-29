import Bar from '@/components/Bar';
import Bestsellers from '@/components/Bestsellers';
import Featured from '@/components/Featured'
import Kids from '@/components/Kids';
import Layout from '@/components/Layout';
import Men from '@/components/Men';
import Contact from '@/components/Contact';
import Women from '@/components/Women';
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'

{/* <Newproducts newProducts={newProducts} /> */}
export default function Home({featuredProduct, newProducts}) {

  return (
      <Layout>
            <Featured product={newProducts}/>
        <div className='container mx-auto font-sans'>
            <Bestsellers product={featuredProduct}/>
            <Women/>
            <Men/>
            <Kids/>
            {/* <Discount/> */}
            <Bar/>
            <Contact/>
        </div>
      </Layout>
      
      
       )
}

export async function getServerSideProps(){
  const featuredProductId = '64ad95786ed39639f4283269';
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
