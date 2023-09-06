import HeroBanner from '@/components/HeroBanner'
import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wrapper'
import { fetchDataFromApi } from '@/utils/api';
import Image from 'next/image';

import { useState,useEffect } from 'react';


export default function Home({products}) {
  const [data,setData] = useState(null);
  console.log("Data" , products);
 
//   useEffect(()=>{ 
//     fetchProducts();
//   },[]);

//   const fetchProducts =async()=>{
//   const  res =  await fetchDataFromApi('/api/products');
   
//  setData(res.data)
//   }

  return (
    <main
   
    >
      <HeroBanner />
      {/* {data?.[0]?.attributes?.name} */}
      {/* {products.data[0].attributes.name} */}
      <Wrapper >
         {/* heading and para start */}
         <div className='text-center max-w-[800px]  mx-auto my-[50px] md:my-[80px] '>
          <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>Cushioning for your Miles</div>
            <div className='text-md md:text-xl'>   A lightweight Nike ZoomX midsole is combined with
                        increased stack heights to help provide cushioning
                        during extended stretches of running.
              </div>
         </div>
        {/*  end*/}
        {/* product grid start */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'>
          {
            products?.data?.map((product) => (
              <ProductCard key={product.id} data = {product} />
            ))
          }

             {/* <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard /> */}
        </div>
         {/* product grid end */}
      </Wrapper>
    </main>
  )
}

export const getStaticProps = async()=>{
  const products = await fetchDataFromApi("/api/products?populate=*");
  return {
    props:{
      products
    }
  }
} 




// reference static site generation: instead of use useEffect
// export const getStaticProps = async () => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const repo = await res.json()
//   return { props: { repo } }
// }
