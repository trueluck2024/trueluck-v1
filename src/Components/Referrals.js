import React, { useState } from 'react';
import '../Styles/Referrals.css'
import link_img from '../Images/link.png'
import Referral_User from './Referral User';

function Referrals(){

    const [link, setLink] = useState('');

    const generateLink = () => {
        const newLink = 'https://example.com/referral?code=123456';
        setLink(newLink);
    }

    return(
        <div className='Referrals'>
            <div className='generate-link-container'>
                <p className='generate-text'>Generate Link:</p>
                <div className='link-container'>
                    <input type="text" value={link} readOnly className="link-input"/>
                    <button onClick={generateLink} className="link-button">
                        <img className='link-img' src={link_img}/>
                    </button>
                </div>
            </div>
            <div className='overview-container'>
                <div className='top-container'>
                    <div className="overview">Overview:</div>
                </div>
                <div className='bottom-container'>
                    <div className='total-referrals'>Total referrals : 23</div>
                    <div className='total-earned'>Total earned : <span className='green-text'>$152</span></div>
                </div>
            </div>
            <div className='mobile-options-container'>
                <div className='options-container'>
                    <div className='option'>Participants</div>
                    <div className='option'>Activity</div>
                </div>
            </div>
            <div className='referrals-users'>
                <Referral_User/>
                <Referral_User/>
                <Referral_User/>
                <Referral_User/>
            </div>
        </div>
    );

}

export default Referrals;