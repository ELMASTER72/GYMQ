import React, { useState } from 'react';
import StoreCards from '../../Ui/Cards/StoreCards';

const DataStore = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
    setIsOpen(false);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  const cards = [

    // Ropa
    {
      id: 1,
      title: 'Tarjeta 1',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 1',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },
    
    {
      id: 2,
      title: 'Tarjeta 2',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 2',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 3,
      title: 'Tarjeta 3',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 3',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 4,
      title: 'Tarjeta 4',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 4',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 5,
      title: 'Tarjeta 5',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 5',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 6,
      title: 'Tarjeta 6',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 6',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 7,
      title: 'Tarjeta 7',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 7',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 8,
      title: 'Tarjeta 8',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 8',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 9,
      title: 'Tarjeta 9',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 9',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 10,
      title: 'Tarjeta 10',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 10',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 11,
      title: 'Tarjeta 11',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 11',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 12,
      title: 'Tarjeta 12',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 12',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 13,
      title: 'Tarjeta 13',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 13',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 14,
      title: 'Tarjeta 14',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 14',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 15,
      title: 'Tarjeta 15',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 15',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 16,
      title: 'Tarjeta  16',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 16',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 17,
      title: 'Tarjeta 17',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 17',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 18,
      title: 'Tarjeta 18',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 18',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 19,
      title: 'Tarjeta 19',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 19',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 20,
      title: 'Tarjeta 20',
      category: 'Categoría 1',
      description: 'Esta es la descripción de la Tarjeta 20',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    // Accesorios
    {
      id: 1,
      title: 'Tarjeta 1',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 1',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },
    
    {
      id: 2,
      title: 'Tarjeta 2',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 2',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 3,
      title: 'Tarjeta 3',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 3',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 4,
      title: 'Tarjeta 4',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 4',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 5,
      title: 'Tarjeta 5',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 5',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 6,
      title: 'Tarjeta 6',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 6',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 7,
      title: 'Tarjeta 7',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 7',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 8,
      title: 'Tarjeta 8',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 8',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 9,
      title: 'Tarjeta 9',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 9',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 10,
      title: 'Tarjeta 10',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 10',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 11,
      title: 'Tarjeta 11',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 11',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 12,
      title: 'Tarjeta 12',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 12',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 13,
      title: 'Tarjeta 13',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 13',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 14,
      title: 'Tarjeta 14',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 14',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 15,
      title: 'Tarjeta 15',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 15',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 16,
      title: 'Tarjeta  16',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 16',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 17,
      title: 'Tarjeta 17',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 17',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 18,
      title: 'Tarjeta 18',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 18',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 19,
      title: 'Tarjeta 19',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 19',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 20,
      title: 'Tarjeta 20',
      category: 'Categoría 2',
      description: 'Esta es la descripción de la Tarjeta 20',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    // Energizantes
    {
      id: 1,
      title: 'Tarjeta 1',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 1',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },
    
    {
      id: 2,
      title: 'Tarjeta 2',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 2',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 3,
      title: 'Tarjeta 3',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 3',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 4,
      title: 'Tarjeta 4',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 4',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 5,
      title: 'Tarjeta 5',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 5',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 6,
      title: 'Tarjeta 6',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 6',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 7,
      title: 'Tarjeta 7',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 7',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 8,
      title: 'Tarjeta 8',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 8',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 9,
      title: 'Tarjeta 9',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 9',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 10,
      title: 'Tarjeta 10',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 10',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 11,
      title: 'Tarjeta 11',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 11',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 12,
      title: 'Tarjeta 12',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 12',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 13,
      title: 'Tarjeta 13',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 13',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 14,
      title: 'Tarjeta 14',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 14',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 15,
      title: 'Tarjeta 15',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 15',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 16,
      title: 'Tarjeta  16',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 16',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 17,
      title: 'Tarjeta 17',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 17',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 18,
      title: 'Tarjeta 18',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 18',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 19,
      title: 'Tarjeta 19',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 19',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 20,
      title: 'Tarjeta 20',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 20',
      price: '000',
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },
  ];

  const filteredCards = cards.filter((card) => {
    if (selectedCategory && card.category !== selectedCategory) {
      return false;
    }
    if (searchQuery && !card.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="products">
      <div className='containerProducts'>
        <button className="mainButton" onClick={toggleDropdown}>Categorías</button>
            {selectedCategory && (
                <div className="searchProducts">
                <input
                    type="text"
                    className='input'
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Buscar..."
                />
                </div>
            )}
        </div>
      {isOpen && (
        <ul className="categorys">
          <li onClick={() => handleCategorySelect('Categoría 1')}>Ropa</li>
          <li onClick={() => handleCategorySelect('Categoría 2')}>Accesorios</li>
          <li onClick={() => handleCategorySelect('Categoría 3')}>Energizantes</li>
        </ul>
      )}
      {selectedCategory && (
        <div className="selectedCategory">
          <div className="selectedProducts">
            {filteredCards.length > 0 ? (
              filteredCards.map((card) => (
                <StoreCards
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  price={card.price}
                  image={card.image}
                  mandarCarrito={addToCart(card)}
                />
                  // <button onClick={() => addToCart(card)}>Agregar al carrito</button>
              ))
            ) : (
              <p>No hay tarjetas disponibles.</p>
            )}
          </div>
        </div>
      )}
      <div className="cart">
        <h3>Carrito de compras</h3>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <StoreCards
                key={index}
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
                mandarCarrito={removeFromCart(item)}
              />
            ))}
          </ul>
        ) : (
          <p>El carrito está vacío.</p>
        )}
      </div>
    </div>
  );
};

export default DataStore;

