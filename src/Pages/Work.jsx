import React from 'react'
import work from '../assets/work.png';
import image_one from '../assets/image_one.jpg';
import image_two from '../assets/image_two.png';
import image_three from '../assets/image_three.jpg';
import '../Components/Work.css';
function Work () {
  return (
   <>
     <div className="hero-img">
           <img src={work} alt="WorkImg" />
         </div>


          <div className="image-section work-section-image">
            <div className="image-box left">
                <img src={image_one} alt="Left Image"/>
            </div>

            <div className="image-box right">
                <img src={image_two} alt="Right Image"/>
            </div>
        </div>

        <div className="image-section work-section-image bottom-section">
            <div className="image-box left">
                <img src={image_three} alt="Bottom Left Image"/>
            </div>

            {/* <!-- empty right box --> */}
            <div className="image-box right"></div>
        </div>
   </>
  )
}

export default Work;