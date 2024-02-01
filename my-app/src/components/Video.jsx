import React from 'react'
import '../videoStyle.css';
const Video = () => {
  return (
    <div className='containerv'>

        <video className='vid' autoPlay loop muted playsInline>
            <source src='/Shihab/vid2.mp4'></source>
        </video>






    </div>
  )
}

export default Video