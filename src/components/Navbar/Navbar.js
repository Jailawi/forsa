import React, {Component, useState} from 'react'
import { Link } from 'react-router-dom';
import {Button} from "./Button"
import './Navbar.css'
import {MenuItems} from "./MenuItems"


function Navbar() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const handleClick = () => setClick(!click)
    
    

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(false); //setNavbar(true) for sticky scroll
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', changeBackground)


        return (
            <nav className={navbar ? "navbar active" : "navbar"}>
                <a className="navbar-logo" href="">
                <i class="fas fa-universal-access"></i> <h2 className="logo-name">TBD</h2>
                </a>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className= {click ? 'nav-menu active' : "nav-menu"}>
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
                <Button>Skapa Ärende</Button>
            </nav>
        )
}

export default Navbar;