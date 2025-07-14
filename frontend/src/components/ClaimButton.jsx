import React from 'react';

const ClaimButton = ({ onClick }) => {
  return (
    <div className="claim-btn">
      <button onClick={onClick}>Claim Points</button>
    </div>
  );
};

export default ClaimButton;
