import React from "react";
import Cards from "../Ui/Cards";

const CardList = () => {
    const cardsData = [
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutina de Brazos con Mancuernas',
            description: 'gymvirtual'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutina Piernas Asesinas',
            description: 'GymTopz'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutina de Espalda',
            description: 'GymTopz'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutina de Gluteos',
            description: 'gymvirtual'
        }
    ]

    return (
        <div className="card-list">
            {cardsData.map((cardData, index) => (
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

export default CardList;