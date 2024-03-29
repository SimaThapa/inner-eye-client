import React from 'react'
import ServiceCard from 'src/views/home/component/service.card'
import Slider from 'react-slick'
import { Box } from '@mui/material'
import PodcastCard from 'src/cards/podcast_card';


function PodcastList() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
          
          },
          {
            breakpoint: 600,
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            
          },
          {
            breakpoint: 480,
              slidesToShow: 1,
              slidesToScroll: 1
            
          }
        ]
      };
  return (
    <div className='center__carousel'>
        <Slider{...settings}>
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        </Slider>
    </div>
  )
}

export default PodcastList