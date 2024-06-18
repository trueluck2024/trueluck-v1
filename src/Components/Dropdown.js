import React, { useState } from 'react';
import '../Styles/Dropdown.css';
import eth from '../Images/icon-eth.png';
import drop from '../Images/icon-dropdown.png';
import polygon from '../Images/polygon.png'
import bnb from '../Images/bnb.png'
import base from '../Images/base.png'
import blast from '../Images/blast.svg'



function Dropdown({ dropdown, selectedItem, selectedImage, toggleDropdown, handleItemClick }) {
    const itemImageMap = {
        'ETH': eth,
        'Polygon': polygon,
        'BNB' : bnb,
        'Base' : base,
        'Blast' : blast
    };


  return (
    <div className="Dropdown">
        <div className="dropdown-container">
            <img src={itemImageMap[selectedImage]} alt='eth' className='eth' />
            <p className='dropdown-text'>{selectedItem}</p>
            <img src={drop} alt='drop' onClick={toggleDropdown} className={`drop ${dropdown ? 'opendropdown' : ''}`} />
        </div>
        <div className={`menu-dropdown ${dropdown ? 'open' : ''}`}>
            <div onClick={() => handleItemClick('Polygon')} className='option'><img src={polygon} alt='eth' className='eth' /><span>Polygon</span></div>
            <div onClick={() => handleItemClick('ETH')} className='option'><img src={eth} alt='eth' className='eth' /><span>ETH</span></div>
            <div onClick={() => handleItemClick('BNB')} className='option'><img src={bnb} alt='eth' className='eth' /><span>BNB</span></div>
            <div onClick={() => handleItemClick('Base')} className='option'><img src={base} alt='eth' className='eth' /><span>Base</span></div>
            <div onClick={() => handleItemClick('Blast')} className='option'><img src={blast} alt='eth' className='eth' /><span>Blast</span></div>
        </div>
    </div>
  );
}

export default Dropdown;