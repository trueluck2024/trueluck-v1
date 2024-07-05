import '../Styles/Admin_User.css';
import profile_pic from '../Images/profile-pic.png'

function AdminUser(props) {
    return (
      <div className="Admin-component">
          <div className='users'>
            <img className='profile-pic' src={profile_pic} alt="Profile" />
            <p>{props.username}</p>
          </div>
          <div className='transaction-hash'>
              <p className='transaction-site'>{props.transactionSite}</p>
              <p className='transaction-id'>{props.transactionId}</p>
          </div>
          <div className='chain'>
              <p>{props.chain}</p>
          </div>
          <div className='amount'>
              <p>{props.amount}</p>
          </div>
      </div>
    );
  }
  
  export default AdminUser;