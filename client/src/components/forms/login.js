import React from 'react'
import '../styles/forms/login.css'

export default class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    changeHandler = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state.email, this.state.password)
    }

    render(){
        return(
            <form onClick={this.submitHandler}>
                <input type='text'
                       value={this.state.email}
                       name='email'
                       placeholder='Email'
                       onChange={this.changeHandler}
                />

                <input type='password'
                       value={this.state.password}
                       placeholder='Password'
                       onChange={this.changeHandler}
                       name='password'
                /> 
                <button type='submit'>Submit</button>
            </form>  
        )
    }
}