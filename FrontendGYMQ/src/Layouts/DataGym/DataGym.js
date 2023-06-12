import React, { useState } from 'react';
import GymCards from '../../Ui/Cards/GymCards';

const DataGym = () => {
    const [targets, setTargets] = useState([
        {   
            id: 1, 
            imagen: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name: 'Smart Power Gym', 
            place: 'Tesalónica Apartamentos, Cl. 23 #37-25, Armenia, Quindío',
            link: '/Informacion'
        },

        {
            id: 2, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Gym Body Fitnes', 
            place:'Carrera 15 # 17 - 56, Centro, Armenia, Quindío'
        },

        {
            id: 3, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Gimnasio CESAR GYM', 
            place:'Av. de los Camellos, Armenia, Quindío'
        },

        {
            id: 4, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Gimnasio ATLAS', 
            place:'Cl. 12 #16-31, Armenia, Quindío'
        },

        {
            id: 5, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Black Gym', 
            place:'Cra. 19 #9 Norte-31 a 9 Norte-169, Armenia, Quindío'
        },

        {
            id: 6, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Gimnasio super Gym', 
            place:'Cl. 15 Nte. #1218, Armenia, Quindío'
        },

        {
            id: 7, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Bodytech Armenia', 
            place:'Carrera 6 # 3 - 180, Centro comercial Calima, Armenia, Quindío'
        },

        {
            id: 8, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Gimnasio Smart Fit - Mocawa Plaza', 
            place:'Cra. 14 #9n54, Armenia, Quindío'
        },

        {
            id: 9, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'ACTIV GYM', 
            place:'Cra. 30 #30-146 a 30-170, Armenia, Quindío'
        },
        
        {
            id: 10, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Gimnasio smartlife', 
            place:'Cra. 18 #49-15, Armenia, Quindío'
        },

        {
            id: 11, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Fortex Muscle', 
            place:'Cra. 19 #45-56, Armenia, Quindío'
        },

        {
            id: 12, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Muscle Center Gym', 
            place:'# a 19-20, Cl. 45 #192, Armenia, Quindío'
        },
 
        {
            id: 13, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'CAPF Comfenalco', 
            place:'esquina, Carrera 23, calle 23, Armenia, Quindío'
        },
        
        {
            id: 14, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'GYM ANIMAL XTREME', 
            place:'Cl. 2 Nte. #18-177, Armenia, Quindío'
        },

        {
            id: 15, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Crossfit', 
            place:'Cl. 30, Armenia, Quindío'
        },

        {
            id: 16, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Muscle HardCore Gym', 
            place:'Cra. 26 # 33-28, Armenia, Quindío'
        },

        {
            id: 17, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Gimnasio Zona Fitness', 
            place:'Cra. 19 #35 Norte-376 a 35 Norte-622, Armenia, Quindío'
        },

        {
            id: 18, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Krossfit Gym', 
            place:'Armenia, Quindío'
        },

        {
            id: 19, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'LEGION ABOX', 
            place:'Carrera 12, Cl. 15 Nte. #15, Armenia, Quindío'
        },

        {
            id: 20, 
            imagen:'https://res.cloudinary.com/duxhiuugx/image/upload/v1686521594/humphrey-muleba-LOA2mTj1vhc-unsplash_gvos4x.jpg', 
            name:'Iron cross', 
            place:'Cra. 17 #10-59, Armenia, Quindío'
        },
    ])

    const [search, setSearch] = useState('');

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className='fitnessCard'>
            <input className='input' type='search' value={search} onChange={handleSearchChange} placeholder='Buscar gimnasios'/>

            <div className='gymCards'>
            {targets
                .filter((target) => target.name.toLowerCase().includes(search.toLowerCase()))
                .map((target) => (
                        <GymCards 
                            key={target.id} 
                            imagen={target.imagen} 
                            name={target.name} 
                            place={target.place}
                            link={target.link}
                        />
                        ))
            }
            </div>
        </div>
    )
}

export default DataGym;