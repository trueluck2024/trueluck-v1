 import '../Styles/Tx-History User.css';
import eye from '../Images/eye.png'

function TXHistoryUser(props) {
  return (
    <div className="tx-history-user">
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

export default TXHistoryUser;