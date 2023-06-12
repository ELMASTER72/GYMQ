import React, { useState } from 'react'
import ModalWindow from '../Modal'
import MenuDesplegable from '../MenuDesplegable'

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div>
        <nav className='navBar'>
          <div className={`navBarList ${showMenu ? 'show' : ''}`}>
              <ul className='navBarItems'>
                  <li style={{backgroundColor: '#FFFF00'}}><a style={{color: '#000'}} href="/">Inicio</a></li>
                  <li><a href="/Rutinas">Rutinas</a></li> 
                  <li><a href="/Tienda">Tienda</a></li> 
                  <li><a href="/Gimnasios">Gimnasios</a></li> 
              </ul>
          </div>
            <div className='navBarModal'><ModalWindow/></div>
        </nav>
        <MenuDesplegable/>
    </div>
  )
} 