import React from "react";
import Cards from "../Ui/Cards";

const CardBacks = () => {
    const data = [
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Tonificar Espalda',
            description: 'Europa Sport Nutrition'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutina de Espalda Grande y Musculos Laterales',
            description: 'BUFF Academy'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutina Perfecta de Espalda',
            description: 'ATHLEAN-X Español'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutina de Espalda y Hombros (super SETS)',
            description: 'Gym Topz'
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

export default CardBacks;