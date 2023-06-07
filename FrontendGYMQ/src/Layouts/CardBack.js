import React from "react";
import Cards from "../Ui/Cards";

const CardBack = () => {
    const data = [
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutina de Espalda',
            description: 'Gym Topz'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutina de Espalda',
            description: 'Entrena con Sergio Peinado'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Extermina tu Espalda',
            description: 'Chuy Almada'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutina de Espalda sin Pesas',
            description: 'Entrena con Sergio Peinado'
        }
    ]

    return (
        <div className="card-list">
            {data.map((cardData, index) => (
                <Cards
                    key={index}
                    image={cardData.image}
                    title={cardData.title}
                    description={cardData.description}
                />
            ))}
        </div>
    )
}

export default CardBack;