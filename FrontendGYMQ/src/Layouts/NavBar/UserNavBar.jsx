import React, { useState } from 'react'
import MenuDesplegable from '../MenuDesplegable'
import PerfilUsuario from '../PerfilDesplegable'

export const UserNavBar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div>
        <nav className='navBar'>
          <div className={`navBarList ${showMenu ? 'show' : ''}`}>
              <ul className='navBarItems'>
                  <li style={{backgroundColor: '#FFFF00'}}><a style={{color: '#000'}} href="/Home">Inicio</a></li>
                  <li><a href="/Usuario-Rutinas">Rutinas</a></li> 
                  <li><a href="/Usuario-Tienda">Tienda</a></li> 
                  <li><a href="/Usuario-Gimnasios">Gimnasios</a></li> 
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