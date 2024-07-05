import '../Styles/Admin_Transaction.css'
import Navbar from "../Components/Admin Navbar";
import Sidebar from "../Components/Admin Sidebar";
import Footer from "../Components/Admin Footer";
import User from '../Components/Admin User'
import jsonData from '../Data.json';
import React, { useState } from 'react';


function AdminTransaction() {
    const currentUsers = jsonData.Statistics_Overview.Users
    const [search, SetSearch] = useState('');
    const handleToChange = (event) => SetSearch(event.target.value);
    return (
        <div className="Transaction-container">
            <Navbar />
            <Sidebar />
            <div className="Transaction-content">
                <div className='search'>
                    <label htmlFor="search-trans">Search </label>
                    <input type="text" id="search-trans" name="search-trans" value={search} onChange={handleToChange} />
                </div>

                <div className='transaction-headings'>
                    <div className='users'>
                        <p>USERS</p>
                    </div>
                    <div className='transaction-hash'>
                        <p>TRANSACTION HASH</p>
                    </div>
                    <div className='chain'>
                        <p>CHAIN</p>
                    </div>
                    <div className='amount'>
                        <p>AMOUNT</p>
                    </div>
                </div>
                {currentUsers.map((user, index) => (
                    <User key={index} {...user} />
                ))}
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}

export default AdminTransaction;