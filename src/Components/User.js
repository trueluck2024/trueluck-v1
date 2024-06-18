import '../Styles/User.css';
import profile_pic from '../Images/profile-pic.png'
import eye from '../Images/eye.png'

function User(props) {
  return (
    <div className="user-component">
        <div className='users'>
          <img className='profile-pic' src={profile_pic} alt="Profile" />
          <p>{props.username}</p>
        </div>
        <div className='transaction-hash'>
            <p className='transaction-site'>{props.transactionSite}</p>
            <p className='transaction-id'>{props.transactionId}</p>
        </div>
        <div className='value'>
            <p>{props.value} ETH</p>
        </div>
        <div className='from'>
            <p>{props.from}</p>
        </div>
        <div className='age'>
            <p>{props.age}</p>
        </div>
        <div className='view'>
            <img className='eye' src={eye}/>
        </div>
    </div>
  );
}

export default User;