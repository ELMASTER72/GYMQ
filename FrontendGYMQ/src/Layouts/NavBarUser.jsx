import React, { useState } from 'react'
import MenuDesplegable from './MenuDesplegable'
import PerfilUsuario from './PerfilDesplegable'

export const NavBarUser = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div>
        <nav className='menu'>
          <div className={`menuNav ${showMenu ? 'show' : ''}`}>
              <ul className='nav_bar'>
                  <li style={{backgroundColor: '#FFFF00'}}><a style={{color: '#000'}} href="/home">Inicio</a></li>
                  <li><a href="/">Planes</a></li>
                  <li><a href="/routinesuser">Rutinas</a></li> 
                  <li><a href="/">Tienda</a></li> 
                  <li><a href="/">Gimnasios</a></li> 
              </ul>
          </div>
            <ul className='user_menu'>
              <li><PerfilUsuario/></li>
            </ul>
        </nav>
        <MenuDesplegable/>
    </div>
  )
}