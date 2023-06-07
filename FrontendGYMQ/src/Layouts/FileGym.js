import React from "react";
import Target from "../Ui/Target";

const FileGym = () => {
    const data = [
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1685650470/Imagen_zpfwlu.png',
            textName: 'Smart Power Gym',
            direction: 'Cl. 23 #37-25',
            imageGym: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1685650763/Imagen01_n6czw7.jpg'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1685650470/Imagen_zpfwlu.png',
            textName: 'Smart Power Gym',
            direction: 'Cl. 23 #37-25',
            imageGym: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1685650763/Imagen01_n6czw7.jpg'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1685650470/Imagen_zpfwlu.png',
            textName: 'Smart Power Gym',
            direction: 'Cl. 23 #37-25',
            imageGym: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1685650763/Imagen01_n6czw7.jpg'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1685650470/Imagen_zpfwlu.png',
            textName: 'Smart Power Gym',
            direction: 'Cl. 23 #37-25',
            imageGym: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1685650763/Imagen01_n6czw7.jpg'
        },
        {
            image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1685650470/Imagen_zpfwlu.png',
            textName: 'Smart Power Gym',
            direction: 'Cl. 23 #37-25',
            imageGym: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1685650763/Imagen01_n6czw7.jpg'
        },
    ]

    return (
        <div className="card-list">
            {data.map((cardData, index) => (
                <Target
                    key={index}
                    image={cardData.image}
                    textName={cardData.textName}
                    direction={cardData.direction}
                    imageGym={cardData.imageGym}
                />
            ))}
        </div>
    )
}

export default FileGym;