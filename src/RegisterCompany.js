import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://20.244.56.144';

function RegisterCompany() {
  const [registered, setRegistered] = useState(false);

  const registerCompany = async () => {
    try {
      const registrationData = {
        companyName: 'Train Central',
        ownerName: 'Thota bhuvana chandra',
        rollNo: 'AM.EN.U4AIE20170',
        ownerEmail: 'thotab13@gmail.com',
        accessCode: 'hMkCJZ',
      };

      const response = await axios.post(`${BASE_URL}/train/register`, registrationData);
      console.log('Registration response:', response.data);
      setRegistered(true);
    } catch (error) {
      console.error('Error registering company:', error);
    }
  };

  return (
    <div className="register-company">
      {!registered ? (
        <button onClick={registerCompany}>Register Company</button>
      ) : (
        <p>Company registered successfully!</p>
      )}
    </div>
  );
}

export default RegisterCompany;