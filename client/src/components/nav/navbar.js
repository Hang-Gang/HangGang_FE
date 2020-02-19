import React from 'react' 
import M from 'materialize-css'; 
import '../styles/nav/navbar.css'

const image = require('./The-Hang-Gang-Round-Final-1.jpg')

export default class Navbar extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
        M.AutoInit()
    }

    render(){
        return( 
            <div class='navbar-fixed'>
                <nav class='white'>
                  <div class="nav-wrapper">
                    <a href="#!" class="black-text brand-logo">Hang Gang</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class=" black-text material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                      <li><a href="sass.html">Sass</a></li>
                      <li><a href="badges.html">Components</a></li>
                      <li><a href="collapsible.html">Javascript</a></li>
                      <li><a href="mobile.html">Mobile</a></li>
                    </ul>
                  </div>
                </nav>
                <ul class="sidenav" id="mobile-demo">
                  <li><a href="sass.html">Sass</a></li>
                  <li><a href="badges.html">Components</a></li>
                  <li><a href="collapsible.html">Javascript</a></li>
                  <li><a href="mobile.html">Mobile</a></li>
                </ul>             
            </div>
        )
    }
}        



          