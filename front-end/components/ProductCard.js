import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import {discountedPrice} from '@/utils/helper';

const ProductCard = ({data: {attributes:p , id}}) => {
  return (
   <Link  
  href={`/product/${p.slug}`}
 
   className='transform overflow-hidden duration-200 hover:scale-105 cursor-pointer bg-white'
   
   >
    {/* <img src='/product-1.webp' className='w-full' alt='Product Image' /> */}
    <Image width={500} height={500} alt={p.name} src={p.thumbnail.data.attributes.url} />
    <div className='py-4 text-black/[0.9]'>
        <h2 className='text-lg font-medium'> {p.name}</h2>
        <div className='flex items-center text-black/[0.5]'>
            <p className='mr-2 text-g font-semibold '>&#8377;{p.price}</p>
            {
              p.original_price && (<>
               <p className='line-through text-base font-medium'>&#8377;{p.original_price}</p>
            <p className='ml-auto text-green-500 text-base font-medium'>&#8377;
           {
            discountedPrice(p.original_price,p.price)
           } % off
            </p>
              </>)
              
            }
           
        </div>

    </div>
   </Link>
  )
}

export default ProductCard