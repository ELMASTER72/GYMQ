import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Carousel showThumbs={false} onClickItem={openModal}>
        {images.map((image, index) => (
          <div key={index}>
            <img className='place' src={image.src} alt={image.alt} />
          </div>
        ))}
      </Carousel>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <img 
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
