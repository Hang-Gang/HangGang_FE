import React from 'react'
import Carousel from '../carousel/carousel'
import  '../styles/landing/landing.css'

export default class Landing extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Carousel /> 
            </div> 
        )
    }
}