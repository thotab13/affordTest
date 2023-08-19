import React from 'react';
import { Link } from 'react-router-dom';

function TrainCard({ train }) {
  // Destructure train properties
  const {
    trainName,
    trainNumber,
    departureTime,
    seatsAvailable,
    price,
    delayedBy,
  } = train;

  return (
    <div className="train-card">
      <h2>{trainName}</h2>
      <p>Train Number: {trainNumber}</p>
      {/* Display other train details */}
      <Link to={`/train/${trainNumber}`}>View Details</Link>
    </div>
  );
}

export default TrainCard;
