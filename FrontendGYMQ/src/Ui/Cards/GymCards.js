import React from 'react'

const GymCards = ( {imagen, name, place, link} ) => {
    return (
        <div className='gymsLocation'>
            <div><img className='gymImagen' src={imagen} /></div>
            <div className='gymText'>
                <p className='h3'>{name}</p>
                <p className='p'>{place}</p>
                <div className='gymBox'>
                    <a href={link} className='span'>Investigar</a>
                </div>
            </div>
        </div>
    )
}

export default GymCards;