import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Logo from './components/Logo/Logo';
import Clarifai  from 'clarifai';
import Rank from './components/Rank/Rank';
import Signin from './components/signin/sign'
import Imagelinkform from './components/ImageLinkForm/Imagelinkform';
import Particles from 'react-particles-js';
import ImageTodetect from './components/ImageTodetect/ImageTodetect';


//clarifai
const app = new Clarifai.App({
  apiKey: '65bcc5c07a564ddea5ce03225730afa6'  //my api key that was generated after registration
});

// partucle
const particleOptions = {
          	particles: {
               number: {
                 value: 150,
                 density: {
                       enable: true,
                       value_area: 1000  
                   }
            		}
             }  
          };
class App extends Component {
       constructor(){
          super()
          this.state ={ input:'' , 
                        imageUrl:'', // the imageUrl get display when the detect buttton is clicked
                         box: {},
            }
       }
  // on input change Function
   onInputChangeFunction = (event) => {
     // set the input state to the the target value  in the input box
   this.setState({input:event.target.value});
      
  };
  // calculate the face location
  calculateFcaeLocation = (data) => {
     const clarifaiFData = data.outputs[0].data.regions[0].region_info.bounding_box
     const imageUrl = document.getElementById("imageUrl");
     const height = Number(imageUrl.height);
     const width = Number(imageUrl.width);
     console.log(height, width);
     return{
        leftCol : clarifaiFData.left_col * height,
        topRow : clarifaiFData.top_row * width,
        rightCol: width - (clarifaiFData.right_col * width),
        bottomRow: height -(clarifaiFData.bottom_row * height)
     }

  };

  DisplayFaceBox =(box) => {
    console.log("taiwo");
    console.log(box);
    this.setState({box: box})
  }
  // on click detect button Function perform the functions within it
  onDetectButtonClick = () =>{
    this.setState({imageUrl:this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.DisplayFaceBox(this.calculateFcaeLocation(response)))
     .catch(err => console.log(err));

  };
  
  render() {
    return (
      <div className="App">
        <Particles className='particle_styling'
              params={particleOptions}
            />
        <Navigation/>
        <Signin/>
        <Logo/>
        <Rank/>
        <Imagelinkform 
            onDetectButtonClick={this.onDetectButtonClick}
            onInputChangeFunction={this.onInputChangeFunction} 
        />
        <ImageTodetect box={this.state.box} imageUrl={this.state.imageUrl}/> 
      </div>
    );
  }
}
export default App;
