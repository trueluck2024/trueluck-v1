import '../Styles/Admin User Page.css';
import profile_pic from '../Images/profile-pic.png'
import jsonData from'../Data.json';
import AdminIndividualUser from '../Components/Admin individual user';
import Sidebar from "../Components/Admin Sidebar";
import Footer from "../Components/Admin Footer";
import Navbar from "../Components/Admin Navbar";

function AdminUserPage() {
    const users = jsonData.AdminUser;
    return (
        <div className='Admin-User-Page '>
            <Navbar/>
            <Sidebar/>  
            <div className='users-container'>
                <div className='users-headings'>
                    <div className='date'>Date</div>
                    <div className='from'>From</div>
                    <div className='wallet'>Wallet/Nickname</div>
                    <div className='active'>Active Rooms</div>
                    <div className='ended'>Ended</div>
                    <div className='total'>Total Spending</div>
                    <div className='age'>Age</div>
                    <div className='status'>Status</div>
                </div>
                {users.map((user, index) => (<AdminIndividualUser key={index} {...user} />))}
            </div>
        </div>
    );
  }
  
  export default AdminUserPage;