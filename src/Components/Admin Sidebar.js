import '../Styles/Admin_Sidebar.css';
import { useNavigate } from "react-router-dom";
import dashboard from '../Images/Dashboard.png';
import room from '../Images/Room.png';
import user from '../Images/user.png';
import wallet from '../Images/wallet.png';
import popup from '../Images/popup.png';
import transaction from '../Images/transaction.png';
import referral from '../Images/referral.png';
import ProfitLoss from '../Images/Profit_Loss.png';
import Twitter from '../Images/twitterAdmin.png';
import Discord from '../Images/discordAdmin.png';


function AdminSidebar() {
    const navigate = useNavigate();
    const DiscordClick = () => {
      console.log("Discord is clicked")
      };
      const TwitterClick = () => {
        console.log("twitter is clicked")
      };
    return (
        <div className="Sidebar">
            <div className='Icons'>
                <img src={dashboard} alt='dashboard-icon' className='dashboard-icon' onClick={() => navigate("/Admin")}
                />
                <img src={room} alt='room-icon' className='room-icon' onClick={() => navigate("/AdminRoom")}
                />
                <img src={user} alt='user-icon' className='user-icon' onClick={() => navigate("/UserPage")}
                />
                <img src={wallet} alt='wallet-icon' className='wallet-icon' onClick={() => navigate("/Wallet")}
                />
                <img src={popup} alt='popup-icon' className='popup-icon' onClick={() => navigate("/Popup")}
                />
                <img src={transaction} alt='transaction-icon' className='transaction-icon' onClick={() => navigate("/Transaction")}
                />
                <img src={referral} alt='referral-icon' className='referral-icon' onClick={() => navigate("/Referral")}
                />
                  <img src={ProfitLoss} alt='profit-icon' className='profit-icon' onClick={() => navigate("/PL")}
                />
                <div className='Socialss'>
                <img src={Twitter} alt='twitter-icon' className='twitter-icon' onClick={TwitterClick}
                />
                 <img src={Discord} alt='discord-icon' className='discord-icon' onClick={DiscordClick}
                />
                </div>
             
            </div>
            <div className='Socials'></div>
        </div>
    )
}

export default AdminSidebar