import React from "react";
import Cards from "../Ui/Cards";

const CardLeg = () => {
    const data = [
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutina Intensa y Matadora de Pierna',
            description: 'gymvirtual'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutinas para Piernas en Casa',
            description: 'Chuy Almada'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Destruye Piernas',
            description: 'Chuy Almada'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutina Perfecta de Piernas (SETS y Repetociones)',
            description: 'ATHLEAN-X Español'
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

export default CardLeg;