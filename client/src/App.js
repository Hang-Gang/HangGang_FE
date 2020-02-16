import React from 'react';
import './App.css';

import Navbar from './components/nav/navbar.js'
import {Route} from 'react-router-dom'


export default class App extends React.Component {



    render(){
        return(
            <div>
                <Navbar /> 
            </div>
        );
    }
}

