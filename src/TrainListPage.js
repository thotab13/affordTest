import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrainCard from './TrainCard';

const BASE_URL = 'http://20.244.56.144';

function TrainListPage() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetchTrains();
  }, []);

  const fetchTrains = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/train/trains`, {
        headers: {
          Authorization: 'Bearer YOUR_AUTH_TOKEN_HERE',
        },
      });
      setTrains(response.data);
    } catch (error) {
      console.error('Error fetching trains:', error);
    }
  };

  return (
    <div className="train-list">
      <h1>Train Schedule</h1>
      {trains.map((train) => (
        <TrainCard key={train.trainNumber} train={train} />
      ))}
    </div>
  );
}

export default TrainListPage;
