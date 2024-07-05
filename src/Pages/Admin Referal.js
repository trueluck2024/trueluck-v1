import '../Styles/Admin_Referal.css'
import Navbar from "../Components/Admin Navbar";
import Sidebar from "../Components/Admin Sidebar";
import Footer from "../Components/Admin Footer";
import React, { useState } from 'react';
import User from '../Components/Admin User'
import jsonData from '../Data.json';



function AdminReferal() {
    const currentUsers = jsonData.Statistics_Overview.Users;
    const [searchReferral, SetSearchReferral] = useState('');
    const [banReferral, SetBanReferral] = useState('');

    const handleToChange = (event) => SetSearchReferral(event.target.value);
    const handleBanChange = (event) => SetBanReferral(event.target.value);

    return (
        <div className="Referal-container">
            <Navbar />
            <Sidebar />
            <div className="Referal-content">
                <div className='search'>
                    <label htmlFor="search-referral">Search </label>
                    <input type="text" id="search-referral" name="search-referral" value={searchReferral} onChange={handleToChange} />
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
                <div className='scroll-div'>
                    {currentUsers.map((user, index) => (
                        <User key={index} {...user} />
                    ))}
                </div>
                <div className='bottom-div-ban'>
                    <div className='ban'>
                        <label htmlFor="ban-referral">Ban </label>
                        <input type="text" id="ban-referral" name="ban-referral" value={banReferral} onChange={handleBanChange} />
                    </div>
                    <button className='confirm-btn'>Confirm</button>
                </div>
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
}

export default AdminReferal;