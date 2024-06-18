import '../Styles/Profile Details.css';
import dp from '../Images/dp.png'
import x from '../Images/X logo.png'
import discord from  '../Images/Discord logo.png'
import Room from './Room.js'

function Profile_Details(props) {
  return (
    <div className="profile-details">
        <div className='profile-container'>
            <div className='profile-pic-container'>
                <div className='gradient-border'>
                    <img class='dp' src = {dp}/>
                </div>
            </div>
            <div className='profile-details-container'>
                <p>AKIRA.PILLED</p>
                <p>sdcsd 34ddff</p>
                <div className='social-links'>
                    <img className='x-logo' src={x}/>
                    <img className='discord-logo' src={discord}/>
                </div>
            </div>
            
        </div>

    </div>
  );
}

export default Profile_Details;