import { removeFromCart, updateCart } from '@/store/CartSlice';
import React from 'react';
import {RiDeleteBin6Line} from 'react-icons/ri';
import { useDispatch } from 'react-redux';

const CartItem = ({data}) => {
    const p = data?.attributes;
 const dispatch = useDispatch();

    const updateCartItem = (e,key) =>{
        let payload ={
            key,
            val : key === "quantity" ? parseInt(e.target.value) : e.target.value,
            id:data.id
        };
        dispatch(updateCart(payload))

    }
  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b'>
        {/* img section */}
        <div className='shrink-0 aspect-square w-[60px] m:w-[120px]'>
            <img src='/product-1.webp' />
        </div>

        {/* details section */}
        <div className='w-full flex flex-col'>
            <div className='flex flex-col md:flex-row justify-between'>
                {/* PRODUCT TITLE */}
                <div className='text-lg md:text-2xl font-semibold text-black/[0.8]'>{p.name}</div>
                {/* product sub-title */}
                <div className='text-sm font-medium text-black/[0.5] block md:hidden'>{p.subtitle}</div>
                {/* price */}
                <div className='text-sm font-bold text-black/[0.5] md:text-md mt-2'>MRP : &#8377;{p.price}</div>
               
            </div>
            <div className='text-md font-medium text-black/[0.5] hidden md:block'>{p.subtitle}</div>
                
                {/* size start */}
            <div className='flex items-center mt-4 justify-between' >
                    <div className='flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md'>
                        <div className='flex items-center gap-1'>
                            <div className='text-semibold'>Size :</div>
                            <select className='hover:text-black'
                              onChange={(e)=> updateCartItem (e,"selectedSize")}
                            >
                                {
                                    p.size.data.map((item,i) => {
                                        return <option
                                                key={i}
                                                 value={item.size}
                                                 selected={data.selectedSize === item.size}
                                                 disabled={!item.size ? true : false}
                                        >{item.size}</option>
                                    })
                                }
                                {/* <option value="1">UK 6</option>
                                <option value="2">UK 6.5</option>
                                <option value="3">UK 7</option>

                                <option value="4">UK 7.5</option>

                                <option value="5">UK 8</option>
                                <option value="6">UK 8.5</option>
                                <option value="7">UK 9</option>
                                <option value="8">UK 9.5</option>
                                <option value="9">UK 10</option>
                                <option value="10">UK 10.5</option> 
                                <option value="11">UK 11</option> */}

                            </select>
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className='font-semibold text-md'>
                                Quantity :
                            </div> 
                            <select className='hover:text-black' 
                             onChange={(e)=> updateCartItem (e,"quantity")}
                            >
                                {
                                    Array.from({length:10},(_,i) => i+1).map((q,i) =>{
                                        return <option
                                            key={i}
                                            value={q}
                                            selected={data.quantity === q}
                                        >{q}</option>
                                    })
                                }
                            {/* <option value="1"> 6</option>
                                <option value="2"> 6.5</option>
                                <option value="3"> 7</option>

                                <option value="4"> 7.5</option>

                                <option value="5"> 8</option>
                                <option value="6"> 8.5</option>
                                <option value="7"> 9</option>
                                <option value="8"> 9.5</option>
                                <option value="9"> 10</option>
                                <option value="10"> 10.5</option> 
                                <option value="11"> 11</option> */}
                            </select>
                        </div>
                    </div>
                    <RiDeleteBin6Line 
                    className='cursor-pointer text-black/[0.5] text-[16px]  md:text-[20px] hover:text-red-950'
                     onClick={()=>{
                        dispatch(removeFromCart({
                            id:data.id
                        }))
                     }}
                    />
            </div>
        </div>
    </div>
  )
}

export default CartItem