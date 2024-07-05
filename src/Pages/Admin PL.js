import '../Styles/Admin_PL.css'
import Navbar from "../Components/Admin Navbar";
import Sidebar from "../Components/Admin Sidebar";
import Footer from "../Components/Admin Footer";
import React, { useState } from 'react';


function AdminPL() {
    const [selectedDate, setSelectedDate] = useState('');
    const handleChange = (event) => {
        setSelectedDate(event.target.value);
      };
    return (
        <div className="PL-container">
            <Navbar />
            <Sidebar />
            <div className="PL-content">
                <div className="PL-box">
                    <p>gas fee spent on rooms :</p>
                    <p>polygon:</p>
                    <p>eth :</p>
                    <p>bnb :</p>
                    <p>base:</p>
                    <p>blast:</p>
                </div>
                <div className="PL-box">
                    <p>24hrs daily profit</p>
                    <p>rooms created :</p>
                    <p>profit % of rooms :</p>
                    <p>amount received :</p>
                </div>
                <div className="PL-box">
                <input type="date" value={selectedDate} onChange={handleChange} />
                    <p>monthly profit %:</p>
                    <p>yearly profit %:</p>
                    <p>daily profit % received :</p>
                </div>
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
}

export default AdminPL;