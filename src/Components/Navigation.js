import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navigation() {
    const [showMenu, setShowMenu] = useState(false)

    let menu
    let menuMask

    if(showMenu){
        menu = <div className="bg-white fixed top-0 left-0 w-4/5 h-full z-50 shadow">
            This is menu
        </div>

        menuMask = <div 
        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
        onClick={() => setShowMenu(false)}
        >

        </div>
    }

    return (

        <nav className="">
            <span className="text-xl">
                <FontAwesomeIcon icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>
            {menuMask}
            {menu}
        </nav>

    );
}

export default Navigation;