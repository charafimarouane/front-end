import CardProduct from "@/components/Cardproduct";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const router = useRouter();
  const { term } = router.query;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products based on the search term
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/search?term=${term}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    // Only fetch products if the search term is provided
    if (term) {
      fetchProducts();
    } else {
      setProducts([]);
    }
  }, [term]);
  

  return (
    <Layout>
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-12">
        Search Results for "{term}"
      </h1>
      <div className="grid grid-cols-4 gap-6">
        {products?.map((product) => (
          <CardProduct key={product._id} {...product} />
        ))}
      </div>
    </div>
    </Layout>
  );
}
