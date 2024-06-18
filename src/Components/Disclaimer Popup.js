import '../Styles/Disclaimer Popup.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Disclaimer_Popup({ hideDisclaimer }) {
    const [isClosing, setIsClosing] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            hideDisclaimer();
        }, 500);
    };
    return (
        <div className={`disclaimer_modal ${isClosing ? 'closing' : ''}`}>
            <div className={`disclaimer_modal_container ${isClosing ? 'closing' : ''}`}>
                <div className='disclaimer_modal_header'>
                    <button className="close-button" onClick={() => { navigate("/"); }}>X</button>
                </div>
                <div className='disclaimer_modal_content'>
                    This is sample content. This is sample content.This is sample content.This is sample content.This is sample content.
                    This is sample content. This is sample content.This is sample content.This is sample content.This is sample content.
                    This is sample content. This is sample content.This is sample content.This is sample content.This is sample content.
                    This is sample content. This is sample content.This is sample content.This is sample content.This is sample content.
                    This is sample content. This is sample content.This is sample content.This is sample content.This is sample content.
                    This is sample content. This is sample content.This is sample content.This is sample content.This is sample content.
                </div>
                <div className='disclaimer_modal_footer'>
                    <button className='yes-button' onClick={handleClose} >YES !! I AM In</button>
                    <button className='no-button' onClick={() => { navigate("/"); }}>NAH AH -_-</button>
                </div>
            </div>
        </div>
    );
}

export default Disclaimer_Popup;
