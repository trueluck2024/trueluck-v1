import '../Styles/Participants.css'
import Referral_User from './Referral User';
import { useState } from 'react';


function Participants() {
    const [isParticipants, setIsParticipants] = useState(true);

    return (
        <div className='Participants'>
            <div className='options-container'>
                <div
                    className='option'
                    onClick={() => setIsParticipants(false)}
                >
                    Participants
                </div>
                <div
                    className='option'
                    onClick={() => setIsParticipants(true)}
                >
                    Activity
                </div>
            </div>
            <div className='referrals-users'>
                <Referral_User isParticipants={isParticipants} />
                <Referral_User isParticipants={isParticipants} />
                <Referral_User isParticipants={isParticipants} />
                <Referral_User isParticipants={isParticipants} />
                <Referral_User isParticipants={isParticipants} />
                <Referral_User isParticipants={isParticipants} />
                <Referral_User isParticipants={isParticipants} />
                <Referral_User isParticipants={isParticipants} />
            </div>
        </div>
    );
}

export default Participants;