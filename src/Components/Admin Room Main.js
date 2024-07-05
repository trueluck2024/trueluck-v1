import '../Styles/Admin_Room_Main.css'
import Navbar from "../Components/Admin Navbar";
import Sidebar from "../Components/Admin Sidebar";
import Footer from "../Components/Admin Footer";
import React, { useState } from 'react';
import Rooms_Available from '../Components/Admin Rooms.js';
import jsonData from '../Data.json';
import { useNavigate } from "react-router-dom";


function AdmiRoomMain() {
    const navigate = useNavigate();
  
    return (
        <div className="Room-Main-container">
            <Navbar />
            <Sidebar />
            <div className="Room-content">
            <button className='create-new-room' onClick={() => navigate("/CreateRoom")}>Create New Room +</button>
            <Rooms_Available {...jsonData.Rooms}/>
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
}

export default AdmiRoomMain;