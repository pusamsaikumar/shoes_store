import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductDetailsCarousel = ({images}) => {
  return (
    <div className='text-white w-full text-[20px] max-w-[1360px] mx-auto sticky top-[50px] '>
        <Carousel
          showStatus={false}
          infiniteLoop={true}
          showIndicators={false}
          showThumbs={60}
          className='productCarousel'
        >
           {
            images?.map((img) => {
              return <img key={img.id} src={img.attributes.url} alt={img.attributes.name}  />
            })
           }
            {/* <img src='/p1.png' />
            <img src='/p2.png' />
            <img src='/p3.png' />
            <img src='/p4.png' />
            <img src='/p5.png' />
            <img src='/p6.png' />
            <img src='/p7.png' /> */}
        </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel