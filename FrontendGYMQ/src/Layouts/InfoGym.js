import React, { useState } from 'react';
import ImageCarousel from './ImageZoom';
import Informacion from './Informacion';

const InfoGym = () => {
  const [mostrarInformacion, setMostrarInformacion] = useState(false);

  const handleClick = () => {
    setMostrarInformacion(!mostrarInformacion); // Cambia el estado para mostrar u ocultar la información al hacer clic
  };

    const images = [
        {
          src: 'https://res.cloudinary.com/drnmx4xgd/image/upload/v1680128439/logo_yp653j.jpg',
          alt: 'Descripción de la imagen 1',
        },
        {
          src: 'https://res.cloudinary.com/drnmx4xgd/image/upload/v1680128439/logo_yp653j.jpg',
          alt: 'Descripción de la imagen 2',
        },
        // Agrega más objetos de imagen según sea necesario
      ];

  return (
    <div className="gyms">
      <div>
        <img className='imgGym' src='https://res.cloudinary.com/duxhiuugx/image/upload/v1685650470/Imagen_zpfwlu.png'/> 
      </div>
      <div className='informationGym'>
        <h2>Smart Power Gym</h2>
        <div className='dateGym'>
            <p>322 6317101</p>
            <p><a style={{textDecoration: 'none', color: 'black'}} href='https://m.facebook.com/p/Smartpowergym-100065674021963/'>Facebook</a></p>
            <p><a style={{textDecoration: 'none', color: 'black'}} href='https://www.instagram.com/smartpowergym/?hl=es'>Instagram</a></p>
        </div>
        <div className='schedule'>
          <button onClick={handleClick}>Mostrar información</button>
          <Informacion mostrar={mostrarInformacion} />
        </div>

            <div className="imagePlace">
                <ImageCarousel images={images} />
            </div>

            <div className="worker">
                <div className='workerGym'>
                    <img src='https://res.cloudinary.com/drnmx4xgd/image/upload/v1685402217/ImagenE_uxiyfq.png'/>
                    <h3>Entrenador</h3>
                    <h3>Horario: Mañana</h3>
                    <p>xxx-xxx-xxx</p>
                </div>
                <div className='workerGym'>
                    <img src='https://res.cloudinary.com/drnmx4xgd/image/upload/v1685402217/ImagenE_uxiyfq.png'/>
                    <h3>Entrenador</h3>
                    <h3>Horario: Tarde</h3>
                    <p>xxx-xxx-xxx</p>
                </div>
                <div className='workerGym'>
                    <img src='https://res.cloudinary.com/drnmx4xgd/image/upload/v1685402217/ImagenE_uxiyfq.png'/>
                    <h3>Entrenador</h3>
                    <h3>Horario: Noche</h3>
                    <p>xxx-xxx-xxx</p>
                </div>
            </div>
      </div>
    </div>
  );
}

export default InfoGym;
