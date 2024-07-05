import '../Styles/Admin_Popup.css'
import Navbar from "../Components/Admin Navbar";
import Sidebar from "../Components/Admin Sidebar";
import Footer from "../Components/Admin Footer";
import React, { useState } from 'react';


function AdminPopup() {
    const [to, SetTo] = useState('');
    const [head, SetHead] = useState('');
    const [image, SetImage] = useState('');
    const [text, SetText] = useState('');

    const handleToChange = (event) => SetTo(event.target.value);
    const handleHeadChange = (event) => SetHead(event.target.value);
    const handleImageChange = (event) => SetImage(event.target.value);
    const handleTextChange = (event) => SetText(event.target.value);

    const [autoOpen, setAutoOpen] = useState(true);

    const [selectedDate, setSelectedDate] = useState('');
    const handleChange = (event) => {
        setSelectedDate(event.target.value);
      };

    return (
        <div className="popup-container">
            <Navbar />
            <Sidebar />
            <div className="popup-content">
                <div className='popup-create-edit'>
                    <button className='create-btn'>Create Pop-up message +</button>
                    <button className='edit-btn'>Edit message</button>
                </div>
                <div className='popup-message'>
                    <div className='popup-message-header'>Pop-up message:</div>
                    <div className='popup-to'>
                        <label htmlFor="to">To:</label>
                        <input type="text" id="to" name="to" value={to} onChange={handleToChange} />
                    </div>
                    <div className='popup-heading'>
                        <label htmlFor="heading-popup">Heading:</label>
                        <input type="text" id="heading-popup" name="heading-popup" value={head} onChange={handleHeadChange} />
                    </div>
                    <div className='popup-image'>
                        <label htmlFor="image-popup">Image:</label>
                        <input type="text" id="image-popup" name="image-popup" value={image} onChange={handleImageChange} />
                    </div>
                    <div className='popup-text'>
                        <label htmlFor="text-popup">Text:</label>
                        <input type="text" id="text-popup" name="text-popup" value={text} onChange={handleTextChange} />
                    </div>
                </div>
                <div className='popup-schedule'>
                    <div className='label-schedule'>Pop-up: Now </div>
                    <input type="checkbox" checked={autoOpen} onChange={(e) => setAutoOpen(e.target.checked)} />
                    <div> or </div>
                    <input type="date" value={selectedDate} onChange={handleChange} />
                </div>
                <div className='popup-create-cancel'>
                    <button className='popup-create'>Create Message</button>
                    <button className='popup-cancel'>cancel</button>
                </div>
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
}

export default AdminPopup;