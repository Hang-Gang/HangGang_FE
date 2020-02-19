import React from 'react';
import './App.css';

import Navbar from './components/nav/navbar.js'
import Carousel from './components/carousel/carousel.js'
import {Route} from 'react-router-dom'


export default class App extends React.Component {



    render(){
        return(
            <div>
                <Navbar /> 
                <Route exact path="/" component={Carousel} /> 
            
                <div class='fixed-action-btn horizontal'> 
                    <a class='btn-floating btn-large red'>
                      <i class='material-icons'>mode_edit</i>
                    </a>
                    <ul>
                      <li>
                        <a class='btn-floating red'>
                          <i class='material-icons'>insert_chart</i>
                        </a>
                      </li>
                      <li>
                        <a class='btn-floating yellow'>
                          <i class='material-icons'>publish</i>
                        </a>
                      </li>
                      <li>
                        <a class='btn-floating green'>
                          <i class='material-icons'>attach_file</i>
                        </a>
                      </li>
                      <li>
                        <a class='btn-floating blue'>
                          <i></i>
                        </a>
                      </li>
                    </ul>
                </div>
            </div>
        );
    }
}

