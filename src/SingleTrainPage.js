import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'http://20.244.56.144';

function SingleTrainPage() {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    fetchTrainDetails();
  }, []);

  const fetchTrainDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/train/trains/${trainNumber}`, {
        headers: {
          Authorization: 'Bearer YOUR_AUTH_TOKEN_HERE',
        },
      });
      setTrain(response.data);
    } catch (error) {
      console.error('Error fetching train details:', error);
    }
  };

  return (
    <div className="single-train">
      {train && (
        <div>
          <h1>{train.trainName}</h1>
          {/* Display train details */}
        </div>
      )}
    </div>
  );
}

export default SingleTrainPage;
