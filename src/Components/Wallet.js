import '../Styles/Wallet.css';
import { useState } from 'react';
import Sidebar from "../Components/Admin Sidebar";
import Navbar from "../Components/Admin Navbar";
import Footer from "../Components/Admin Footer";

function Wallet() {

    const [transferMode, setTransferMode] = useState('Auto');
    const [walletAddress, setWalletAddress] = useState('');
  
    const handleChange = () => {
      alert('Change button clicked');
    };
  
    const toggleTransferMode = (mode) => {
      setTransferMode(mode);
    };
  
    const handleBlock = () => {
      alert(`Block wallet: ${walletAddress}`);
    };
  
    const handleUnblock = () => {
      alert(`Unblock wallet: ${walletAddress}`);
    };

  return (
    <div className='wallet'>
        <Navbar/>
        <Sidebar />
        <div className="wallet-container">
            <h1>Hot Wallet</h1>
            <div className="wallet-header">
                <span className='id'>S.No</span>
                <span className='address'>Address</span>
                <span className='action'>Action</span>
            </div>
            <div className="wallet-entry">
                <span className='id'>1</span>
                <span className='address'>0x1234567890abcdef1234567890abcdef12345678</span>
                <button onClick={handleChange}>Change</button>
            </div>
        </div>
        <div className="wallet-container">
            <h1>Cold Wallet</h1>
            <div className="wallet-header">
                <span className='id'>S.No</span>
                <span className='address'>Address</span>
                <span className='action'>Action</span>
            </div>
            <div className="wallet-entry">
                <span className='id'>1</span>
                <span className='address'>0x1234567890abcdef1234567890abcdef12345678</span>
                <button onClick={handleChange}>Change</button>
            </div>
        </div>
        <div className="transfer-container">
            <h2>Transfer</h2>
            <div className="toggle-buttons">
                <p>Transfer hot wallet to cold wallet</p>  
                <button
                    className={transferMode === 'Auto' ? 'active' : ''}
                    onClick={() => toggleTransferMode('Auto')}
                >
                    Auto
                </button>
                <button
                    className={transferMode === 'Manual' ? 'active' : ''}
                    onClick={() => toggleTransferMode('Manual')}
                >
                    Manual
                </button>
            </div>
        </div>
        <div className="block-container">
            <h2>Block/Unblock Wallet</h2>
            <div className="block-input">
                <label htmlFor="wallet-address">Wallet Address</label>
                <input
                    type="text"
                    id="wallet-address"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                />
                <button onClick={handleBlock}>Block</button>
                <button onClick={handleUnblock}>Unblock</button>
            </div>
        </div>
    </div>

  );
}

export default Wallet;