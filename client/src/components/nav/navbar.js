import React from 'react' 
import M from 'materialize-css'; 

export default class Navbar extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
        M.AutoInit()
    }

    render(){
        return(
            <div>
                <ul id="dropdown1" class="dropdown-content">
                    <li><a href="#!">one</a></li>
                    <li><a href="#!">two</a></li>
                    <li class="divider"></li>
                    <li><a href="#!">three</a></li>
                </ul>
                <nav className='blue-text text-darken-2'>
                    <div class="nav-wrapper">
                        <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>                 
                        <a href="#!" class="brand-logo ">Hang Gang</a>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="sass.html">Sign Up</a></li>
                            <li><a href="badges.html">Log In</a></li>                        
                        </ul>
                    </div>
                </nav>
                <ul id="slide-out" class="sidenav">
                    <li><a href="#item1">Item 1</a></li>
                    <li><a href="#item2">Item 2</a></li>
                    <li><a href="#item3">Item 3</a></li>
                </ul>
            </div>
        )
    }
}