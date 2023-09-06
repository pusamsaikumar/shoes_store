import CartItem from '@/components/CartItem'
import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from "axios";

import { FaLeaf } from 'react-icons/fa'
import { makePaymentRequest } from '@/utils/api'
import {loadStripe} from '@stripe/stripe-js';
import {API_URL , STRAPI_API_TOKEN} from '@/utils/urls';
import { parse } from 'postcss'

const stripePromise =  loadStripe('pk_test_51LtwQTSFCJh4OSw5iTLpE2VIuEO9TSWmEv8SkYCfYCw7GfWr8zWnxwlrQVXLCShd13YyBqFaZvyHFZNwij0SJuWN00yplu4g53');

// const stripePromise = loadStripe(
//   // process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

// );

const cart = () => {
  const {cartItems} = useSelector((state) => state.cart);
  const subtotal = useMemo(()=>{
    return cartItems.reduce((item,val)=> item + val.attributes.price,0);
  },[cartItems]);

  // MAKE A STRIPE PAYMENT
  const [loading,setLoading] = useState(false);

  const p = cartItems?.[0]?.attributes;

  

  // const [item, setItem] = useState({
  //   name: "Apple AirPods",
  //  // description: "Latest Apple AirPods.",
  //   // image:
  //   //   "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
  //   quantity: 2,
  //   price: 999,
  // });

  const [cart,setCart] = useState([])

  console.log("cart",cartItems);
  
 

  const createCheckOutSession01 = async () => {
    let obj = {};
    obj["name"] = p.name;
  
   
    obj["quantity"]=parseInt(cartItems[0]?.quantity);
    obj["price"]= parseInt(p.price);
   cart.push(obj)
    
  

    setLoading(true);
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/create-stripe-session", {
        item:obj,
     
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
    setLoading(false);
  };

  const createCheckOutSession = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    let config = {
      method:"post",
      url:"/api/orders",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer e18695443efdc8a90f5e3894c78a3b4bef7ab9e62a6694d86094571e08c92f16542b2f9d1cd328a971bee0604c911d2362fe856d657c2146acfdb689c7380a0afbeeebf4d1a842a83bb730bf9706591e9305e80109356024eaf7cbd7d5e3446675beb7ae53a796f8e628129b86d064fda77a25aa8975f630aeef50a7e72055f4'
    },
      data:{
        products:cartItems
      }
    }
    // const checkoutSession = await axios.post("/api/orders", {
    //   products: cartItems,
    // });
    const checkoutSession = await axios(config)
    console.log("che",checkoutSession)
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
    setLoading(false);
  };

 
  // const makePayment = async () => { 
  //   const stripe = await stripePromise; 
  //   const body = {products: cartItems }; 
  //   const headers = { 
  //     Authorization: "Bearer " + STRAPI_API_TOKEN,
  //     "Content-Type": "application/json", 
  //   }; 
 
  //   const response = await fetch( 
  //    // `${API_URL}/api/orders`, 
  //    `http://127.0.0.1:1337/api/orders`,
  //     { 
  //       method: "POST", 
  //       headers: headers, 
  //       body: JSON.stringify(body), 
  //     } 
  //   ); 
 
  //   // const session = await response.json(); 
  //   // console.log("session",session)
 
  //   const result = await stripe.redirectToCheckout({ 
  //     sessionId: response.data.id, 
  //   }); 
 
  //   console.log("res",result)
  //   // if (result.error) { 
  //   //   console.log(result.error); 
  //   // } 
  // }; 

  // setLoading(true);
  //   const stripe = await stripePromise;
  //   const checkoutSession = await axios.post("/api/create-stripe-session", {
  //     item: item,
  //   });
  //   const result = await stripe.redirectToCheckout({
  //     sessionId: checkoutSession.data.id,
  //   });
  //   if (result.error) {
  //     alert(result.error.message);
  //   }
  //   setLoading(false);

 
  const handlePayment = async () => {
    
        setLoading(true);
        const stripe = await stripePromise;
        const res = await makePaymentRequest("/api/create-stripe-session", {
            products: cartItems,
        });
        await stripe.redirectToCheckout({
            sessionId: res.stripeSession.id,
        });
   
};
  return (
    <div className='w-full py-20'>
      <Wrapper>

       {
        cartItems.length > 0 && (
          <>
           {/* Heading */}
        <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0 '>
          <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'> Shopping Cart</div>
        </div>

        {/* cart content */}
        <div className='flex flex-col md:flex-row gap-12 py-10 '>
          {/* cart item */}
          <div className='flex-[2]'>
            <div className='text-lg font-bold'>Cart Items</div>
            {
              cartItems.map((item) =>{
                return <CartItem key={item.id} data={item} />
              })
            }
            {/* <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem /> */}
          </div>
          {/* summary */}
          <div className='flex-[1]'>
            <div className='text-lg font-bold'>Summary</div>
            {/* sub total */}
            <div className='bg-black/[0.05] p-5 my-5 rounded-xl'>
              <div className=' flex justify-between'>
                <div className='uppercase text-md md:text-lg font-medium text-black'>subtotal</div>
                <div className='text-md md:text-lg font-medium text-black hover:text-red-400 '> &#8377;{subtotal}</div>
              </div>
              <div className='border-t py-5 text-sm md:text-md mt-5'>
                Subtotal reflects the total price of the your orders,including duties and taxes , before any applicable discounts.
                it does not includes delivery cost and international transactions fees.
              </div>

            </div>
            <button className='w-full bg-black text-yellow-50 font-medium rounded-full py-4 text-lg text-center transition-transform  active:scale-95 hover:opacity-75  flex items-center gap-2 justify-center '
              onClick={
             //  handlePayment
              createCheckOutSession01 
              }
            >
              Checkout
            {loading && <img src='/spinner.svg' />}
            </button>
          </div>
         
        </div>
          </>
        )
       }
       
     {
      cartItems.length < 1 && (
        <>  {/* empty screen */}
        <div className='flex flex-col items-center pb-[50px] md:mt-14'>
              <Image src={"/empty-cart.jpg"} width={300} height={300} className='w-[300px] md:w-[400px]' />
          <span className='text-xl font-medium'>Your cart is Empty</span>
          <span className='items-center mt-9 '>
             Looks like you have not added anything in your cart <br />
             Go head and Explore top technologies.
          </span>
           <Link href={"/"}
            className='mt-10 bg-black text-white  px-10 py-5 rounded-full w-[350px] text-center transition-transform active:scale-95 hover:opacity-75'
           >Continue Shopping</Link>
         </div></>
      )
     }
      </Wrapper>
    </div>
  )
}

export default cart