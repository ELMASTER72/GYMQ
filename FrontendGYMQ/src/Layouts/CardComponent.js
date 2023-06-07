import React, { useState } from 'react';
import CardArm from './CardArm';
import CardArms from './CardArms';
import CardBack from './CardBack';
import CardBacks from './CardBacks';
import CardGluteu from './CardGluteu';
import CardGluteus from './CardGluteus';
import CardLeg from './CardLeg';
import CardLegs from './CardLegs';

const CardComponent = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const renderCards = () => {
    // Aquí puedes reemplazar "data" con tu propio conjunto de datos de tarjetas
    const data = [
      { id: 1, buttonId: 'button1', content: <div><div className='store-cards'>
        <CardArm/>
      </div>
      <div className='store-cards'>
        <CardArms/>
      </div></div> },
      { id: 2, buttonId: 'button2', content: <div><div className='store-cards'>
      <CardBack/>
    </div>
    <div className='store-cards'>
      <CardBacks/>
    </div></div> },
      { id: 3, buttonId: 'button3', content: <div><div className='store-cards'>
      <CardGluteu/>
    </div>
    <div className='store-cards'>
      <CardGluteus/>
    </div></div> },
      { id: 4, buttonId: 'button4', content: <div><div className='store-cards'>
      <CardLeg/>
    </div>
    <div className='store-cards'>
      <CardLegs/>
    </div></div> },
    ];

    // Filtra las tarjetas basadas en el botón seleccionado
    const filteredCards = data.filter((card) => card.buttonId === selectedButton);

    return filteredCards.map((card) => (
      <div key={card.id}>{card.content}</div>
    ));
  };

  return (
    <>
    <div className='buttons'>
      <button className='btns' onClick={() => handleButtonClick('button1')}>Brazo</button>
      <button className='btns' onClick={() => handleButtonClick('button2')}>Espalda</button>
      <button className='btns' onClick={() => handleButtonClick('button3')}>Glúteo</button>
      <button className='btns' onClick={() => handleButtonClick('button4')}>Pierna</button>
    </div>
      {renderCards()}
    </>
  );
};

export default CardComponent;
