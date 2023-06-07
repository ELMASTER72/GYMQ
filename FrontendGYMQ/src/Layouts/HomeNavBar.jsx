import React, { useState } from 'react'
import ModalWindow from './Modal'
import MenuDesplegable from './MenuDesplegable'

export const HomeNavBar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div>
        <nav className='menu'>
          <div className={`menuNav ${showMenu ? 'show' : ''}`}>
              <ul className='nav_bar'>
                  <li style={{backgroundColor: '#FFFF00'}}><a style={{color: '#000'}} href="/">Inicio</a></li>
                  <li><a href="/">Planes</a></li>
                  <li><a href="/routines">Rutinas</a></li> 
                  <li><a href="/">Tienda</a></li> 
                  <li><a href="/gimnasios">Gimnasios</a></li> 
              </ul>
          </div>
            <ul className='user'>
              <li style={{backgroundColor: '#000'}}><ModalWindow/></li>
            </ul>
        </nav>
        <MenuDesplegable/>
    </div>
  )
}
