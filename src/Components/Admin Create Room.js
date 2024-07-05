import React, { useState } from 'react';
import '../Styles/Admin Create Room.css'
import Sidebar from "../Components/Admin Sidebar";

const CreateRoom = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [participants, setParticipants] = useState('');
  const [returnPercentage, setReturnPercentage] = useState('');
  const [prizeDistribution, setPrizeDistribution] = useState('');
  const [numPrizes, setNumPrizes] = useState('');
  const [totalReferral, setTotalReferral] = useState('');
  const [referralLevels, setReferralLevels] = useState({
    level1: '',
    level2: '',
    level3: ''
  });
  const [autoOpen, setAutoOpen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log({
      name,
      amount,
      participants,
      returnPercentage,
      prizeDistribution,
      numPrizes,
      totalReferral,
      referralLevels,
      autoOpen
    });
  };

  return (
    <div className='Admin-create-room'>
      <Sidebar />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Number of Participants/tickets:</label>
          <input type="text" value={participants} onChange={(e) => setParticipants(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Return %:</label>
          <input type="text" value={returnPercentage} onChange={(e) => setReturnPercentage(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Number of prizes:</label>
          <textarea value={numPrizes} onChange={(e) => setNumPrizes(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Prize distribution:</label>
          <textarea value={prizeDistribution} onChange={(e) => setPrizeDistribution(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Total Referral %:</label>
          <input type="text" value={totalReferral} onChange={(e) => setTotalReferral(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Auto Open:</label>
          <input type="checkbox" checked={autoOpen} onChange={(e) => setAutoOpen(e.target.checked)} />
        </div>
        <button type="submit">Create Room</button>
        <button type="button" onClick={() => console.log('Cancel')}>Cancel</button>
      </form>
    </div>
  );
};

export default CreateRoom;