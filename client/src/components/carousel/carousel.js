import React from 'react'
import '../styles/carousel/carousel.css'
import M from 'materialize-css'
const logo = require('./The-Hang-Gang-Round-Final-1.jpg')

export default class Carousel extends React.Component{
    constructor(){
        super()
    }
    
    componentDidMount(){
        M.AutoInit()
    }

    render(){
        return(
            <div>
                <h3>Whats New</h3> 
                <div class="carousel">
                    <a class="carousel-item" href="#one!"><img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80"/></a>
                    <a class="carousel-item" href="#two!"><img src="data:image/jpeg;base64,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"/></a>
                    <a class="carousel-item" href="#three!"><img src="https://images.squarespace-cdn.com/content/v1/53e57f29e4b07d0e4c48ead2/1571872698120-3EKADC4GALAUK9ASUII1/ke17ZwdGBToddI8pDm48kN7pltOYPAwfYI-j1i_oLqJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmb-fA82zaRhWGg5BmJUXFJmXsmaNlNvkw89eMu1K9jGbcUcHbrXdgkc2TfbGfVFsi/IMG_1825.JPG?format=1500w"/></a>
                    <a class="carousel-item" href="#four!"><img src="https://images-na.ssl-images-amazon.com/images/I/71DRX76rJUL._AC_SY550_.jpg"/></a>
                    <a class="carousel-item" href="#five!"><img src="https://images-na.ssl-images-amazon.com/images/I/71DRX76rJUL._AC_SY550_.jpg"/></a>
                </div> 
                <div class="row">
    <div class="col s6 m7">
      <div class="card">
        <div class="card-image">
          <img src="https://images-na.ssl-images-amazon.com/images/I/71DRX76rJUL._AC_SY550_.jpg"/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
            </div> 
        )
    }
}