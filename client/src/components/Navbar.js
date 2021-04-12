import React, { useContext } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import './NavBar.css'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper blue-grey lighten-5" style={{ padding: '0 2rem' }}>
                <span className="brand-logo">Трансляции 360</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {/* <li><NavLink to="/create" className="menu-item">Создать</NavLink></li> */}
                    <li><NavLink to="/streams" className="menu-item">Трансляции</NavLink></li>
                    <li><NavLink to="/settings" className="menu-item">Настройки</NavLink></li>
                    <li><NavLink to="/archive" className="menu-item">Архив</NavLink></li>
                    {/* <li><NavLink to="/links" className="menu-item">Ссылки</NavLink></li> */}
                    <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
                </ul>
            </div>
        </nav>
    )
}