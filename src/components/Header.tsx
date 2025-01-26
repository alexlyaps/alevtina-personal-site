import { useState } from 'react'
import { Link, NavLink } from 'react-router';
import '@components/Header.css'
import {MENU, PATHS, ELEMENTS} from '@components/navigation.tsx';

interface OnClickProps {
    onClick: () => void;
}

function HamburgerButton({ onClick }: OnClickProps) {

    return (
        <button className="button-hamburger" onClick={onClick} >
            <span className="haburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}
  
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuList = MENU.map((item, index) => {
        return (
            <li className="header-menu-list item" key={index}> 
                <Link to={PATHS[index]} 
                    className={'link ' + (item === 'contacts'? 'myLast': '')} >
                    {item}
                </Link>
            </li>
        )
    })    

    return (
    <header className="header">
        <div className="header-menu">
            <h1 className='alevtina-lyapunova'>
                <Link className='link' to='/'>alevtina lyapunova</Link >
            </h1>
            <HamburgerButton onClick={toggleMenu}/>        
        </div>
        <nav className='header-menu-list'>
            <ul className={isOpen ? "header-navigation-menu is-open": "header-navigation-menu"}>
                {menuList}
            </ul>
        </nav>
    </header>
  )
}



