import React from 'react';
import './App.css';

import Navbar from './components/nav/navbar.js'
import Carousel from './components/carousel/carousel.js'
import Login from './components/forms/login'
import Register from './components/forms/register'
import Landing from './components/landing/landing'
import PlantHangerCards from './components/plantHangers/plantHangerCards'
import WallHangerCards from './components/wallHangers/wallHangerCards'

import {Route} from 'react-router-dom'


export default class App extends React.Component {

    render(){
        return(
            <div>
                <Navbar /> 
                <Route exact path="/" component={Carousel} /> 
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/landing' component={Landing}/>
                <Route exact path='/PlantHangerCards' component={PlantHangerCards} /> 
                <Route exact path='/WallHangerCards' component={WallHangerCards} /> 
            </div>
        );
    }
}

