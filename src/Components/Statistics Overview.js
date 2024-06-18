import '../Styles/Statistics Overview.css';
import User from './User'
import React, { useState } from 'react';

function Statistics_Overview(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(10);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = props.Users.slice(indexOfFirstUser, indexOfLastUser);


    const totalPages = Math.ceil(props.Users.length / usersPerPage);


    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handleUsersPerPageChange = (event) => {
        setUsersPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    return (
        <div className='statistics-overview'>
            <p className='statistics-overview-text'>STATISTICS OVERVIEW:</p>
            <div className='statistics-content'>
                <div className='statistics-amount'>
                    <div className='text-container'>
                        <div className='stat-uppertext'>AMOUNT:</div>
                        <div className='stat-Lowertext'>{props.amount}</div>
                    </div>
                </div>
                <div className='statistics-transactions'>
                    <div className='text-container'>
                        <div className='stat-uppertext'>TRANSACTIONS:</div>
                        <div className='stat-Lowertext'>{props.transactions}</div>
                    </div>
                </div>
                <div className='statistics-addresses'>
                    <div className='text-container'>
                        <div className='stat-uppertext'>ADDRESSES:</div>
                        <div className='stat-Lowertext'>{props.address}</div>
                    </div>
                </div>
            </div>
            <div className='recent-transactions'>
                <div className='transaction-headings'>
                    <div className='users'>
                        <p>USERS</p>
                    </div>
                    <div className='transaction-hash'>
                        <p>TRANSACTION HASH</p>
                    </div>
                    <div className='value'>
                        <p>VALUE</p>
                    </div>
                    <div className='from'>
                        <p>FROM</p>
                    </div>
                    <div className='age'>
                        <p>AGE</p>
                    </div>
                    <div className='view'>
                        <p>VIEW</p>
                    </div>
                </div>
                {currentUsers.map((user, index) => (
                    <User key={index} {...user} />
                ))}
                <div className='pagination'>
                    <select 
                        className="pagination-dropdown" 
                        name="pagination-dropdown"
                        value={usersPerPage}
                        onChange={handleUsersPerPageChange}
                    >
                        <option value="10">10</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </select>
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                    {/* { <span>{currentPage} of {totalPages}</span> } */}
                    
                </div>
            </div>
        </div>
    );
}

export default Statistics_Overview;


// function Statistics_Overview(props) {
//     return (
//         <div className='statistics-overview'>
//             <p className='statistics-overview-text'>STATISTICS OVERVIEW:</p>
//             <div className='statistics-content'>
//                 <div className='statistics-amount'>
//                     <div class="text-container">
//                         <div class= 'stat-uppertext'>AMOUNT:</div>
//                         <div class= 'stat-Lowertext'>{props.amount}</div>
//                     </div>
//                 </div>
//                 <div className='statistics-transactions'>
//                     <div class="text-container">
//                         <div class= 'stat-uppertext'>TRANSACTIONS:</div>
//                         <div class= 'stat-Lowertext'>{props.transactions}</div>
//                     </div>
//                 </div>
//                 <div className='statistics-addresses'>
//                     <div class="text-container">
//                         <div class= 'stat-uppertext'>ADDRESSES:</div>
//                         <div class= 'stat-Lowertext'>{props.address}</div>
//                     </div>
//                 </div>
//             </div>
//             <div className='recent-transactions'>
//                 <div className='transaction-headings'>
//                     <div className='users'>
//                         <p>USERS</p>
//                     </div>
//                     <div className='transaction-hash'>
//                         <p>TRANSACIION HASH</p>
//                     </div>
//                     <div className='value'>
//                         <p>VALUE</p>
//                     </div>
//                     <div className='from'>
//                         <p>FROM</p>
//                     </div>
//                     <div className='age'>
//                         <p>AGE</p>
//                     </div>
//                     <div className='view'>
//                         <p>VIEW</p>
//                     </div>
//                 </div>
//                 {props.Users.map((user, index) => (
//                     <User key={index} {...user} />
//                 ))}
//   <div className='pagination'>
//     <button>test </button>
//             </div>
          

//             </div>
//         </div>
//     );
// }

// export default Statistics_Overview;