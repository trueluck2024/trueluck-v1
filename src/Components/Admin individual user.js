import '../Styles/Admin Individual User.css';
import jsonData from'../Data.json';

function AdminIndividualUser(props) {
    return (
        <div className='Admin-Individual-User'>
            <div className='date'>{props.date}</div>
            <div className='from'>{props.from}</div>
            <div className='wallet'>{props.wallet}</div>
            <div className='active'>{props.active}</div>
            <div className='ended'>{props.ended}</div>
            <div className='total'>{props.total}</div>
            <div className='age'>{props.age}</div>
            <div className='status'>{props.status}</div>   
        </div>
    );
  }
  
  export default AdminIndividualUser;