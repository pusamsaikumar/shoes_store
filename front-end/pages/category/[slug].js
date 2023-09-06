import React,{useEffect, useState}from 'react';
import { useRouter } from 'next/router';
import Wrapper from '@/components/Wrapper';
import ProductCard from '@/components/ProductCard';
import { fetchDataFromApi } from '@/utils/api';
import useSWR from 'swr';



const maxResult=3;
// ROUTE: http://localhost:3000/category/category1
const  Category= (
   {
    category,
    products,
    slug
   }
) => {
   // const router = useRouter();
   const {query} = useRouter();
   useEffect(()=>{
    setPageIndex(1);
   },[query]);

    const [pageIndex,setPageIndex] = useState(1);
    const {data,error, isLoading} = useSWR(
        `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`, fetchDataFromApi, {
            fallbackData:products
        }
    )


    // const {slug} = router.query;
   // console.log("slug",router.query.slug)  dynamic router  ex: slug is the name of the filename [slug] Or [pid] = router.query.pid
   return (
    <div className='w-full md:py-20 relative'>
        <Wrapper>
            <div className='text-center max-w-[800px] mt-8 mx-auto md:mt-0  '>
                <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight '>

                    {
                        category?.data?.[0]?.attributes?.name
                    }
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'>
                {
                   // products?.data?.map((product) =>{
                    data?.data?.map((product) =>{
                        return <ProductCard key={product?.id} data={product} />
                    })
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
             {/* PAGNATION START */}
               {
               data?.meta?.pagination?.total > maxResult && (
                  <div className='flex w-full justify-center items-center gap-3 my-16 md:my-0 '>
                        <button  
                            className='bg-black rounded py-2 px-4 text-white disabled:bg-gray-200 disabled:text-gray-500'
                            disabled={pageIndex === 1}
                            onClick={()=> setPageIndex(pageIndex - 1)}
                        >Previous</button>
                        <span>
                            {
                                `${pageIndex} of ${data && data.meta.pagination.pageCount}`
                            }
                        </span>
                        <button
                         className='bg-black rounded py-2 px-4 text-white disabled:bg-gray-200 disabled:text-gray-500'
                         disabled={pageIndex ===   data && data.meta.pagination.pageCount}
                         onClick={()=> setPageIndex(pageIndex + 1)}
                        >Next</button>
                  </div>

                 )}
               {/* PAGNATION End */}

               {/* loding.. */}
               {
                isLoading && (
                <div className="absolute top-10 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
                    <img src='/logo.svg' width={150} style={{marginTop:'30px'}} />
                    <span className='text-2xl font-medium'>Loading...</span>
                </div>

                 )
               } 
        </Wrapper>

    </div>
  )
}

export default Category;

export const getStaticPaths = async()=>{
    const category = await fetchDataFromApi('/api/categories?populate=*');
    const paths = category.data.map((c) => ({
        params:{
            slug:c.attributes.slug
        }
    }));
    return {
        paths,
        fallback:false
    }

}
export const getStaticProps = async ({params:{slug}})=>{
    const category =  await fetchDataFromApi(`/api/categories?filters[slug][$eq]=${slug}`);
    //const products = await fetchDataFromApi(`/api/products?populate=*&[filters][categories][slug][$eq]=${slug}`)
    const products = await fetchDataFromApi(`/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`)
    return {
        props:{
            category,
            products,
            slug
        }
    }
}

// ref

// export const getStaticPaths = async () => {
//     return {
//       paths: [
//         {
//           params: {
//             name: 'next.js',
//           },
//         }, // See the "paths" section below
//       ],
//       fallback: true, // false or "blocking"
//     }
//   }
   
//   export const getStaticProps = async () => {
//     const res = await fetch('https://api.github.com/repos/vercel/next.js')
//     const repo = await res.json()
//     return { props: { repo } }
//   }
   