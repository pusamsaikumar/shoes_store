import React from 'react';
import Link from 'next/link';
import {FaFacebookF,FaTwitter, FaYoutube, FaInstagram} from "react-icons/fa";
import Wrapper from './Wrapper';

// const Footer = () => {
//   return (
//     <footer className='bg-black text-white pt-14 pb-3'>
//       <Wrapper className={`flex flex-col md:flex-row gap-[50px] md:gap-0`}>
//         {/* LEFT START */}
//           <div className='flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row '>
//                   {/* menu start */}
//               <div className='flex flex-col gap-3 shrink-0'>
//                   <div className='font-medium font-oswald uppercase text-sm cursor-pointer hover:bg-slate-400 p-1'>
//                     find a store
//                   </div>
//                   <div className='font-medium font-oswald uppercase text-sm cursor-pointe text-white/[0.4] hover:text-white'>
//                     Become a partner
//                   </div>
//                   <div className='font-medium font-oswald uppercase text-sm cursor-pointe text-white/[0.4] hover:text-white'>
//                     sign up for email
//                   </div>
//                   <div className='font-medium font-oswald uppercase text-sm cursor-pointe text-white/[0.4] hover:text-white'>
//                     send us facebook
//                   </div>
//                   <div className='font-medium font-oswald uppercase text-sm cursor-pointe text-white/[0.4] hover:text-white'>
//                     student discount
//                   </div>
//               </div>
//               {/* menu end */}

//               {/* menu start */}
//               <div className='flex flex-col gap-3'>
//                   <div className='font-oswald font-medium uppercase text-sm '>
//                         About a like 
//                   </div>
//                   <div className='text-sm text-white/[0.5] hover:text-white cursor-pointer uppercase' >
//                       Career
//                   </div>
//                   <div className='text-sm text-white/[0.5] hover:text-white cursor-pointer uppercase' >
//                       Investors
//                   </div>
//                   <div className='text-sm text-white/[0.5] hover:text-white cursor-pointer uppercase' >
//                       Sustainability
//                   </div>
                  

//               </div>
//               {/* menu end */}
//           </div>
//        {/*  Left end */}
//        {/* Right Start */}
//           <div 
//             onClick={() =>     window.open("https://facebook.com", "_blank")}
//           className='w-10 h-10 bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer mr-5'>
//                     <FaFacebookF size={20} />
//           </div>
//           <Link
//                         href="https://twitter.com"
//                         className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer mr-5"
//                     >
//                         <FaTwitter size={20} />
//                     </Link>
//                     <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer mr-5">
//                         <FaYoutube size={20} />
//                     </div>
//                     <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer mr-5">
//                         <FaInstagram size={20} />
//                     </div>
//                 {/* Right End */}
//       </Wrapper>
//       <Wrapper className={`flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0`}>
//         {/* left start */}
//         <div className='text-[15px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left '>
//               @ 2023, Nike Inc. All Rights Reserved.
//           </div>
//         {/* left end */}
//         {/* right start */}
//             <div className='flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center'>
//                 <div className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer'>
//                   Guides
//                 </div>
//                 <div className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer'>
//                   Terms of sale
//                 </div>
//                 <div className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer'>
//                 Terms of use
//                 </div>
//                 <div className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer'>
//                   Privacy of policy
//                 </div>
//             </div>
//         {/* right end */}
//       </Wrapper>
//     </footer>
//   )
// }

// export default Footer


// import Link from "next/link";
// import React from "react";
// import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
// import Wrapper from "./Wrapper";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Find a store
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            become a partner
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            sign up for email
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            send us feedback
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            student discount
                        </div>
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                get help
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Order Status
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Delivery
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Returns
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Payment Options
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Contact Us
                            </div>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                                About nike
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                News
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Careers
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Investors
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                Sustainability
                            </div>
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <div
                        onClick={() =>
                            window.open("https://facebook.com", "_blank")
                        }
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaFacebookF size={20} />
                    </div>
                    <Link
                        href="https://twitter.com"
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaTwitter size={20} />
                    </Link>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaYoutube size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaInstagram size={20} />
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2023 Nike, Inc. All Rights Reserved
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Guides
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Sale
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Use
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Privacy Policy
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;