import React from "react";
import ServiceCard from './service.card'
import Slider from 'react-slick'

function ServiceList({serviceList})
{
   const settings = {
          dots: true,
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 2,
          autoplay: true,
          arrows:false,
          

 };
 
    return(
       <div className="center__carousel">
         <Slider {...settings}>                                     
           {serviceList?.map((item)=>{
             return  <ServiceCard key={item._id} item={item}/>
           })} 
         

           </Slider>    
       </div>
    )                                    

}
export default ServiceList;