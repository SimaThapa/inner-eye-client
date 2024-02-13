import React from 'react'
import FirstSectionLanding from './component/first_section_landing'
import SecondSectionService from './component/second_section_service'


function HomeView() {
  return (
    <div  style={{
      display:"flex",
      flexDirection:"column"
      }}>
      <FirstSectionLanding/>
      <SecondSectionService/>
      
    </div>
  )
}

export default HomeView
