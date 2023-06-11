import React, { useState } from 'react';
import CardLeg from './CardLeg';
import CardLegs from './CardLegs';
import CardGluteus from './CardGluteus';
import CardGluteu from './CardGluteu';
import CardArms from './CardArms';
import CardArm from './CardArm';
import CardBacks from './CardBacks';
import CardBack from './CardBack';

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
    { id: 1, name: 'Pierna', cards: [<div><CardLeg/><CardLegs/></div>] },
    { id: 2, name: 'Brazo', cards: [<div><CardArms/><CardArm/></div>] },
    { id: 3, name: 'Espalda', cards: [<div><CardBacks/><CardBack/></div>] },
    { id: 4, name: 'Gluteo', cards: [<div><CardGluteus/><CardGluteu/></div>] }
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