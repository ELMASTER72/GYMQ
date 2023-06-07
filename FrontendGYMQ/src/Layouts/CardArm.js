import React from "react";
import Cards from "../Ui/Cards";

const CardArm = () => {
    const data = [
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutina de Brazos, Triceps y Pectorales',
            description: 'Fausto Murillo'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutina Brazos + Hombros',
            description: 'Europa Sport Nutrition'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutina de Brazos (Biceps & Triceps)',
            description: 'GymTopz'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1684872003/gymA_txhmrr.jpg',            
            title: 'Rutina de Brazos con Pesas',
            description: 'gymvirtual'
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

export default CardArm;