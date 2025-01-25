import { useState } from 'react'
import './Header.css'

const MENU: string[] = [
    "about",
    "grave for a bird",
    "a few stories",
    "What did Giovanni Boccaccio Dream About",
    "flying snake",
    "beside the color or",
    "rabbits",
    "continuing to learn from the bowerbird",
    "life drawings",
    "mother, father, brother",
    "movement score",
    "you look like an angel",
    "baltic sand",
    "snow leopards",
    "comics",
    "contacts",
  ];

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
        return <li className="header-menu-list item" key={index}>{item}</li>
    })    

    return (
    <header className="header">
        <div className="header-menu">
            <h1 className='alevtina-lyapunova'>alevtina lyapunova</h1>
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



