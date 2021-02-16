import React from 'react';
import styled from 'styled-components';
import LogoSrc from './../../images/logo.svg';
import MenuIconSrc from './../../images/icon-menu.svg';
import './css/MobileNav.css';

const MenuIcon = styled.img`
    min-width: 30px;
    width: 5vw;
    cursor: pointer;
`;

const Logo = styled.img`
    min-width: 100px;
    width: 30%;
`;


export default function MobileNav ( {showMenu } ) {
    const menu = React.useRef();

    function handleMenuIconClick () {
        showMenu();
        menu.current.classList.toggle('rotate-menu');
    };

    return (
        <div className="mobile-nav-container no-desktop">
            <Logo src={LogoSrc}/>
            <MenuIcon ref={menu} onClick={handleMenuIconClick} src={MenuIconSrc} />
        </div>
    );
};  