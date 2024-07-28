import React from 'react'
import Video from '../video/video'
import Card from '../Card/Card'
import Banner from '../baby/baby1'

function Littleplanet() {
  

  return (
    <div>
      <div className='HomePage_logo'>
        <img className='logo' src='data:image/png;base64,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' />
      </div>
    <Video />
    <Card/>
    <Banner/>
    
    </div>


  )
}

export default Littleplanet