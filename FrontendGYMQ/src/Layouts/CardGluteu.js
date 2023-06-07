import React from "react";
import Cards from "../Ui/Cards";

const CardGluteu = () => {
    const data = [
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Gluteos Perfectos sin Equipo',
            description: 'Chuy Almada'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Destruye Gluteos',
            description: 'gymvirtual'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutina de Gluteos Grandes y Bonitos',
            description: 'ATHLEAN-X Español'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutina de Gluteos Potente',
            description: 'Paula Suarez'
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

export default CardGluteu;