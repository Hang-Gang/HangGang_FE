import React from 'react'
import '../styles/forms/register.css'

export default class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            username: '',
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
        console.log(this.state.email, this.state.password, this.state.username)
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
                <input type='username'
                       value={this.state.username}
                       placeholder='Username'
                       onChange={this.changeHandler}
                       name='username'
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