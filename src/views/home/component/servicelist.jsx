import React from "react";
import ServiceCard from './service.card'
import Slider from 'react-slick'

function ServiceList()
{
   const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 3,
          autoplay: true,
          arrows:false,
          responsive: [
                   {
                     breakpoint: 1024,
                     settings: {
                     slidesToShow: 3,
                     slidesToScroll: 3,
                     infinite: false,
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

 };
    return(
       <div className="center__carousel">
         <Slider {...settings}>                                     
           <ServiceCard/>
           <ServiceCard/>
           <ServiceCard/>
           <ServiceCard/>
           <ServiceCard/>
           <ServiceCard/>
           
           </Slider>    
       </div>
    )                                    

}
export default ServiceList;