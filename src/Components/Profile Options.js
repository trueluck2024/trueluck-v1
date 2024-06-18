import React, { useState } from 'react';
import '../Styles/Profile Options.css';

const Profile_Options = ({ activeItem, handleItemClick }) => {
    return (
        <div className="Profile-Options">
            <div className={`nav-item ${activeItem === 'ROOMS ENTERED' ? 'active' : ''}`}
                onClick={() => handleItemClick('ROOMS ENTERED')}>
                ROOMS ENTERED
            </div>
            <div className={`nav-item ${activeItem === 'TX HISTORY' ? 'active' : ''}`}
                onClick={() => handleItemClick('TX HISTORY')}>
                TX HISTORY
            </div>
            <div className={`nav-item ${activeItem === 'ANALYTICS' ? 'active' : ''}`}
                onClick={() => handleItemClick('ANALYTICS')}>
                ANALYTICS
            </div>
            <div className={`nav-item ${activeItem === 'REFERRALS' ? 'active' : ''}`}
                onClick={() => handleItemClick('REFERRALS')}>
                REFERRALS
            </div>
        </div>
    );
}

export default Profile_Options;