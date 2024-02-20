import React from 'react'
import FirstSectionLanding from './component/first_section_landing'
import SecondSectionService from './component/second_section_service'
import ThirdSectionPodcast from './component/third_section'
import {Box} from '@mui/material'


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
      
      
    </main>
  )
}

export default HomeView
