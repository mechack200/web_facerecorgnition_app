import React from 'react';


const ImageTodetect = ({imageUrl, displayBox}) =>{
    return(
      <div className='center'>
         <div className="absolute mt2">
            <img alt='image_to_detect' id="imageUrl" src={imageUrl} style={{height:'auto', width:'500px' }}/>
            <div className='bounding_box'></div>
         </div>
      </div>

    )
}
export default ImageTodetect;