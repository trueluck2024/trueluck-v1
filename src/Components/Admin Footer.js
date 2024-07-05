import '../Styles/Admin_Footer.css';
import React, { useState } from 'react';

function AdminFooter() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className="Admin-Footer">
            <select value={selectedOption} onChange={handleChange}>
                <option value="">Gas Fees</option>
                <option value="option1">User 1</option>
                <option value="option2">User 2</option>
                <option value="option3">User 3</option>
            </select>
            <div className='Value'> Value : {selectedOption} </div>
        </div>
    )
}

export default AdminFooter