import React, { Component } from 'react'
import css from "./css/NavBarForm.module.css";
import NavBarChild from './NavBarChild';

export default class NavBarForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: true
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn ? false : true
        }), () => console.log(this.state.isLoggedIn))
    }


    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>

                <NavBarChild 
                    isLoggedIn={this.state.isLoggedIn}
                    handleClick={this.handleClick}
                />

                {/* {this.state.isLoggedIn ? 
                    <button onClick={() => this.handleClick()}>Log In</button>
                 : 
                    <form>
                        <label htmlFor="username">Username</label>
                        <input placeholder="username" id="username"/>

                        <label htmlFor="password">Password</label>
                        <input placeholder="password" id="password" />

                        <button onClick={() => this.handleClick()}>Submit</button>
                    </form>
                } */}
            </div>
        )
    }
}
