import React from 'react';

const Navigation = ({onRouteChange, isSignedin}) =>{
     if (isSignedin){
      return(
        <nav style={{display:"flex", justifyContent:'flex-end'}}>
           <p className='f3 link dim pointer underline pa3 black' onClick={() =>onRouteChange('signout')}>Sign Out</p>
        </nav>
       );
      } else {
        return ( 
        <nav style={{display:"flex", justifyContent:'flex-end'}}>
           <p className='f3 link dim pointer underline pa3 black' onClick={() =>onRouteChange('home')}>Sign in</p>
            <p className='f3 link dim pointer underline pa3 black' onClick={() =>onRouteChange('register')}>Register</p>
        </nav>
        );
      }    
}
export default Navigation;