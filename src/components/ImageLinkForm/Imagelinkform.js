import React from 'react';
import './Imagelinkform.css';

const Imagelinkform = ({onInputChangeFunction, onDetectButtonClick}) =>{
    return(
      <div >
         <p className='f3'>
             {'This magin brian will detect face in your pictures, give it a try' }
         </p>
         <div className='center'>
            <div className='form center f4 pa4  br3 shadow-5'>
              {/*on change any input values perfrom the onInputChangeFunction()*/}
             <input type='text' className='f4 pa2 w-70 center' onChange={onInputChangeFunction}/>
             <button  className='w-30 f4 white dib ph3 pv2 grow link bg-light-purple' onClick={onDetectButtonClick}>Detect</button>
            </div> 
         </div> 
      </div>
    )
}
export default Imagelinkform;