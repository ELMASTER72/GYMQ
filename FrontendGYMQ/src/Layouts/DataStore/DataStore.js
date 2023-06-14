import React, { useState } from 'react';
import StoreCards from '../../Ui/Cards/StoreCards';

const DataStore = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);   
  const [showCartModal, setShowCartModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showSecondModal, setShowSecondModal] = useState(false);

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
    setTotalPrice(totalPrice + item.price);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
    setTotalPrice(totalPrice - item.price);
  };

  const openCartModal = () => {
    setShowCartModal(true);
  };

  const closeCartModal = () => {
    setShowCartModal(false);
  };

  const openSecondModal = () => {
    setShowSecondModal(true);
  };

  const closeSecondModal = () => {
    setShowSecondModal(false);
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
      mandarCarrito: '',
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
      mandarCarrito: '',
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
      price: 23900,
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 19,
      title: 'Tarjeta 19',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 19',
      price: 19900,
      image: 'https://res.cloudinary.com/duxhiuugx/image/upload/v1686584437/resilience-cbd-J9yRqbAuPTU-unsplash_eepjhw.jpg',
    },

    {
      id: 20,
      title: 'Tarjeta 20',
      category: 'Categoría 3',
      description: 'Esta es la descripción de la Tarjeta 20',
      price: 20000,
      mandarCarrito: '',
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
            <button className='buttonCart' onClick={openCartModal} >
              <svg className='iconCart' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
              </svg>
            </button> 
            {showCartModal && (
              <div className='cartModal'>
                <div className='cartModalContent'>
                  <h3>Carrito de Compras</h3>
                  {cartItems.length > 0 ? (
                  <ul className='contentModal'>
                    {cartItems.map((card) => (
                      <StoreCards
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        price={card.price}
                        image={card.image}
                        mandarCarrito={() => removeFromCart(card)}
                      />
                    ))}
                  </ul>
                ) : (
                  <p>El carrito está vacío.</p>
                )}
                <p>Precio total: {totalPrice}</p>
                <div className='cartsButton'>
                  <a className='buy' onClick={openSecondModal}>COMPRAR!</a>
                  <button className='buttonCart' onClick={closeCartModal}>Cerrar</button>
                </div>
              </div>
            </div>
            )}
            {showSecondModal && (
              <div className="cartModal">
                <div className="cartModalContent">
                  <h3>Compras GYMQ</h3>
                  <div className='field'>
                    <svg className='input-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                    </svg>
                    <input className='input-field' placeholder='Nombre y Apellidos'/>
                  </div>
                  <div style={{marginTop:'1rem'}} className="field">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
                    </svg>
                    <input autocomplete="off" placeholder="Direccion" className="input-field" type="text"/>
                  </div>
                  <div style={{marginTop:'1rem'}} className="field">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-2-front" viewBox="0 0 16 16">
                      <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                      <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <input autocomplete="off" placeholder="Numero de Tarjeta" className="input-field" type="text"/>
                  </div>
                  <div style={{marginTop:'1rem'}} className="field">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                    </svg>
                    <input autocomplete="off" placeholder="Fecha de Vencimiento" className="input-field" type="date"/>
                  </div>
                  <div style={{marginTop:'1rem'}} className="field">
                      <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                      </svg>
                      <input autocomplete="off" placeholder="Codigo de Seguridad" className="input-field" type="text"/>
                  </div>
                  <p>Precio total: {totalPrice}</p>
                  <div className='cartsButton'>
                    <a className='buy'>PAGAR!</a>
                    <button className='buttonCart' onClick={closeSecondModal}>Cerrar</button>
                </div>
                </div>
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
                  mandarCarrito={() => addToCart(card)}
                />
              ))
            ) : (
              <p>No hay tarjetas disponibles.</p>
            )}
          </div>
        </div>
      )}
      
    </div>
  );
};

export default DataStore;

