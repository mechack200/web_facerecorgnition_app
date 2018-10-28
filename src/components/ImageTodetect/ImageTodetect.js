import React from 'react';
import './imageTodetect.css'



const ImageTodetect = ({imageUrl, box}) =>{
    return(
      <div className='center'>
         <div className="absolute mt2">
            <img alt='image_to_detect' id="imageUrl" src={imageUrl} style={{height:'auto', width:'500px' }}/>
            <div className='bounding_box' style={{top: box.topRow, right:box.rightCol, left:box.leftCol, bottom:box.bottomRow}}></div>
         </div>
      </div>

    )
}
export default ImageTodetect;