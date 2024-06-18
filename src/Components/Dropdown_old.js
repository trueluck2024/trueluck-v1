import React, { useState } from 'react';
import '../Styles/Dropdown.css';
import eth from '../Images/icon-eth.png';
import drop from '../Images/icon-dropdown.png';
import polygon from '../Images/polygon.png'


function Dropdown() {
    const itemImageMap = {
        'ETH': eth,
        'Polygon': polygon
    };

    const [dropdown, setDropdown] = useState(false);
    const [selectedItem, setSelectedItem] = useState('ETH');
    const [selectedImage, setSelectedImage] = useState(eth);
    

    const toggleDropdown = () => {
        setDropdown(!dropdown);
      };
    
    const handleItemClick = (item) => {
        setSelectedItem(item);
        setSelectedImage(itemImageMap[item]);
        setDropdown(false);
    };


  return (
    <div className={`Dropdown ${dropdown ? '' : 'menu-hidden'}`}>
        <div className="dropdown-container">
            <img src={selectedImage} alt='eth' className='eth' />
            <p className='dropdown-text'>{selectedItem}</p>
            <img src={drop} alt='drop' onClick={toggleDropdown} className={`drop ${dropdown ? 'opendropdown' : ''}`} />
        </div>
        <ul className="menu-dropdown">
            <li onClick={() => handleItemClick('ETH')}>ETH</li>
            <li onClick={() => handleItemClick('Polygon')}>Polygon</li>
            <li onClick={() => handleItemClick('BNB')}>BNB</li>
            <li onClick={() => handleItemClick('Base')}>Base</li>
            <li onClick={() => handleItemClick('Blast')}>Blast</li>
        </ul>
    </div>
  );
}

export default Dropdown;