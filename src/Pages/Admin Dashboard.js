import '../Styles/Admin_Dashboard.css'
import jsonData from '../Data.json';
import Navbar from "../Components/Admin Navbar";
import Sidebar from "../Components/Admin Sidebar";
import Footer from "../Components/Admin Footer";
import AdminRoomsActive from "../Components/Admin Rooms Active"
import AdminTopUsers from "../Components/Admin Top Users"



function AdminDashboard() {
    return (
    <div className="dashboard-container">
        <Navbar />
        <Sidebar />
        <div className='Chart'> Volume Data Chart</div>
        <div className="main-content">
           
            <div className="content">
                <AdminTopUsers/>
                <AdminRoomsActive/>
            </div>
        </div>
        <div className="footer-container">
            <Footer />
        </div>
    </div>
    )
}

export default AdminDashboard