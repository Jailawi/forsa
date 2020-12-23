import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {Button} from "./Button"
import './Navbar.css'
import {MenuItems} from "./MenuItems"



class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (

            <nav className="navbar">
                <a className="navbar-logo" href="TODO">
                <i class="fas fa-universal-access"></i> <h2 className="logo-name">insurello</h2>
                </a>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className= {this.state.clicked ? 'nav-menu active' : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li className="buttonContainer">
                                <a className={item.cName} href={item.url}> 
                                {item.title} 
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Skapa ärende</Button>
            </nav>
        )
    }
}

export default Navbar;