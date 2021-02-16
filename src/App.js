import React from 'react';
import DesktopNav from './components/desktop/DesktopNav';
import Header from './components/Header';
import MobileMenu from './components/mobile/MobileMenu';
import MobileNav from "./components/mobile/MobileNav";
import Section from './components/Section';
import './main.css'

export default function App() {
  const [isActiveMenu, setActiveMenu] = React.useState(false);

  function showMenu () {
    setActiveMenu(!isActiveMenu)
  };

  return (
    <div >
      <MobileNav className="no-desktop" showMenu={showMenu}/>
      <DesktopNav className="no-mobile"/>
      <Header />
      {
        isActiveMenu && <MobileMenu />
      }

      <Section />

    </div>
  );
}
