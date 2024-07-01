import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 

import React from 'react'
import list from "../../public/list.json"
import Cards from "./Cards";

function FreeBooks() {
 const filterBook = list.filter((data)=>data.category === 'free');
//  console.log(filterBook)
 var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}
//  console.log(filterBook)
  return (
    <>
    <div  className='max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col dark:bg-slate-900 dark:text-white'>
      <div>
      <h1 className='font-semibold text-xl pb-1' >FREE OFFERED BOOKS</h1>
        <marquee><p>all access to our new content and new paid version log in into your account and enjoy your reading !!!!</p></marquee>
    </div>  
    
    <div className="slider-container">
      <Slider {...settings}>
        {filterBook.map((item)=>(
        <Cards item={item} key={item.id}></Cards>
        ))
    }
      </Slider>
    </div>
    </div>
    </>
  );
  }
export default FreeBooks