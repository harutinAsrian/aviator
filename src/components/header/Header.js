import React from 'react'
import './Header.css'
import grey_bg from '../../img/bg/header-bg.png'
import Logo from '../../img/logo/aviator.svg'

function Header() {
    return (
        <div className="Header" style={{ backgroundImage: `url(${grey_bg})` }}>
            <div className="header__logo">
                <img src={Logo} alt="" />
            </div>
            <div className="header__total-coin">
                1785.16 $
            </div>
        </div>
    )
}

export default Header
