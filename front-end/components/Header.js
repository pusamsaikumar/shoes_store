import React ,{useState,useEffect}from 'react'
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';
import { BsCart } from 'react-icons/bs';
import {IoMdHeartEmpty} from "react-icons/io";
import {BiMenuAltRight} from "react-icons/bi";
import  {VscChromeClose} from "react-icons/vsc";
import MenuMobile from './MenuMobile';
import { fetchDataFromApi } from '@/utils/api';
import { useSelector } from 'react-redux';


function Header() {
    const [mobileMenu,setMobileMenu] = useState(false);
    const [showCatMenu,setShowCatMenu] = useState(false);
    const [show,setShow] = useState("translate-y-0");
    const [lastScrolly,setLastScrolly] = useState(0);
    const [categories, setCategories] = useState(null); 
    const {cartItems} = useSelector(state => state.cart);
    const controlNavbar =()=>{
      if(window.scroll >200 ){
        if(window.scrollY > lastScrolly && !mobileMenu){
            setShow("-translate-y-[80px]")
        } else{
            setShow("shadow-sm")
        }

      }else{
        setShow("translate-y-0")
      }
      setLastScrolly(window.scrollY)
    }
    useEffect(()=>{
      window.addEventListener("scroll",controlNavbar);
      return () =>{
        window.removeEventListener("scroll",controlNavbar)
      }
    },[lastScrolly]);

    useEffect(()=>{
      fetchCategories();
    },[]);
    const fetchCategories = async() =>{
      const res = await fetchDataFromApi('/api/categories?populate=*');
      setCategories(res.data);
    }
  return (
    <header
    style={{background:"#2572cb" ,color:'white' }}
      //  className={`w-full h-[50px] md:h-[80px] bg-black text-white flex items-center  z-20 transition-transform duration-300 ${show} `}
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
   >
      <Wrapper className={`w-full h-[60px] flex justify-center items-center`}>
       <Link href="/" > 
       <img src="/logo.svg" className='w-[60px] md:w-[80px] p-2 mr-60 text-white' style={{background:"white",borderRadius:"10px"}} />
       </Link>
         <Menu showCatMenu={showCatMenu} setShowCatMenu ={setShowCatMenu} categories={categories} />
         {/* icons start */}
         <div className='flex items-center text-black'> 
              <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
                <IoMdHeartEmpty className='text-[19px] md:text-[24px] text-white' />
                <div
                  className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px]  
                  rounded-full bg-red-600 absolute top-1  left-5 md:left-7 text-white text-[10px]  
                  md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]
                  '
                >77</div>
              </div>
         </div>
         {/* end */}
        <Link href={"/cart"}>
        <div className='flex items-center gap-2 text-black'> 
              <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
                <BsCart className='text-[15px] md:text-[20px] text-white'  />
            {
              cartItems.length > 0 && (
                <div
                className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px]  
                rounded-full bg-red-600 absolute top-1  left-5 md:left-7 text-white text-[10px]  
                md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]
                '
              >
                {
                  cartItems.length
                }
              </div>
              )
            }
              </div>
         </div>
        </Link>
         {/* mobile */}
         <div className='w-8 md-w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2 '>
          {
            mobileMenu ? (
              <VscChromeClose className='text-[14px'
               onClick={()=> setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight className='text-[14px] '
              onClick={()=> setMobileMenu(true)}
              />
            ) 
          }
         </div>
        {/* mobile end */}
        {
          mobileMenu && <MenuMobile  showCatMenu={showCatMenu} setShowCatMenu ={setShowCatMenu} setMobileMenu={ setMobileMenu} categories={categories}  />
        }
          
        </Wrapper>   
    </header>
  )

}

export default Header
