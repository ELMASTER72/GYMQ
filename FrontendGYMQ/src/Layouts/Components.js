import React, { useState } from 'react';
import CardLeg from './CardLeg';
import CardGluteus from './CardGluteus';
import CardArms from './CardArms';
import CardBacks from './CardBacks';

const Components = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showFilteredResult, setShowFilteredResult] = useState(false);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option])
    }

    setShowFilteredResult(false);
  }

  const handleFilterClick = () => {
    if(selectedOptions.length > 0) {
      setShowFilteredResult(true);
    }
  }

  const options = [
    { id: 1, name: 'Pierna', cards: [<CardLeg/>] },
    { id: 2, name: 'Brazo', cards: [<CardArms/>] },
    { id: 3, name: 'Espalda', cards: [<CardBacks/>] },
    { id: 4, name: 'Gluteo', cards: [<CardGluteus/>] }
  ];
  
  return (
    <div>
      <div className='customSelected'>
        <div className='custom'>
          {options.map((option) => (
            <div className='checkbox' key={option.id} onClick={() => handleOptionClick(option.id)}>
              {option.name}
            </div>
          ))}
          </div>
          <div className='selecteds'>
            <ul className='selected'>
              {selectedOptions.map((optionId) => (
                <li key={optionId}>{options.find((option) => option.id === optionId)?.name}</li>
                ))}
                <button className='buttonCustom' onClick={handleFilterClick}>Filtrar</button>
            </ul>
          </div>
        </div>
      {showFilteredResult && (
        <div>
          {options
            .filter((option) => selectedOptions.includes(option.id))
            .flatMap((option) => option.cards)
            .map((card) => (
              <div key={card}>{card}</div>
            ))
          }
        </div>
      )}
    </div>
  );
  
}

export default Components;