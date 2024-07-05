import '../Styles/Admin_Navbar.css';
import React, { useState } from 'react';

function AdminNavbar() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className="Admin-Navbar">
            <div className='topdiv'>
                <select value={selectedOption} onChange={handleChange}>
                    <option value="">Admin</option>
                    <option value="option1">User 1</option>
                    <option value="option2">User 2</option>
                    <option value="option3">User 3</option>
                </select>
            </div>
            <div className='bottomdiv'></div>
        </div>
    )
}

export default AdminNavbar