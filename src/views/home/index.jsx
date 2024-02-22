import React from 'react'
import FirstSectionLanding from './component/first_section_landing'
import SecondSectionService from './component/second_section_service'
import ThirdSectionPodcast from './component/third_section_podcast'
import GallaryList from './component/fourth_section_gallary'
import AboutUs from './component/seventh_section'
import {Box} from '@mui/material'
import ContactSection from './component/contact_section'


function HomeView() {
  return (
    <main>
        <Box style={{backgroundColor:"primary.main"}}>
          <div  className='apply-maxwidth'>
                <FirstSectionLanding/>
          </div>      
      </Box>
      <Box  sx={{backgroundColor:"white"}}>
        <div className='apply-maxwidth'>
             <SecondSectionService/>
       </div>
                  
      </Box>
      <Box  sx={{backgroundColor:"white"}}>
        <div className='apply-maxwidth'>
             <ThirdSectionPodcast/>
       </div>
                  
      </Box>
      <Box  sx={{backgroundColor:"white"}}>
        <div className='apply-maxwidth'>
             <GallaryList/>
       </div>
                  
      </Box>
      <Box  sx={{backgroundColor:"white"}}>
        <div className='apply-maxwidth'>
             <AboutUs/>
       </div>
                  
      </Box>
      <Box  sx={{backgroundColor:"primary.main"}}>
        <div className='apply-maxwidth'>
             <ContactSection/>
       </div>
                  
      </Box>
      
      
    </main>
  )
}

export default HomeView
