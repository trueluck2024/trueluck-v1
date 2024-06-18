import '../Styles/Referral User.css'
import { useState } from 'react';
import profile_pic from '../Images/profile-pic.png'
import clock from '../Images/clock.png'
import ticket from '../Images/ticket.png'

function Referral_User({ isParticipants }) {
    return (
        <div className='Referral-User'>
            {isParticipants ? (
                <>
                    <div className='activity-user'>
                        <div className='users'>
                            <img className='profile-pic' src={profile_pic} alt="Profile" />
                            <p>Monkeyguy</p>
                        </div>
                        <div className='transaction-hash'>
                            <p className='transaction-site'>Polygon</p>
                            <p className='transaction-id'>98ys87dfha870hf8a0hdf78a23j880whef</p>
                        </div>
                        <div className='ticket-container'>
                            <p>29 </p>
                            <img className='ticket' src={ticket} alt="Ticket" />
                        </div>
                    </div>
                </>
            ) : (
                <>  
                    <div className='participant-user'>
                        <div className='users'>
                            <img className='profile-pic' src={profile_pic} alt="Profile" />
                            <p>Monkeyguy</p>
                        </div>
                        <div className='time'>
                            <img className='clock' src={clock} alt="Clock" />
                            <p>29 seconds ago</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Referral_User;