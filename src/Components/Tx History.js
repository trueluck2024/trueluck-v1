import '../Styles/Tx History.css';
import '../Styles/User.css';
import '../Styles/Statistics Overview.css';
import User from './Tx-History User'

function Tx_History(props){
    console.log(props.Users);

    return(
        <div className='TX-History'>
            <div className="Funds-Entered-Container">
                <div className='Funds'>FUNDS ENTERED: <span className='EnteredNumerical'>$5000</span></div>
            </div>
            <div className='transactions-container'>
                <div className='tx-history-transaction-headings'>
                    <div className='tx-history-transaction-hash'>TRANSACIION HASH</div>
                    <div className='value'>VALUE</div>
                    <div className='from'>FROM</div>
                    <div className='age'>AGE</div>
                    <div className='view'>VIEW</div>
                </div>
                {props.Users.map((user, index) => (<User key={index} {...user} />))}
            </div>
        </div>
    );

}

export default Tx_History;